'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import {
  SendHorizonal,
  User,
  Loader2,
  X,
  Paperclip,
  File as FileIcon,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { handleChat } from '@/app/actions';
import type {
  SmartChatbotClientInput,
  SmartChatbotServerResponse,
} from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import ReactMarkdown from 'react-markdown';
import { onAuthStateChanged, type User as FirebaseUser } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface Message {
  id: number;
  role: 'user' | 'bot';
  content: string;
  fileName?: string;
  isStreaming?: boolean; // New property to indicate if a message is currently streaming
}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button
      type="submit"
      size="icon"
      disabled={pending}
    >
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <SendHorizonal className="h-4 w-4" />
      )}
    </Button>
  );
}

function ChatInterface({
  onClose,
  chatbotImage,
  imageLoading,
  chatbotName,
  userName,
}: {
  onClose: () => void;
  chatbotImage: string | null;
  imageLoading: boolean;
  chatbotName: string;
  userName?: string;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [query, setQuery] = useState('');
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [conversationResumeText, setConversationResumeText] = useState<
    string | undefined
  >();
  const formRef = useRef<HTMLFormElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [isPending, startTransition] = useTransition();

  // Function to simulate typing effect
  const typeMessage = (fullContent: string, messageId: number) => {
    let currentContent = '';
    let i = 0;
    const typingSpeed = 20; // milliseconds per character

    const intervalId = setInterval(() => {
      if (i < fullContent.length) {
        currentContent += fullContent[i];
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === messageId ? { ...msg, content: currentContent } : msg,
          ),
        );
        i++;
      } else {
        clearInterval(intervalId);
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === messageId ? { ...msg, isStreaming: false } : msg,
          ),
        );
      }
    }, typingSpeed);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query.trim() && !attachedFile) {
      console.log('[Chatbot Client] handleSubmit: Aborting, no query or file.');
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: query,
    };
    if (attachedFile) {
      userMessage.fileName = attachedFile.name;
    }
    setMessages((prev) => [...prev, userMessage]);

    // Add a placeholder bot message immediately to show the loader
    const botMessageId = Date.now() + 1; // Unique ID for the bot's response
    setMessages((prev) => [
      ...prev,
      { id: botMessageId, role: 'bot', content: '', isStreaming: true },
    ]);

    startTransition(async () => {
      try {
        const isNewUpload = !!attachedFile;
        const input: SmartChatbotClientInput = {
          userQuery: query,
          chatbotName: chatbotName,
          userName: userName,
          isNewUpload: isNewUpload,
        };

        const processRequest = async (dataUri?: string) => {
          if (dataUri) {
            input.resumeDataUri = dataUri;
          } else {
            input.resumeText = conversationResumeText;
          }
          console.log('[Chatbot Client] handleSubmit: Calling handleChat.');
          const result: SmartChatbotServerResponse = await handleChat(input);

          if (result.error) {
            console.error(
              '[Chatbot Client] handleSubmit: Received error from server:',
              result.error,
            );

            setMessages((prevMessages) =>
              prevMessages.map((msg) =>
                msg.id === botMessageId
                  ? {
                      ...msg,
                      content: result.error ?? 'An unknown error occurred.',
                      isStreaming: false,
                    }
                  : msg,
              ),
            );
          } else if (result.response) {
            console.log(
              '[Chatbot Client] handleSubmit: Received response from server.',
            );
            // Start typing animation for the bot's response
            typeMessage(result.response.botResponse, botMessageId);

            if (result.resumeContext) {
              console.log(
                '[Chatbot Client] handleSubmit: Updating resume context.',
              );
              setConversationResumeText(result.resumeContext);
            }
          }
        };

        if (attachedFile) {
          const reader = new FileReader();
          reader.readAsDataURL(attachedFile);
          reader.onload = () => processRequest(reader.result as string);
          reader.onerror = (error) => {
            console.error(
              '[Chatbot Client] handleSubmit: Error reading file:',
              error,
            );
            setMessages((prevMessages) =>
              prevMessages.map((msg) =>
                msg.id === botMessageId
                  ? {
                      ...msg,
                      content: "Sorry, I couldn't read the attached file.",
                      isStreaming: false,
                    }
                  : msg,
              ),
            );
          };
        } else {
          await processRequest();
        }
      } catch (error) {
        console.error(
          '[Chatbot Client] handleSubmit: Failed to handle chat:',
          error,
        );
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'Sorry, an unexpected error occurred.';
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === botMessageId
              ? { ...msg, content: errorMessage, isStreaming: false }
              : msg,
          ),
        );
      }
    });

    setQuery('');
    setAttachedFile(null);
    if (formRef.current) {
      const fileInput = formRef.current.querySelector(
        'input[type="file"]',
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (formRef.current) {
        const submitEvent = new Event('submit', {
          bubbles: true,
          cancelable: true,
        });
        formRef.current.dispatchEvent(submitEvent);
      }
    }
  };

  const initialMessage = `Hello${
    userName ? ` ${userName}` : ''
  }! I'm ${chatbotName}, your friendly AI assistant for Sproutern. I can help you with:

* **Sproutern Information:** Tell you about Sproutern's mission, features, and services.
* **Internship Search:** Find available internships on the platform.
* **Resume Coaching:** Review and optimize your resume to make it stand out.

How can I help you today?`;

  return (
    <Card className="w-full max-w-sm border shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <CardTitle className="flex items-center gap-2 text-base font-semibold">
          {imageLoading ? (
            <Skeleton className="h-6 w-6 rounded-full" />
          ) : (
            <Image
              src={'/chatbot.png'}
              data-ai-hint="robot avatar"
              alt={`${chatbotName} chatbot avatar`}
              width={24}
              height={24}
              className="rounded-full"
            />
          )}
          {chatbotName}
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={onClose}
          aria-label="Close chat"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <ScrollArea
          className="h-[400px] w-full pr-4"
          ref={scrollAreaRef}
        >
          <div className="space-y-4">
            {messages.length === 0 && (
              <div className="flex justify-start gap-3 text-sm">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={chatbotImage || '/chatbot.png'}
                    alt={`${chatbotName} chatbot avatar`}
                  />
                  <AvatarFallback>{chatbotName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex max-w-xs flex-col rounded-lg bg-muted px-4 py-2">
                  <ReactMarkdown
                    components={{
                      strong: ({ node, ...props }) => (
                        <strong
                          className="font-semibold text-foreground"
                          {...props}
                        />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul
                          className="list-disc space-y-1 pl-4"
                          {...props}
                        />
                      ),
                      p: ({ node, ...props }) => (
                        <p
                          className="whitespace-pre-wrap"
                          {...props}
                        />
                      ),
                    }}
                  >
                    {initialMessage}
                  </ReactMarkdown>
                </div>
              </div>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 text-sm ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'bot' && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={chatbotImage || '/chatbot.png'}
                      alt={`${chatbotName} chatbot avatar`}
                    />
                    <AvatarFallback>{chatbotName.charAt(0)}</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`flex max-w-xs flex-col rounded-lg px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  {message.content && (
                    <ReactMarkdown
                      components={{
                        strong: ({ node, ...props }) => (
                          <strong
                            className="font-semibold"
                            {...props}
                          />
                        ),
                        ul: ({ node, ...props }) => (
                          <ul
                            className="list-disc space-y-1 pl-4"
                            {...props}
                          />
                        ),
                        p: ({ node, ...props }) => (
                          <p
                            className="whitespace-pre-wrap"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  )}
                  {message.fileName && (
                    <div
                      className={`mt-2 flex items-center gap-1.5 rounded-md p-2 text-xs ${
                        message.role === 'user'
                          ? 'bg-primary-foreground/20'
                          : 'bg-background'
                      }`}
                    >
                      <FileIcon className="h-3 w-3" />
                      <span className="truncate">{message.fileName}</span>
                    </div>
                  )}
                  {/* Show loader only for the current streaming bot message */}
                  {/* {message.role === "bot" && message.isStreaming && (
                    <div className="flex items-center pt-2">
                      <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                    </div>
                  )} */}
                </div>
                {message.role === 'user' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {/* The previous `isPending` loader at the end of messages is replaced by `isStreaming` on the specific bot message */}
          </div>
        </ScrollArea>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-2"
        >
          {attachedFile && (
            <div className="flex items-center justify-between rounded-md bg-muted p-2 text-sm">
              <div className="flex items-center gap-2 truncate">
                <FileIcon className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <span className="truncate">{attachedFile.name}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                type="button"
                onClick={() => {
                  setAttachedFile(null);
                  if (formRef.current) {
                    const fileInput = formRef.current.querySelector(
                      'input[type="file"]',
                    ) as HTMLInputElement;
                    if (fileInput) fileInput.value = '';
                  }
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Input
              name="userQuery"
              placeholder="Ask something..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1"
              autoComplete="off"
              disabled={isPending}
            />
            <input
              type="file"
              name="resumeFile"
              id="resumeFile"
              className="hidden"
              accept=".pdf"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setAttachedFile(file);
              }}
              disabled={isPending}
            />
            <Button
              asChild
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Attach resume"
              disabled={isPending}
            >
              <label htmlFor="resumeFile">
                <Paperclip className="h-4 w-4" />
              </label>
            </Button>
            <SubmitButton pending={isPending} />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export function ChatbotClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [chatbotImage, setChatbotImage] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [chatbotName, setChatbotName] = useState('Prem');
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    setIsMounted(true);

    setChatbotImage('/chatbot.png');
    setImageLoading(false);

    const popupTimer = setTimeout(() => {
      if (!isOpen) {
        setShowWelcomePopup(true);
      }
    }, 3000);

    const hidePopupTimer = setTimeout(() => {
      setShowWelcomePopup(false);
    }, 10000);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      clearTimeout(popupTimer);
      clearTimeout(hidePopupTimer);
      unsubscribe();
    };
  }, [isOpen]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowWelcomePopup(false);
  };

  if (!isMounted) {
    return null;
  }

  const welcomeMessage = `Hi ${
    currentUser?.displayName ? currentUser.displayName : 'there'
  }! How can I help you?`;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {isOpen ? (
        <ChatInterface
          onClose={() => setIsOpen(false)}
          chatbotImage={chatbotImage}
          imageLoading={imageLoading}
          chatbotName={chatbotName}
          userName={currentUser?.displayName || undefined}
        />
      ) : (
        <div className="relative">
          {showWelcomePopup && (
            <div className="absolute bottom-full left-0 mb-2 w-max max-w-[220px] rounded-lg bg-primary p-3 text-primary-foreground shadow-lg animate-in fade-in zoom-in-95">
              <p className="text-sm font-medium">{welcomeMessage}</p>
            </div>
          )}
          <Button
            size="icon"
            className="h-14 w-14 overflow-hidden rounded-full p-0 shadow-lg"
            onClick={handleOpenChat}
            aria-label="Open Chatbot"
          >
            <Image
              src={'/chatbot.png'}
              data-ai-hint="robot avatar"
              alt="Open Chatbot"
              width={56}
              height={56}
            />
          </Button>
        </div>
      )}
    </div>
  );
}
