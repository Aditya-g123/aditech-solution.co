"use client"

import { useState, useCallback } from "react"
import EnhancedProjectInquiryForm from "./enhanced-project-inquiry-form"
import { Button } from "@/components/ui/button"
import { Rocket, ArrowRight } from 'lucide-react'

const trustedCompanies = [
  { name: "User Testing", logo: "/images/user-testing-logo.png", color: "from-blue-500 to-cyan-500" },
  { name: "Uber Eats", logo: "/images/uber-eats-logo.png", color: "from-green-500 to-emerald-500" },
  { name: "Amazon", logo: "/images/amazon-logo.png", color: "from-orange-500 to-yellow-500" },
  { name: "Copy.ai", logo: "/images/copy-ai-logo.png", color: "from-purple-500 to-pink-500" },
  { name: "SolarWinds", logo: "/images/solarwinds-logo.png", color: "from-red-500 to-rose-500" },
  { name: "Rubrik", logo: "/images/rubrik-logo.png", color: "from-indigo-500 to-blue-500" },
  { name: "Adobe", logo: "/images/adobe-logo.png", color: "from-red-600 to-pink-600" },
  { name: "Calendly", logo: "/images/calendly-logo.png", color: "from-blue-600 to-indigo-600" },
  {
    name: "FedEx",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngwing.com%20%2810%29-jtQ4sTEthY4AkMGgU6LuOIi3SUNQ1A.png",
    color: "from-purple-600 to-blue-600"
  },
  {
    name: "Swiggy",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngwing.com%20%289%29-dLpp0bmjKhrOG7vqD3w5QT7WFG26kp.png",
    color: "from-orange-600 to-red-600"
  },
  {
    name: "AppsFlyer",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngwing.com%20%2812%29-KL0jgQDAJeKO5YafeldigY7tAXoMTH.png",
    color: "from-teal-500 to-cyan-500"
  },
  {
    name: "Strapi",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngwing.com%20%2811%29-Ge0PsHkanqymUglnyhGeME4NEOOhp9.png",
    color: "from-violet-500 to-purple-500"
  },
  { name: "Microsoft", logo: "/placeholder.svg?height=80&width=120&text=Microsoft&color=0078d4", color: "from-blue-500 to-sky-500" },
  { name: "Google", logo: "/placeholder.svg?height=80&width=120&text=Google&color=4285f4", color: "from-red-500 to-yellow-500" },
  { name: "Meta", logo: "/placeholder.svg?height=80&width=120&text=Meta&color=1877f2", color: "from-blue-600 to-purple-600" },
  { name: "Netflix", logo: "/placeholder.svg?height=80&width=120&text=Netflix&color=e50914", color: "from-red-600 to-pink-600" },
]

export default function ClientSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 overflow-hidden relative">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-400 opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-pink-400 to-orange-400 opacity-10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-green-400 to-teal-400 opacity-10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-gradient-to-r from-yellow-400 to-red-400 opacity-10 rounded-full blur-xl animate-bounce-slow"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary rounded-full text-sm font-medium mb-6 animate-bounce-in">
            🏆 Industry Leaders Trust Us
          </div>
          <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-up">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-xl leading-relaxed animate-fade-in-up delay-200">
            We're proud to partner with innovative companies across various industries, delivering exceptional results
            and driving digital transformation worldwide
          </p>
        </div>

        {/* Enhanced multi-tier logo showcase with colorful backgrounds */}
        <div className="space-y-12">
          {/* First tier - Premium partners */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right-slow">
              {[...trustedCompanies.slice(0, 8), ...trustedCompanies.slice(0, 8)].map((company, index) => (
                <div
                  key={`tier1-${index}`}
                  className="flex-shrink-0 mx-8 group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative">
                    <div className={`flex items-center justify-center w-48 h-28 bg-gradient-to-r ${company.color} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 border border-white/20 group-hover:border-white/40 overflow-hidden p-1`}>
                      {/* Inner white container for logo */}
                      <div className="w-full h-full bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                        {/* Animated background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${company.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                        <img
                          src={company.logo || "/placeholder.svg"}
                          alt={company.name}
                          className="max-w-[140px] max-h-[70px] object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0 relative z-10 transform group-hover:scale-110"
                        />

                        {/* Hover effect overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${company.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      </div>

                      {/* Animated border glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${company.color} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 -z-10`}></div>
                    </div>

                    {/* Enhanced company name tooltip */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-20 shadow-lg">
                      <div className="font-semibold">{company.name}</div>
                      <div className="text-xs opacity-75">Trusted Partner</div>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second tier - Strategic partners */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left-slow">
              {[...trustedCompanies.slice(8), ...trustedCompanies.slice(8)].map((company, index) => (
                <div
                  key={`tier2-${index}`}
                  className="flex-shrink-0 mx-8 group"
                  onMouseEnter={() => handleMouseEnter(index + 8)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative">
                    <div className={`flex items-center justify-center w-48 h-28 bg-gradient-to-r ${company.color} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 border border-white/20 group-hover:border-white/40 overflow-hidden p-1`}>
                      {/* Inner white container for logo */}
                      <div className="w-full h-full bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                        {/* Animated background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-l ${company.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                        <img
                          src={company.logo || "/placeholder.svg"}
                          alt={company.name}
                          className="max-w-[140px] max-h-[70px] object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0 relative z-10 transform group-hover:scale-110"
                        />

                        {/* Hover effect overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${company.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      </div>

                      {/* Animated border glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${company.color} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 -z-10`}></div>
                    </div>

                    {/* Enhanced company name tooltip */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-20 shadow-lg">
                      <div className="font-semibold">{company.name}</div>
                      <div className="text-xs opacity-75">Strategic Partner</div>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced stats section with colorful gradients */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up delay-300 group">
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Projects Delivered</div>
            </div>
          </div>
          <div className="animate-fade-in-up delay-400 group">
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                100+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Happy Clients</div>
            </div>
          </div>
          <div className="animate-fade-in-up delay-500 group">
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-teal-500/10 hover:from-green-500/20 hover:to-teal-500/20 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Awards Won</div>
            </div>
          </div>
          <div className="animate-fade-in-up delay-600 group">
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-red-500/10 hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                10+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Enhanced "Start Your Project Today" section with inquiry form */}
        <div className="mt-24 animate-fade-in-up delay-700">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-blue-500 to-purple-500 shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-white/25 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-white/15 rounded-full animate-bounce delay-500"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12 text-center text-white">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Rocket className="h-8 w-8 animate-bounce" />
                <h3 className="text-3xl md:text-4xl font-bold">Start Your Project Today</h3>
                <Rocket className="h-8 w-8 animate-bounce delay-200" />
              </div>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Ready to transform your ideas into reality? Let's discuss your project requirements and create something amazing together with Aaditech Solutions!
              </p>
              <Button
                onClick={() => setIsFormOpen(true)}
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg px-8 py-4 group"
              >
                <Rocket size={24} className="mr-2 group-hover:rotate-12 transition-transform" />
                Tell Us About Your Project
                <ArrowRight size={24} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Project Inquiry Form Modal */}
      <EnhancedProjectInquiryForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </section>
  )
}
