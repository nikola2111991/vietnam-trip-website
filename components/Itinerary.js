'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { itineraryContent } from '@/content/data'

function ParallaxImage({ src, alt, position }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <div ref={ref} className="rounded-3xl overflow-hidden shadow-2xl">
      <motion.div style={{ y }} className="relative">
        <img
          src={src}
          alt={alt}
          className="w-full h-64 lg:h-80 object-cover scale-110"
          style={{ objectPosition: position || 'center' }}
          loading="lazy"
        />
      </motion.div>
    </div>
  )
}

export default function Itinerary() {
  let currentSection = null
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="itinerar" ref={sectionRef} className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-olive-600 font-semibold tracking-wider text-sm mb-4">
            15 DANA NEZABORAVNOG ISKUSTVA
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-olive-800">
            Plan i program putovanja
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-olive-200 via-olive-400 to-olive-200" />

          <div className="space-y-12 lg:space-y-0">
            {itineraryContent.map((item, index) => {
              const showSectionHeader = item.section && item.section !== currentSection
              if (item.section) currentSection = item.section

              return (
                <div key={index}>
                  {/* Section Header */}
                  {showSectionHeader && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-12 lg:py-16 relative z-[99]"
                    >
                      <div className="inline-block px-8 py-4 bg-olive-600 text-white rounded-full shadow-xl">
                        <h3 className="text-lg font-bold tracking-wider">
                          {item.section}
                        </h3>
                      </div>
                    </motion.div>
                  )}

                  {/* Timeline Item */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-olive-600 rounded-full border-4 border-white shadow-lg z-10"
                    />

                    {/* Content */}
                    <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="bg-olive-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500"
                      >
                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                          <span className="px-4 py-1.5 bg-olive-600 text-white text-sm font-bold rounded-full">
                            {item.day}
                          </span>
                          <span className="text-olive-600 font-medium">
                            {item.location}
                          </span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-serif font-bold text-olive-800 mb-4">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Image with Parallax */}
                    <div className="w-full lg:w-1/2">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ParallaxImage
                          src={item.image}
                          alt={item.title}
                          position={item.imagePosition}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
