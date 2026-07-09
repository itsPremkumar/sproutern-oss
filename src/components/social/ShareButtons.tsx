'use client';

import { useState, useEffect } from 'react';
import {
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Link2,
  Check,
  MessageCircle,
  Send,
} from 'lucide-react';
import { logSocialShare } from '@/lib/analytics';

// Reddit and Pinterest icons as SVG components
const RedditIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
  </svg>
);

interface ShareButtonsProps {
  url?: string;
  title?: string;
  description?: string;
  hashtags?: string[];
  className?: string;
  showLabels?: boolean;
  variant?: 'default' | 'compact' | 'expanded';
}

export function ShareButtons({
  url,
  title,
  description,
  hashtags = [],
  className = '',
  showLabels = false,
  variant = 'default',
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  // Check for native share API after mount to avoid hydration mismatch
  useEffect(() => {
    setCanNativeShare(
      typeof navigator !== 'undefined' && typeof navigator.share === 'function',
    );
  }, []);

  const shareUrl =
    url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle =
    title ||
    (typeof document !== 'undefined'
      ? document.title
      : 'Check this out on Sproutern');
  const shareDescription = description || '';

  const trackShare = (platform: string) => {
    logSocialShare(platform, 'page', shareUrl);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      trackShare('copy_link');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareOnFacebook = () => {
    trackShare('facebook');
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(fbUrl, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    trackShare('twitter');
    const text = shareTitle;
    const hashtagsStr = hashtags.join(',');
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}${hashtagsStr ? `&hashtags=${hashtagsStr}` : ''}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    trackShare('linkedin');
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsApp = () => {
    trackShare('whatsapp');
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareTitle} ${shareUrl}`)}`;
    window.open(whatsappUrl, '_blank', 'width=600,height=400');
  };

  const shareOnTelegram = () => {
    trackShare('telegram');
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
    window.open(telegramUrl, '_blank', 'width=600,height=400');
  };

  const shareOnReddit = () => {
    trackShare('reddit');
    const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`;
    window.open(redditUrl, '_blank', 'width=600,height=600');
  };

  const shareOnPinterest = () => {
    trackShare('pinterest');
    const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareTitle)}`;
    window.open(pinterestUrl, '_blank', 'width=600,height=600');
  };

  const shareViaEmail = () => {
    trackShare('email');
    const subject = encodeURIComponent(shareTitle);
    const body = encodeURIComponent(`${shareDescription}\n\n${shareUrl}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  // Native share API for mobile
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        trackShare('native');
        await navigator.share({
          title: shareTitle,
          text: shareDescription,
          url: shareUrl,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  const buttonClass =
    variant === 'expanded'
      ? 'flex items-center gap-2 rounded-lg px-3 py-2 transition-colors'
      : 'rounded-full p-2 transition-colors';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="hidden text-sm font-medium text-muted-foreground sm:inline">
        Share:
      </span>

      <div className="flex flex-wrap items-center gap-1 sm:gap-2">
        {/* Native share button for mobile */}
        {canNativeShare && (
          <button
            onClick={handleNativeShare}
            className={`${buttonClass} hover:bg-gray-100`}
            aria-label="Share"
          >
            <Share2 className="h-5 w-5 text-muted-foreground" />
            {showLabels && <span className="text-sm">Share</span>}
          </button>
        )}

        {/* WhatsApp - High priority for India traffic */}
        <button
          onClick={shareOnWhatsApp}
          className={`group ${buttonClass} hover:bg-green-50`}
          aria-label="Share on WhatsApp"
        >
          <MessageCircle className="h-5 w-5 text-muted-foreground group-hover:text-green-500" />
          {showLabels && <span className="text-sm">WhatsApp</span>}
        </button>

        {/* Telegram */}
        <button
          onClick={shareOnTelegram}
          className={`group ${buttonClass} hover:bg-sky-50`}
          aria-label="Share on Telegram"
        >
          <Send className="h-5 w-5 text-muted-foreground group-hover:text-sky-500" />
          {showLabels && <span className="text-sm">Telegram</span>}
        </button>

        {/* Facebook */}
        <button
          onClick={shareOnFacebook}
          className={`group ${buttonClass} hover:bg-blue-50`}
          aria-label="Share on Facebook"
        >
          <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-blue-600" />
          {showLabels && <span className="text-sm">Facebook</span>}
        </button>

        {/* Twitter */}
        <button
          onClick={shareOnTwitter}
          className={`group ${buttonClass} hover:bg-sky-50`}
          aria-label="Share on Twitter"
        >
          <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-sky-500" />
          {showLabels && <span className="text-sm">Twitter</span>}
        </button>

        {/* LinkedIn */}
        <button
          onClick={shareOnLinkedIn}
          className={`group ${buttonClass} hover:bg-blue-50`}
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-blue-700" />
          {showLabels && <span className="text-sm">LinkedIn</span>}
        </button>

        {/* Reddit */}
        <button
          onClick={shareOnReddit}
          className={`group ${buttonClass} hover:bg-orange-50`}
          aria-label="Share on Reddit"
        >
          <RedditIcon className="h-5 w-5 text-muted-foreground group-hover:text-orange-500" />
          {showLabels && <span className="text-sm">Reddit</span>}
        </button>

        {/* Pinterest */}
        <button
          onClick={shareOnPinterest}
          className={`group ${buttonClass} hover:bg-red-50`}
          aria-label="Share on Pinterest"
        >
          <PinterestIcon className="h-5 w-5 text-muted-foreground group-hover:text-red-600" />
          {showLabels && <span className="text-sm">Pinterest</span>}
        </button>

        {/* Email */}
        <button
          onClick={shareViaEmail}
          className={`group ${buttonClass} hover:bg-gray-100`}
          aria-label="Share via Email"
        >
          <Mail className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
          {showLabels && <span className="text-sm">Email</span>}
        </button>

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          className={`group relative ${buttonClass} hover:bg-green-50`}
          aria-label="Copy link"
        >
          {copied ? (
            <Check className="h-5 w-5 text-green-600" />
          ) : (
            <Link2 className="h-5 w-5 text-muted-foreground group-hover:text-green-600" />
          )}
          {showLabels && (
            <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
          )}
        </button>
      </div>
    </div>
  );
}

/**
 * Floating share buttons variant for blog posts
 */
export function FloatingShareButtons(props: ShareButtonsProps) {
  return (
    <div className="sticky top-24 hidden lg:block">
      <div className="flex flex-col gap-3">
        <span className="mb-1 text-xs font-medium text-gray-500">SHARE</span>
        <ShareButtons
          {...props}
          className="flex-col"
        />
      </div>
    </div>
  );
}

/**
 * Compact share buttons for mobile
 */
export function CompactShareButtons(props: ShareButtonsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
      >
        <Share2 className="h-4 w-4" />
        <span className="text-sm font-medium">Share</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute bottom-full right-0 z-50 mb-2 min-w-[200px] rounded-lg border bg-white p-4 shadow-lg">
            <ShareButtons
              {...props}
              className="flex-col items-start gap-3"
            />
          </div>
        </>
      )}
    </div>
  );
}
