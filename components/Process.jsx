'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Lightbulb, Code2, Rocket, Repeat } from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We dive deep into your business, understand your pain points, and identify AI opportunities.',
    icon: MessageSquare,
    color: 'electric',
  },
  {
    number: '02',
    title: 'Solution Design',
    description: 'Our team architects a custom AI solution tailored to your specific needs and goals.',
    icon: Lightbulb,
    color: 'cyber',
  },
  {
    number: '03',
    title: 'Rapid Development',
    description: 'Using AI-accelerated workflows, we build and iterate faster than traditional agencies.',
    icon: Code2,
    color: 'acid',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'We deploy to production and ensure your solution scales seamlessly with your growth.',
    icon: Rocket,
    color: 'neon-pink',
  },
  {
    number: '05',
    title: 'Continuous Improvement',
    description: 'Post-launch optimization, monitoring, and AI model fine-tuning for peak performance.',
    icon: Repeat,
    color: 'electric',
  },
]

const colorMap = {
  electric: {
    bg: 'bg-electric/20',
    border: 'border-electric/30',
    text: 'text-electric',
    glow: 'shadow-electric/20',
    gradient: 'from-electric to-cyber',
  },
  cyber: {
    bg: 'bg-cyber/20',
    border: 'border-cyber/30',
    text: 'text-cyber',
    glow: 'shadow-cyber/20',
    gradient: 'from-cyber to-neon-pink',
  },
  acid: {
    bg: 'bg-acid/20',
    border: 'border-acid/30',
    text: 'text-acid',
    glow: 'shadow-acid/20',
    gradient: 'from-acid to-electric',
  },
  'neon-pink': {
    bg: 'bg-neon-pink/20',
    border: 'border-neon-pink/30',
    text: 'text-neon-pink',
    glow: 'shadow-neon-pink/20',
    gradient: 'from-neon-pink to-cyber',
  },
}

export default function Process() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="process" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-midnight to-void" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-electric mb-6">
            Our Process
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A streamlined process designed for speed without sacrificing quality.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric via-cyber to-acid opacity-30" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const colors = colorMap[step.color]
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={cn(
                    'relative lg:grid lg:grid-cols-2 lg:gap-8 items-center',
                    !isEven && 'lg:text-right'
                  )}
                >
                  {/* Content */}
                  <div className={cn(
                    'relative z-10',
                    isEven ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-2'
                  )}>
                    <div className={cn(
                      'p-8 rounded-2xl glass border transition-all duration-500 hover:scale-[1.02]',
                      colors.border
                    )}>
                      {/* Number badge */}
                      <div className={cn(
                        'inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 font-heading font-bold text-lg',
                        colors.bg,
                        colors.text
                      )}>
                        {step.number}
                      </div>

                      <h3 className="font-heading font-bold text-2xl text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon - centered on timeline */}
                  <div className={cn(
                    'hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20',
                    'w-16 h-16 rounded-2xl items-center justify-center',
                    `bg-gradient-to-br ${colors.gradient}`,
                    'shadow-lg',
                    colors.glow
                  )}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Empty column for layout */}
                  <div className={cn(
                    'hidden lg:block',
                    !isEven && 'lg:col-start-1 lg:row-start-1'
                  )} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
