'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Mail, Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'AI SaaS Development', href: '#services' },
    { name: 'AI Agents', href: '#services' },
    { name: 'RAG Pipelines', href: '#services' },
    { name: 'Video Solutions', href: '#services' },
    { name: 'n8n Workflows', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Process', href: '#process' },
    { name: 'Case Studies', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'AI Guides', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Status', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

function Marquee() {
  const text = "LET'S BUILD THE FUTURE • "
  const repeatedText = text.repeat(8)

  return (
    <div className="relative overflow-hidden py-8 border-y border-white/5">
      <motion.div
        animate={{ x: [0, '-50%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex whitespace-nowrap"
      >
        <span className="font-heading font-bold text-6xl md:text-8xl text-white/5 select-none">
          {repeatedText}
        </span>
        <span className="font-heading font-bold text-6xl md:text-8xl text-white/5 select-none">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  )
}

export default function Footer() {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: '-100px' })

  return (
    <footer id="contact" ref={footerRef} className="relative bg-obsidian">
      {/* Marquee */}
      <Marquee />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric to-cyber flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Neural<span className="text-gradient">Labs</span>
              </span>
            </div>

            <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to build something{' '}
              <span className="text-gradient">extraordinary</span>?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Let's discuss how AI can transform your business. Book a free discovery call with our team.
            </p>

            {/* CTA Button */}
            <motion.a
              href="mailto:hello@neurallabs.ai"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-semibold text-white bg-gradient-to-r from-electric to-cyber hover:shadow-lg hover:shadow-cyber/25 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>hello@neurallabs.ai</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right side - Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-8"
          >
            {/* Services */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NeuralLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
