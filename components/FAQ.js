'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqContent } from '@/content/data'

function FAQItem({ question, answer, isOpen, onClick, index }) {
  return (
    <div className="border-b border-olive-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-medium pr-8 transition-colors duration-300 ${
          isOpen ? 'text-olive-700' : 'text-olive-800 group-hover:text-olive-600'
        }`}>
          {question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-olive-600 text-white rotate-45' : 'bg-olive-100 text-olive-600 group-hover:bg-olive-200'
        }`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12">
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-olive-600 font-semibold tracking-wider text-sm mb-4">
            IMATE PITANJA?
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-olive-800">
            Često postavljana pitanja
          </h2>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-olive-50 rounded-3xl p-6 md:p-10"
        >
          {faqContent.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              index={index}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Nemate odgovor na svoje pitanje?
          </p>
          <a
            href="https://www.instagram.com/queen.of.compass/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-olive-600 font-semibold hover:text-olive-700 transition-colors"
          >
            <span>Kontaktirajte nas direktno</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
