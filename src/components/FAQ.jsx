import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What technology stack do you use?",
      answer: "I primarily work with React.js, Tailwind CSS, and JavaScript (ES6+). I also have experience with state management libraries like Redux and modern build tools like Vite."
    },
    {
      question: "Can you convert my design into code?",
      answer: "Absolutely! I specialize in converting Figma, Adobe XD, or Sketch designs into pixel-perfect, responsive HTML/CSS or React code, ensuring the final product matches your vision exactly."
    },
    {
      question: "Do you ensure the websites are mobile-responsive?",
      answer: "Yes, mobile responsiveness is a priority in my workflow. I build websites using a mobile-first approach, ensuring they look and work perfectly on all devices, from smartphones to large desktop screens."
    },
    {
      question: "Do you offer website maintenance?",
      answer: "Yes, I provide ongoing maintenance services including content updates, performance checking, and bug fixes to ensure your website remains aligned with modern web standards."
    },
    {
      question: "Do you work with APIs?",
      answer: "Yes, I have experience integrating third-party APIs (like payment gateways, social media feeds, or data services) into web applications to add dynamic functionality."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply reach out through the contact form below with your project details. I'll review your requirements and we can discuss the best technical approach for your needs."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-primary-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Here are answers to some of the most common questions I receive as a freelance Frontend Developer. If you don't see your question here, feel free to reach out—I'm happy to help!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-lightBlue-500 focus:ring-inset"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <ChevronDown
                      className={`w-6 h-6 text-lightBlue-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                        }`}
                    />
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Don't hesitate to reach out! I'm here to help answer any questions you might have about your project.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
