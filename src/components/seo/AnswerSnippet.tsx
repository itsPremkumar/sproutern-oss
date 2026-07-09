import React from 'react';

interface AnswerSnippetProps {
  question: string;
  answer: string;
  headingLevel?: 'h2' | 'h3' | 'h4';
  className?: string;
}

/**
 * AEO (Answer Engine Optimization) Component
 *
 * Purpose: Structured content block designed to be picked up by:
 * 1. Google "Featured Snippets"
 * 2. Voice Search (Speakable)
 * 3. AI Chatbots (Direct Answer)
 *
 * Best Practice:
 * - Answer should be 40-60 words
 * - Direct, factual, and concise
 * - Uses semantic HTML
 */
export const AnswerSnippet: React.FC<AnswerSnippetProps> = ({
  question,
  answer,
  headingLevel = 'h3',
  className = '',
}) => {
  const Heading = headingLevel;

  return (
    <section
      className={`aeo-snippet my-6 rounded-lg border-l-4 border-primary bg-muted/30 p-6 ${className}`}
      data-aeo="true"
      itemScope
      itemType="https://schema.org/QAPage"
    >
      <Heading
        className="mb-3 text-xl font-bold text-foreground"
        itemProp="name"
      >
        {question}
      </Heading>
      <div
        className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground"
        itemProp="mainEntity"
        itemScope
        itemType="https://schema.org/Question"
      >
        <meta
          itemProp="name"
          content={question}
        />
        <div
          itemProp="acceptedAnswer"
          itemScope
          itemType="https://schema.org/Answer"
        >
          <div
            itemProp="text"
            className="aeo-answer-text leading-relaxed"
          >
            {answer}
          </div>
        </div>
      </div>
    </section>
  );
};
