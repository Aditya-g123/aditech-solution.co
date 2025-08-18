"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, MessageCircle, Sparkles, Zap, Star, Rocket, ExternalLink, Menu, X, Users, Briefcase, Heart, Target, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TestimonialCard from "@/components/testimonial-card"
import TeamMember from "@/components/team-member"
import CounterSection from "@/components/counter-section"
import BookingForm from "@/components/booking-form"
import Logo from "@/components/logo"
import ClientSection from "@/components/client-section"
import OtherServicesSection from "@/components/other-services-section"
import TechnologyShowcase from "@/components/technology-showcase"
import ExpandedServicesSection from "@/components/expanded-services-section"
import ServiceSelection from "@/components/service-selection"
import WhatsAppSupport from "@/components/whatsapp-support"
import ProjectInquiryForm from "@/components/project-inquiry-form"
import OurProcessSection from "@/components/our-process-section"
import { useState, useEffect } from "react"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    // Add scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, observerOptions)

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal')
    scrollElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`flex flex-col min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced Colorful Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 backdrop-blur-md shadow-lg animate-fade-in-down">
        <div className="container flex h-20 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300 animate-fade-in-left">
            <Logo variant="white" size="md" showTagline={false} />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 xl:gap-8 items-center animate-fade-in-up delay-200">
            <Link
              href="#services"
              className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/10 hover-glow"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link
              href="#other-services"
              className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/10 hover-glow"
            >
              Other Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#book"
              className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/10 hover-glow"
            >
              Book Now
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#about"
              className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/10 hover-glow"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4 animate-fade-in-right delay-300">
            <Link href="#get-started" className="hidden sm:block">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base px-3 sm:px-4 py-2 btn-animate hover-glow">
                Get Started
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors hover-scale"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t animate-slide-up">
            <nav className="container px-4 sm:px-6 py-4 space-y-2">
              <Link
                href="#services"
                className="block px-4 py-3 text-gray-800 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors text-base hover-lift"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#get-started"
                className="block px-4 py-3 text-gray-800 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors text-base hover-lift"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
              <Link
                href="#other-services"
                className="block px-4 py-3 text-gray-800 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors text-base hover-lift"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Other Services
              </Link>
              <Link
                href="#book"
                className="block px-4 py-3 text-gray-800 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors text-base hover-lift"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
              <Link
                href="#about"
                className="block px-4 py-3 text-gray-800 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors text-base hover-lift"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Enhanced Hero Section with Emotional Pricing-focused Slogan */}
        <section className="py-16 sm:py-20 md:py-32 relative overflow-hidden min-h-screen flex items-center scroll-reveal">
          {/* Dynamic Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oKsIiigfZW2S7yyvmQOD2aDwbI8j7t.png"
              alt="Aaditech Solutions - Professional working environment"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-indigo-900/90"></div>
          </div>

          {/* Enhanced Animated Elements */}
          <div className="absolute inset-0 overflow-hidden z-10">
            {/* Floating particles with different sizes and speeds */}
            <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
            <div className="absolute top-40 right-32 w-6 h-6 bg-primary/30 rounded-full animate-float-delayed"></div>
            <div className="absolute bottom-32 left-16 w-3 h-3 bg-blue-400/40 rounded-full animate-float"></div>
            <div className="absolute bottom-20 right-20 w-5 h-5 bg-purple-400/30 rounded-full animate-float-delayed"></div>
            <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-yellow-400/40 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-pink-400/30 rounded-full animate-bounce"></div>

            {/* Enhanced gradient orbs */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-400 opacity-10 rounded-full blur-3xl animate-spin-slow"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-20">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6 animate-fade-in-up">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/10 text-primary rounded-full text-sm font-medium animate-bounce-in hover-glow">
                    <Heart size={16} className="animate-pulse text-red-500" />
                    <span className="hidden sm:inline text-shimmer">💰 Premium Quality, Affordable Prices</span>
                    <span className="sm:hidden">Quality + Affordability</span>
                    <TrendingUp size={16} className="animate-bounce text-green-500" />
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white leading-tight">
                    Your Dream Project{" "}
                    <span className="relative">
                      <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
                        Shouldn't Break
                      </span>
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-teal-400/20 blur-lg -z-10 animate-pulse-slow"></div>
                    </span>{" "}
                    <span className="relative">
                      <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient-x">
                        Your Budget
                      </span>
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-red-400/20 blur-lg -z-10 animate-pulse-slow"></div>
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed animate-fade-in-up delay-200">
                    💝 <strong>Starting from just ₹5,000</strong> - We believe every business deserves world-class technology solutions. 
                    Transform your ideas into reality without the premium price tag. Quality work, honest pricing, guaranteed results.
                  </p>
                  
                  {/* Emotional pricing highlights */}
                  <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
                    <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full">
                      <Target size={16} className="text-green-400" />
                      <span className="text-green-200 text-sm font-medium">No Hidden Costs</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full">
                      <Heart size={16} className="text-red-400" />
                      <span className="text-blue-200 text-sm font-medium">Pay What's Fair</span>
                    </div>
                    <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full">
                      <Sparkles size={16} className="text-yellow-400" />
                      <span className="text-purple-200 text-sm font-medium">Premium Quality</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                  <Link href="#get-started">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group btn-animate hover-glow"
                    >
                      💰 See Our Affordable Prices
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="#start-project">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 bg-transparent shadow-xl hover:shadow-2xl transform hover:scale-105 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group hover-glow"
                    >
                      <Rocket size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                      Start Your Project
                    </Button>
                  </Link>
                </div>

                {/* Enhanced trust indicators */}
                <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-8 pt-4 animate-fade-in-up delay-400">
                  <div className="text-center group hover-scale">
                    <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-green-400 transition-colors animate-heartbeat">₹5K+</div>
                    <div className="text-xs sm:text-sm text-gray-300">Starting Price</div>
                  </div>
                  <div className="text-center group hover-scale">
                    <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors animate-heartbeat delay-200">500+</div>
                    <div className="text-xs sm:text-sm text-gray-300">Happy Clients</div>
                  </div>
                  <div className="text-center group hover-scale">
                    <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors animate-heartbeat delay-400">100%</div>
                    <div className="text-xs sm:text-sm text-gray-300">Satisfaction</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-yellow-400 fill-yellow-400 animate-pulse hover-scale"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center animate-fade-in-right">
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/00mHA8EXoIb_by0fwMxfN%20%281%29-aWTAfUZiaEHRwufnZvDdE0hjoKHLKM.png"
                    alt="Professional showcasing tech solutions"
                    className="rounded-2xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white/20 w-full max-w-md sm:max-w-lg hover-lift"
                  />
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-2xl blur-xl -z-10 animate-pulse-slow"></div>

                  {/* Enhanced floating elements around image */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full animate-bounce flex items-center justify-center shadow-lg hover-scale">
                    <span className="text-white font-bold text-xs sm:text-sm">₹5K</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse flex items-center justify-center shadow-lg hover-scale">
                    <CheckCircle size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="absolute top-1/2 -right-6 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-1/4 -left-6 w-5 h-5 sm:w-6 sm:h-6 bg-pink-400 rounded-full animate-bounce delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section id="get-started" className="scroll-reveal">
          <ServiceSelection />
        </section>

        {/* Our Process Section */}
        <section className="scroll-reveal">
          <OurProcessSection />
        </section>

        {/* Enhanced Services Section */}
        <section id="services" className="scroll-reveal">
          <ExpandedServicesSection />
        </section>

        {/* Client Section with Start Project Form */}
        <section id="start-project" className="scroll-reveal">
          <ClientSection />
        </section>

        {/* Technology Showcase Section */}
        <section className="scroll-reveal">
          <TechnologyShowcase />
        </section>

        {/* Enhanced Learning Section with Google Form */}
        <section
          id="learning"
          className="py-16 relative scroll-reveal"
          style={{
            backgroundImage: `url('/images/team-collaboration.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-teal-900/90 to-cyan-900/90"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white animate-fade-in-up">
                  Tech Learning Programs
                </h2>
                <p className="max-w-[900px] text-gray-200 text-base sm:text-lg md:text-xl animate-fade-in-up delay-200">
                  Enhance your skills with our comprehensive learning programs
                </p>
              </div>
            </div>

            {/* Quick Registration Link */}
            <div className="text-center mb-8 animate-fade-in-up delay-300">
              <div className="inline-block bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-white/20 hover-lift">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Quick Registration</h3>
                <p className="text-gray-200 mb-4 text-sm sm:text-base">
                  Register for our learning programs using our comprehensive enrollment form
                </p>
                <Link href="https://forms.gle/WrSenfQrKoUZ98sdA" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-green-600 hover:bg-gray-100 font-semibold btn-animate hover-glow">
                    <ExternalLink size={20} className="mr-2" />
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {/* Learning program cards */}
              {[
                {
                  title: "Web Development",
                  description: "Learn frontend and backend technologies",
                  skills: ["HTML, CSS, JavaScript", "React, Next.js, Vue", "Node.js, Express", "Database Management"]
                },
                {
                  title: "Data Science",
                  description: "Master data analysis and visualization",
                  skills: ["Python for Data Science", "Statistical Analysis", "Machine Learning", "Data Visualization"]
                },
                {
                  title: "Mobile Development",
                  description: "Build native and cross-platform apps",
                  skills: ["React Native", "Flutter", "iOS Development", "Android Development"]
                },
                {
                  title: "Graphic Design",
                  description: "Creative design and visual communication",
                  skills: ["Adobe Creative Suite", "Logo & Brand Design", "Digital Illustration", "Print & Web Design"]
                }
              ].map((course, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gradient-to-r from-green-200 to-teal-200 bg-gradient-to-br from-white to-green-50 card-hover animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                  <CardHeader>
                    <CardTitle className="text-green-700 text-lg sm:text-xl">{course.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{skill}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="https://forms.gle/WrSenfQrKoUZ98sdA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block"
                    >
                      <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base btn-animate hover-glow">
                        Enroll Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Counter Section */}
        <section className="scroll-reveal">
          <CounterSection />
        </section>

        {/* Other Services Section */}
        <section id="other-services" className="scroll-reveal">
          <OtherServicesSection />
        </section>

        {/* Book Now Section */}
        <section
          id="book"
          className="py-16 relative scroll-reveal"
          style={{
            backgroundImage: `url('/images/tech-development.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-indigo-900/90"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="flex flex-col justify-center space-y-4 animate-fade-in-left">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
                    Book a Consultation
                  </h2>
                  <p className="max-w-[600px] text-gray-200 text-base sm:text-lg md:text-xl">
                    Schedule a free consultation with our experts to discuss your project or learning needs.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    "Personalized solutions tailored to your needs",
                    "Expert advice from industry professionals",
                    "Transparent pricing with no hidden costs",
                    "Flexible scheduling to fit your timeline"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 animate-fade-in-left" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                      <CheckCircle size={20} className="text-green-400 flex-shrink-0 animate-pulse" />
                      <span className="text-gray-200 text-sm sm:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center animate-fade-in-right">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-white/20 w-full max-w-md hover-lift">
                  <BookingForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white dark:bg-slate-900 scroll-reveal">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter animate-fade-in-up">What Our Clients Say</h2>
                <p className="max-w-[900px] text-gray-500 text-base sm:text-lg md:text-xl dark:text-gray-400 animate-fade-in-up delay-200">
                  Hear from our satisfied customers and students
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  name: "Rahul Sharma",
                  role: "CEO, TechStart",
                  content: "Aaditech Solution transformed our business with their web development expertise. The team was professional, responsive, and delivered beyond our expectations.",
                  rating: 5,
                  type: "Client" as const
                },
                {
                  name: "Priya Patel",
                  role: "Marketing Director, GrowthHub",
                  content: "The data analysis services provided by Aaditech helped us uncover valuable insights that significantly improved our marketing strategy. Highly recommended!",
                  rating: 5,
                  type: "Client" as const
                },
                {
                  name: "Amit Kumar",
                  role: "Student",
                  content: "The web development course at Aaditech was comprehensive and practical. I landed a job within a month of completing the program. Best investment in my career!",
                  rating: 5,
                  type: "Student" as const
                },
                {
                  name: "Neha Singh",
                  role: "Student",
                  content: "I took the Data Science course and was impressed by the quality of instruction. The hands-on projects prepared me well for real-world challenges.",
                  rating: 4,
                  type: "Student" as const
                },
                {
                  name: "Vikram Malhotra",
                  role: "CTO, InnovateX",
                  content: "We partnered with Aaditech for our mobile app development, and they delivered a polished product that our users love. Their attention to detail is exceptional.",
                  rating: 5,
                  type: "Client" as const
                },
                {
                  name: "Sanjay Gupta",
                  role: "Student",
                  content: "The UI/UX design course was eye-opening. The instructors are industry experts who shared valuable insights that you won't find in textbooks.",
                  rating: 5,
                  type: "Student" as const
                }
              ].map((testimonial, index) => (
                <div key={index} className="animate-fade-in-up card-hover" style={{ animationDelay: `${index * 150}ms` }}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800 scroll-reveal">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter animate-fade-in-up">Meet Our Team</h2>
                <p className="max-w-[900px] text-gray-500 text-base sm:text-lg md:text-xl dark:text-gray-400 animate-fade-in-up delay-200">
                  The experts behind our success
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                {
                  name: "Aditya",
                  role: "CEO & Founder",
                  image: "/images/ceo-office.png",
                  bio: "Visionary leader with over 10 years of experience in the tech industry."
                },
                {
                  name: "Ravi Sharma",
                  role: "CTO",
                  image: "/images/business-team.png",
                  bio: "Tech expert specializing in software architecture and emerging technologies."
                },
                {
                  name: "Ananya Desai",
                  role: "Lead Designer",
                  image: "/images/team-member-green.png",
                  bio: "Creative professional with a passion for user-centered design."
                },
                {
                  name: "Vikram Singh",
                  role: "Head of Education",
                  image: "/images/team-presentation.png",
                  bio: "Experienced educator dedicated to developing comprehensive learning programs."
                }
              ].map((member, index) => (
                <div key={index} className="animate-fade-in-up hover-lift" style={{ animationDelay: `${index * 200}ms` }}>
                  <TeamMember {...member} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 bg-white dark:bg-slate-900 scroll-reveal">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 animate-fade-in-left">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                    About Aaditech Solution
                  </h2>
                  <p className="max-w-[600px] text-gray-500 text-base sm:text-lg md:text-xl dark:text-gray-400">
                    Founded by Aditya, Aaditech Solution is a leading technology company dedicated to providing
                    innovative solutions and quality education.
                  </p>
                </div>
                <div className="space-y-4 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                  <p>
                    At Aaditech Solution, we believe in the power of technology to transform businesses and lives. Our
                    mission is to deliver cutting-edge solutions that drive growth and success for our clients.
                  </p>
                  <p>
                    With a team of experienced professionals and a passion for excellence, we have successfully
                    delivered over 500 projects across various industries. Our commitment to quality and customer
                    satisfaction has made us a trusted partner for businesses of all sizes.
                  </p>
                  <p>
                    Our education division is dedicated to nurturing the next generation of tech talent through
                    comprehensive learning programs designed by industry experts.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <Link href="#services">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto hover:bg-primary hover:text-white transition-colors bg-transparent text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 btn-animate hover-glow"
                    >
                      Our Services
                    </Button>
                  </Link>
                  <Link href="#book">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto hover:bg-primary hover:text-white transition-colors bg-transparent text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 btn-animate hover-glow"
                    >
                      Book Consultation
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center animate-fade-in-right">
                <img
                  src="/images/business-team.png"
                  alt="About Aaditech Solution"
                  className="rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-md sm:max-w-lg hover-lift"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer with Work With Us Section */}
      <footer id="contact" className="bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white py-16 scroll-reveal">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="space-y-4 lg:col-span-2 animate-fade-in-up">
              <Logo variant="white" size="md" showTagline={true} />
              <p className="text-gray-300 max-w-sm text-sm sm:text-base">
                Transforming businesses through innovative technology solutions and comprehensive learning programs.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: "facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                  { icon: "twitter", path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
                  { icon: "instagram", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" },
                  { icon: "linkedin", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" }
                ].map((social, index) => (
                  <Link key={social.icon} href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 hover-glow animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={social.path} />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {[
              {
                title: "Development Services",
                color: "from-purple-400 to-pink-400",
                links: ["Web Development", "Mobile App Development", "Full-Stack Development", "Progressive Web Apps", "E-commerce Platforms", "API Development"]
              },
              {
                title: "AI & Data Services",
                color: "from-blue-400 to-cyan-400",
                links: ["AI & Machine Learning", "Data Analytics & BI", "Chatbot Solutions", "Predictive Analytics", "Data Visualization", "Business Intelligence"]
              },
              {
                title: "Work With Us",
                color: "from-green-400 to-teal-400",
                links: [
                  { text: "Join Our Team", isWhatsApp: true, message: "Hi! I'm interested in joining the Aaditech Solutions team. Can you tell me about current opportunities?" },
                  { text: "Partnership Opportunities", isWhatsApp: true, message: "Hello! I'd like to explore partnership opportunities with Aaditech Solutions." },
                  { text: "Freelance Projects", isWhatsApp: true, message: "Hi! I'm a freelancer interested in working on projects with Aaditech Solutions." },
                  { text: "Internship Program", isWhatsApp: true, message: "Hello! I'm interested in internship opportunities at Aaditech Solutions." },
                  { text: "Become a Mentor", isWhatsApp: true, message: "Hi! I'd like to become a mentor for your learning programs." },
                  { text: "Collaboration Inquiry", isWhatsApp: true, message: "Hello! I'm interested in collaborating with Aaditech Solutions on projects." }
                ]
              }
            ].map((section, index) => (
              <div key={section.title} className="space-y-4 animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                <h3 className={`text-lg sm:text-xl font-bold text-transparent bg-gradient-to-r ${section.color} bg-clip-text`}>
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, linkIndex) => {
                    if (typeof link === 'object' && link.isWhatsApp) {
                      return (
                        <li key={linkIndex}>
                          <Link 
                            href={`https://wa.me/9120984300?text=${encodeURIComponent(link.message)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors hover-glow flex items-center gap-2 group"
                          >
                            <MessageCircle size={14} className="text-green-400 group-hover:animate-bounce" />
                            {link.text}
                          </Link>
                        </li>
                      )
                    }
                    return (
                      <li key={linkIndex}>
                        <Link href="#services" className="text-gray-300 hover:text-white transition-colors hover-glow">
                          {typeof link === 'string' ? link : link.text}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}

            <div className="space-y-4 animate-fade-in-up delay-800">
              <h3 className="text-lg sm:text-xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                Contact & Support
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  { icon: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", text: "Noida, India" },
                  { icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z", text: "+91 9120984300" },
                  { icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 6L2 6", text: "info@aaditech.com" }
                ].map((contact, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={contact.icon} />
                    </svg>
                    <span className="text-gray-300">{contact.text}</span>
                  </li>
                ))}
                <li>
                  <Link
                    href={`https://wa.me/9120984300`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors bg-green-500/10 hover:bg-green-500/20 px-3 py-2 rounded-lg hover-glow"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Support</span>
                  </Link>
                </li>
              </ul>

              {/* QR Code Section */}
              <div className="mt-6 p-4 bg-white rounded-lg shadow-lg hover-lift">
                <p className="text-sm text-gray-800 mb-2 font-medium">Scan for Quick Contact</p>
                <img src="/images/qr-code.png" alt="QR Code for Contact" className="w-20 h-20 sm:w-24 sm:h-24 mx-auto" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 animate-fade-in-up delay-1000">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              {[
                {
                  title: "Learning Programs",
                  content: "Web Development • Data Science • Mobile Development • Cloud Computing • UI/UX Design • Digital Marketing • Graphic Design • Content Writing"
                },
                {
                  title: "Automation Services",
                  content: "WhatsApp Automation • Bulk SMS Services • API Development • Chatbot Solutions • Business Process Automation"
                },
                {
                  title: "Business Hours",
                  content: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM\n24/7 WhatsApp Support"
                }
              ].map((info, index) => (
                <div key={info.title}>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">{info.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-400 whitespace-pre-line">
                    {info.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 animate-fade-in-up delay-1200">
            <p className="text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Aaditech Solution. All rights reserved. | Transforming Ideas into
              Digital Reality
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Support */}
      <WhatsAppSupport />
    </div>
  )
}
