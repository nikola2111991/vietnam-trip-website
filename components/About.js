'use client'

import { introContent, featuresContent, galleryImages } from '@/content/data'

const FeatureIcon = ({ icon }) => {
  const icons = {
    users: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    hotel: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    food: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    hiking: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    compass: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    experience: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  }
  return icons[icon] || null
}

export default function About() {
  return (
    <section id="o-putovanju" className="relative">
      {/* Intro Section */}
      <div className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <p className="text-olive-600 font-semibold tracking-wider text-sm mb-4">
                {introContent.subtitle}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-olive-800 leading-tight mb-8">
                {introContent.title}
              </h2>

              <div className="flex items-center space-x-6 mb-8 text-olive-600">
                <span className="font-medium">{introContent.duration}</span>
                <span className="w-2 h-2 bg-gold-400 rounded-full" />
                <span className="font-medium">{introContent.dates}</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-olive-700 mb-3">
                    {introContent.welcomeTitle}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {introContent.welcomeText}
                  </p>
                </div>

                <blockquote className="border-l-4 border-gold-400 pl-6 py-2">
                  <p className="text-gray-600 italic leading-relaxed">
                    {introContent.quote}
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={galleryImages[0]}
                    alt="Vietnam"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={galleryImages[1]}
                    alt="Vietnam"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={galleryImages[2]}
                    alt="Vietnam"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={galleryImages[3]}
                    alt="Vietnam"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-olive-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-olive-600 font-semibold tracking-wider text-sm mb-4">
              {featuresContent.sectionSubtitle}
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-olive-800">
              {featuresContent.sectionTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresContent.features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-olive-100 rounded-2xl flex items-center justify-center text-olive-600 mb-6 group-hover:bg-olive-600 group-hover:text-white transition-all duration-300">
                  <FeatureIcon icon={feature.icon} />
                </div>
                <h3 className="text-lg font-bold text-olive-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
