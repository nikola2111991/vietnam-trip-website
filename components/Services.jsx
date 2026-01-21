'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Layers,
  Bot,
  Database,
  Video,
  Workflow,
  ArrowUpRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    id: 1,
    title: 'AI Full-Stack SaaS',
    description: 'Next-generation applications with AI at the core. From ideation to production.',
    icon: Layers,
    tech: ['Next.js', 'TypeScript', 'OpenAI', 'Vercel'],
    gradient: 'from-electric to-cyber',
    size: 'large',
  },
  {
    id: 2,
    title: 'AI Agents',
    description: 'Autonomous worker bots that handle complex tasks 24/7.',
    icon: Bot,
    tech: ['Python', 'LangChain', 'AutoGPT', 'CrewAI'],
    gradient: 'from-cyber to-neon-pink',
    size: 'medium',
  },
  {
    id: 3,
    title: 'RAG Pipelines',
    description: 'Retrieval-Augmented Generation for intelligent document processing.',
    icon: Database,
    tech: ['Pinecone', 'LlamaIndex', 'Embeddings', 'Vector DB'],
    gradient: 'from-acid to-electric',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Custom Video Solutions',
    description: 'AI-powered video generation and editing tools for content at scale.',
    icon: Video,
    tech: ['RunwayML', 'Stable Diffusion', 'FFmpeg', 'ComfyUI'],
    gradient: 'from-neon-pink to-cyber',
    size: 'medium',
  },
  {
    id: 5,
    title: 'n8n Workflows',
    description: 'Advanced automation pipelines connecting your entire tech stack.',
    icon: Workflow,
    tech: ['n8n', 'Zapier', 'Make', 'Custom APIs'],
    gradient: 'from-electric to-acid',
    size: 'medium',
  },
]

function ServiceCard({ service, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 20
    const y = (e.clientY - rect.top - rect.height / 2) / 20
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  const Icon = service.icon

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      }}
      className={cn(
        'group relative rounded-2xl overflow-hidden transition-all duration-300',
        service.size === 'large' ? 'md:col-span-2 md:row-span-2' : '',
        isHovered ? 'z-10' : 'z-0'
      )}
    >
      {/* Gradient border */}
      <div className={cn(
        'absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity duration-500',
        service.gradient
      )}>
        <div className="absolute inset-[1px] rounded-2xl bg-obsidian" />
      </div>

      {/* Content */}
      <div className="relative h-full p-6 md:p-8 flex flex-col">
        {/* Icon */}
        <div className={cn(
          'w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500',
          service.gradient
        )}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3 group-hover:text-gradient transition-all duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
          {service.description}
        </p>

        {/* Tech stack - revealed on hover */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {service.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono text-gray-300 bg-white/5 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="flex items-center gap-2 text-gray-500 group-hover:text-white transition-colors duration-300">
          <span className="text-sm font-medium">Learn more</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>

        {/* Glow effect on hover */}
        <div className={cn(
          'absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 bg-gradient-to-br',
          service.gradient
        )} />
      </div>
    </motion.div>
  )
}

export default function Services() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-obsidian to-void" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-cyber mb-6">
            Our Services
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end AI solutions tailored to your business needs. From concept to deployment.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
