import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DiningFAQ() {
  const faqs = [
    {
      question: "What meal plan should I choose?",
      answer: "The Unlimited Plan is most popular for students living on campus who want maximum flexibility. If you have a lighter schedule or cook occasionally, the 15 or 10 meal plans might be better. Consider your eating habits and class schedule when deciding.",
    },
    {
      question: "Can I change my meal plan during the semester?",
      answer: "Yes, meal plan changes are allowed during the first two weeks of each semester. After that, changes can only be made at the start of the next semester, except in special circumstances approved by Dining Services.",
    },
    {
      question: "What are dining dollars and how do they work?",
      answer: "Dining dollars are a flexible form of currency included with your meal plan. They can be used at any campus dining location, including retail cafes and convenience stores. Unlike meal swipes, they rollover to the next semester.",
    },
    {
      question: "Are allergies and dietary restrictions accommodated?",
      answer: "Yes! All dining halls provide allergen information at every station. We offer vegetarian, vegan, gluten-free, and halal options daily. For severe allergies, contact the dining hall manager to discuss special accommodations.",
    },
    {
      question: "Can I bring guests to the dining hall?",
      answer: "Yes, students may bring up to 2 guests per visit. Guest passes must be purchased in advance at $8 (breakfast), $12 (lunch), or $15 (dinner). Children under 5 eat free with a paying adult.",
    },
    {
      question: "What happens if I run out of meal swipes?",
      answer: "If you use all your weekly swipes, you can purchase additional guest meals or use dining dollars. You can also upgrade your meal plan for the following semester if you consistently run out.",
    },
    {
      question: "Can I get a to-go container?",
      answer: "Yes, reusable to-go containers are available for purchase at $2. You can fill one container per meal swipe. The eco-friendly containers can be exchanged for a clean one at your next visit.",
    },
    {
      question: "Are the dining halls open during breaks?",
      answer: "Hours are reduced during spring and fall breaks. During winter break, most dining halls close, with one remaining open with limited hours. Check the Dining Hours page for specific break schedules.",
    },
    {
      question: "How do I report a food safety concern?",
      answer: "Notify dining hall staff immediately of any concerns. You can also submit a report through the student portal or contact Dining Services directly at dining@csulb.edu or (562) 985-5000.",
    },
    {
      question: "Can I use my meal plan at retail locations?",
      answer: "Meal swipes can only be used at the three residential dining halls. However, your dining dollars can be used at any campus dining location, including cafes, food trucks, and convenience stores.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <Link to="/dining-halls">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dining Halls
          </Button>
        </Link>

        <h1 className="mb-4 text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Find answers to common questions about CSULB dining
        </p>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 rounded-lg border border-border bg-card p-6">
            <h3 className="mb-3 text-lg font-semibold">Still have questions?</h3>
            <p className="mb-4 text-muted-foreground">
              Contact Dining Services for more information:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: dining@csulb.edu</p>
              <p>Phone: (562) 985-5000</p>
              <p>Office Hours: Monday - Friday, 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
