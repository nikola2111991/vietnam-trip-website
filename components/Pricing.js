'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { pricingContent, notForYouContent } from '@/content/data'

export default function Pricing() {
  const sectionRef = useRef(null)
  const notForYouRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const isNotForYouInView = useInView(notForYouRef, { once: true, margin: '-100px' })

  return (
    <section id="cene" className="relative">
      {/* Pricing Section */}
      <div ref={sectionRef} className="bg-olive-800 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gold-400 font-semibold tracking-wider text-sm mb-4">
              INVESTICIJA U NEZABORAVNO ISKUSTVO
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Cene i uslovi puta
            </h2>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-2"
            >
              <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-white">
                {pricingContent.price}
              </span>
              <span className="text-2xl text-gold-400 font-medium">EUR</span>
            </motion.div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Included */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-olive-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-olive-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-olive-800">Šta je uključeno</h3>
              </div>
              <ul className="space-y-4">
                {pricingContent.included.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <svg className="w-5 h-5 text-olive-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Not Included */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-olive-700 rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-olive-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Nije uključeno</h3>
              </div>
              <ul className="space-y-4">
                {pricingContent.notIncluded.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <svg className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-olive-100">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Flight Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="bg-olive-700/50 backdrop-blur rounded-2xl p-8">
              <h4 className="text-lg font-bold text-white mb-6 text-center">
                Opcije avio karata (okvirne cene)
              </h4>
              <div className="grid sm:grid-cols-3 gap-4">
                {pricingContent.flightOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 rounded-xl p-4 text-center"
                  >
                    <p className="text-olive-100 text-sm mb-2">{option.route}</p>
                    <p className="text-gold-400 font-bold">{option.price}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Not For You Section */}
      <div ref={notForYouRef} className="bg-olive-50 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isNotForYouInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/za-koga-nije.webp"
                alt="Za koga nije ova avantura"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isNotForYouInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-olive-600 font-semibold tracking-wider text-sm mb-4">
                BUDITE ISKRENI SA SOBOM
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-olive-800 mb-8">
                {notForYouContent.title}
              </h2>
              <div className="space-y-6">
                {notForYouContent.reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isNotForYouInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 bg-olive-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-olive-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{reason.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
