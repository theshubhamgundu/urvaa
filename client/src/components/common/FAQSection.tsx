import React, { useState } from 'react';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is URVA?',
    answer: 'URVA is a rural-products commerce brand built around One Village – One Product and the regional stories behind Indian goods.'
  },
  {
    question: 'What kinds of products can I discover?',
    answer: 'URVA is organized around regional foods and Araku products, eco-friendly goods, Swadesi handlooms, and Kadiyam nursery plants. Availability depends on the current catalog.'
  },
  {
    question: 'How can I learn where a product comes from?',
    answer: 'Check each product listing for its available origin, maker, ingredient, or material information. We aim to make these details clear and accurate.'
  },
  {
    question: 'Are all products locally sourced or certified?',
    answer: 'Sourcing and certification vary by product. Please refer to the information on each listing and contact support if you need clarification.'
  },
  {
    question: 'Can I place a bulk or business enquiry?',
    answer: 'For questions about a product or a potential business order, please contact URVA support. Availability and terms can be confirmed for each request.'
  },
  {
    question: 'How do I get help with an order?',
    answer: 'Use the order tracking and account pages for order updates, or contact support using the details shown on this website.'
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#FBF6ED] border-t border-[#E6DACB]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-sans font-bold text-[#C79A56] uppercase tracking-[0.2em] mb-3">
            <FaQuestionCircle className="text-[#5C2333]" /> Help & Support
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#2A1C22]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Questions about regional products, orders, or potential partnerships?
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E6DACB] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="font-serif font-bold text-[#2A1C22] text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-[#5C2333] transition-transform duration-300 shrink-0 text-sm ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-48 border-t border-gray-100' : 'max-h-0'
                  }`}
                >
                  <p className="p-5 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans bg-gray-50/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
