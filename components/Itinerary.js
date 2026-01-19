'use client'

import { itineraryContent } from '@/content/data'

export default function Itinerary() {
  let currentSection = null

  return (
    <section id="itinerar" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-olive-600 font-semibold tracking-wider text-sm mb-4">
            15 DANA NEZABORAVNOG ISKUSTVA
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-olive-800">
            Plan i program putovanja
          </h2>
        </div>

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
                    <div className="text-center py-12 lg:py-16">
                      <div className="inline-block px-8 py-4 bg-olive-600 text-white rounded-full shadow-xl">
                        <h3 className="text-lg font-bold tracking-wider">
                          {item.section}
                        </h3>
                      </div>
                    </div>
                  )}

                  {/* Timeline Item */}
                  <div className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Timeline Dot */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-olive-600 rounded-full border-4 border-white shadow-lg z-10" />

                    {/* Content */}
                    <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                      <div className="bg-olive-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
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
                      </div>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                      <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 lg:h-80 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
