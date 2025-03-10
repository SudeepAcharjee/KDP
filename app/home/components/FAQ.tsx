'use client';
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does KDP STUDIOS offer?",
    answer:
      "We specialize in event planning, artist management, PR, and wedding planning. Whether it's a corporate event, private celebration, or a grand wedding, we bring your vision to life.",
  },
  {
    question: "Can you help with destination weddings?",
    answer:
      "Absolutely! We provide full-service wedding planning, including destination weddings, venue selection, decor, and coordination.",
  },
  {
    question: "How does artist management work at KDP STUDIOS?",
    answer:
      "We handle talent bookings, brand collaborations, event performances, and overall career growth for artists.",
  },
  {
    question: "How can I book your services?",
    answer:
      "You can reach out to us via our contact form, email, or give us a call. Our team will guide you through the process based on your event needs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-6 pr-9">
            Have questions about our event planning, artist management, or PR
            services? Here are some of the most common queries.
          </p>
          <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition">
            Get in Touch
          </button>
        </div>
        <div className="md:w-1/2 space-y-4 mt-6 md:mt-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-3">
              <button
                className="flex justify-between items-center w-full text-left text-lg font-medium text-black py-3"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
