'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What makes NeuralLabs different from other agencies?',
    answer: "We're AI-native from day one. While traditional agencies are retrofitting AI onto old workflows, we've built our entire process around AI capabilities. This means faster delivery, smarter solutions, and technology that actually works in production—not just demos.",
  },
  {
    question: 'How long does a typical project take?',
    answer: "It depends on complexity, but our AI-accelerated workflows typically deliver results 3-5x faster than traditional development. A typical MVP can be ready in 4-6 weeks, while more complex enterprise solutions might take 2-3 months. We'll give you a detailed timeline during our discovery call.",
  },
  {
    question: 'Do you work with early-stage startups?',
    answer: "We work with companies at all stages—from pre-seed startups to Fortune 500 enterprises. For early-stage companies, we often structure flexible engagement models that grow with your funding. What matters most is that you have a clear vision and are ready to leverage AI meaningfully.",
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'Our core stack includes Next.js/React for frontends, Python for AI/ML backends, and we work extensively with OpenAI, Anthropic, and open-source models. For infrastructure, we use Vercel, AWS, and specialized AI platforms. But we choose tools based on your needs, not trends.',
  },
  {
    question: 'How do you handle data security and privacy?',
    answer: "Security is foundational, not an afterthought. We implement enterprise-grade security practices including SOC 2 compliance protocols, data encryption at rest and in transit, and strict access controls. For sensitive applications, we can deploy models on-premise or in private clouds.",
  },
  {
    question: 'What does ongoing support look like?',
    answer: "We offer flexible maintenance and support packages. This includes monitoring, bug fixes, model fine-tuning, and feature updates. Many clients start with our standard support tier and scale up as their AI systems become more critical to operations.",
  },
]

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <button
        onClick={onToggle}
        className={cn(
          'w-full flex items-start justify-between gap-4 p-6 rounded-2xl text-left transition-all duration-300',
          isOpen
            ? 'glass-strong border border-electric/30'
            : 'glass hover:bg-white/5 border border-transparent'
        )}
        aria-expanded={isOpen}
      >
        <span className={cn(
          'font-heading font-semibold text-lg transition-colors duration-300',
          isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'
        )}>
          {faq.question}
        </span>
        <span className={cn(
          'flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300',
          isOpen
            ? 'bg-electric text-white rotate-0'
            : 'bg-white/5 text-gray-400 group-hover:bg-white/10'
        )}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
            <div className="px-6 pb-6 pt-2">
              <p className="text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="faq" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-obsidian to-void" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-cyber mb-6">
            FAQ
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Common <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Still have questions? We'd love to chat.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-white bg-gradient-to-r from-electric to-cyber hover:shadow-lg hover:shadow-cyber/25 transition-shadow duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
