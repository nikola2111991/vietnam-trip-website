'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { testimonialsContent } from '@/content/data'

const StarIcon = () => (
  <svg className="w-5 h-5 fill-gold-400 text-gold-400" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export default function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-olive-600 font-semibold tracking-wider text-sm mb-4">
            ISKUSTVA NAŠIH PUTNIKA
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-olive-800">
            Šta kažu oni koji su već bili
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsContent.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-olive-50 rounded-3xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-olive-200">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-olive-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-olive-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-500"
        >
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-olive-700">4.9/5</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-300" />
          <div className="text-center">
            <span className="text-2xl font-bold text-olive-700">100+</span>
            <span className="text-sm ml-2">Zadovoljnih putnika</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-300" />
          <div className="text-center">
            <span className="text-2xl font-bold text-olive-700">5</span>
            <span className="text-sm ml-2">Godina iskustva</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
