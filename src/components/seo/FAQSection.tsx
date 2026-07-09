import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
}: {
  faqs: FAQ[];
  title?: string;
}) {
  return (
    <div className="mt-16">
      <h2 className="mb-8 text-center text-3xl font-bold">{title}</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
          >
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
