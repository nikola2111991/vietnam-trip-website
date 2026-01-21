'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    id: 1,
    content: "NeuralLabs transformed our customer support with AI agents. Response times dropped by 80% and customer satisfaction soared. They're not just developers—they're strategic partners.",
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow Inc.',
    avatar: 'SC',
    gradient: 'from-electric to-cyber',
  },
  {
    id: 2,
    content: "The RAG pipeline they built for our legal documents is incredible. What used to take hours of manual review now happens in minutes. Game-changing technology.",
    author: 'Michael Torres',
    role: 'Head of Operations',
    company: 'LegalEase',
    avatar: 'MT',
    gradient: 'from-cyber to-neon-pink',
  },
  {
    id: 3,
    content: "Working with NeuralLabs felt like having a team from the future. Their AI-first approach delivered results we didn't think were possible in our timeline.",
    author: 'Emma Rodriguez',
    role: 'Founder',
    company: 'Startup Labs',
    avatar: 'ER',
    gradient: 'from-acid to-electric',
  },
]

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative h-full p-8 rounded-2xl glass border border-white/5 hover:border-white/10 transition-all duration-500">
        {/* Quote icon */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote className="w-12 h-12 text-white" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className={cn(
            'w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center font-heading font-bold text-white',
            testimonial.gradient
          )}>
            {testimonial.avatar}
          </div>
          <div>
            <div className="font-heading font-semibold text-white">
              {testimonial.author}
            </div>
            <div className="text-sm text-gray-500">
              {testimonial.role} at {testimonial.company}
            </div>
          </div>
        </div>

        {/* Hover glow */}
        <div className={cn(
          'absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 bg-gradient-to-br pointer-events-none',
          testimonial.gradient
        )} />
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-obsidian to-void" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-neon-pink mb-6">
            Testimonials
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what founders and leaders say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Social proof stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-gray-500"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-heading font-bold text-white">4.9/5</span>
            <span className="text-sm">Average Rating</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-800" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-heading font-bold text-white">50+</span>
            <span className="text-sm">Happy Clients</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-800" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-heading font-bold text-white">100%</span>
            <span className="text-sm">Project Completion</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
