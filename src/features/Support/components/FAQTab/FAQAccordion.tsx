"use client";
import { Plus, Minus } from "lucide-react";
import styles from "./FAQAccordion.module.css";
import { useState } from "react";

const MOCK_FAQS = [
  {
    id: "1",
    question: "How do I reset my password?",
    answer:
      "You can reset your password by clicking on 'Forgot Password' on the login page. We will send a password reset link to your registered email address.",
  },
  {
    id: "2",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards including Visa, MasterCard, and American Express, as well as PayPal and Apple Pay.",
  },
  {
    id: "3",
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription whenever you want from your Account Settings. You will retain access until the end of your billing cycle.",
  },
  {
    id: "4",
    question: "How can I contact customer support directly?",
    answer:
      "If you can't find your answer here, switch to the 'Report Issue' tab above or send us an email at support@example.com.",
  },
  {
    id: "5",
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to sign up.",
  },
  {
    id: "6",
    question: "How do I update my billing information?",
    answer:
      "Navigate to Settings > Billing in your dashboard. From there, you can add, remove, or edit your saved payment methods.",
  },
  {
    id: "7",
    question: "Is my personal data secure?",
    answer:
      "Absolutely. We use end-to-end encryption and adhere to strict data privacy regulations to ensure your personal information remains safe.",
  },
  {
    id: "8",
    question: "Where can I track my order status?",
    answer:
      "You can track your order in real-time under the 'Orders' tab in your profile menu, or through the tracking link sent to your email.",
  },
];

export default function FAQAccordion({ value }: { value: string }) {
  const [idQuestion, setIdQuestion] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setIdQuestion((prevId) => (prevId === id ? null : id));
  };

  const filterQuestions = MOCK_FAQS.filter((mock) => {
    const searchTerm = value.trim().toLowerCase();
    return mock.question.toLowerCase().includes(searchTerm);
  });

  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Top Questions</h2>

      <div className={styles.accordionList}>
        {filterQuestions.length > 0 ? (
          filterQuestions.map((item) => {
            const isOpen: boolean = idQuestion === item.id;

            return (
              <div key={item.id} className={styles.accordionItem}>
                <button
                  className={styles.accordionHeader}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-header-${item.id}`}
                  onClick={() => toggleQuestion(item.id)}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  {isOpen ? (
                    <Minus
                      className={styles.icon}
                      size={20}
                      aria-hidden="true"
                    />
                  ) : (
                    <Plus
                      className={styles.icon}
                      size={20}
                      aria-hidden="true"
                    />
                  )}
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-header-${item.id}`}
                    className={styles.accordionContent}
                  >
                    <p className={styles.answerText}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p className={styles.noResults}>
            No questions found matching your search.
          </p>
        )}
      </div>
    </section>
  );
}
