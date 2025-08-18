"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, FileText, Code, TestTube, Rocket, HeadphonesIcon, CheckCircle, Clock, Users, Target, Zap, Shield, Star, ArrowRight } from 'lucide-react'
import Link from "next/link"

const processSteps = [
  {
    step: 1,
    title: "Discovery & Consultation",
    description: "We start by understanding your vision, requirements, and business goals through detailed consultation.",
    icon: <MessageSquare className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500",
    duration: "1-2 Days",
    deliverables: ["Project Requirements Document", "Technical Feasibility Report", "Cost Estimation", "Timeline Planning"],
    activities: [
      "Initial consultation call",
      "Requirements gathering",
      "Technical analysis",
      "Budget discussion",
      "Timeline planning"
    ]
  },
  {
    step: 2,
    title: "Planning & Design",
    description: "Our team creates detailed project plans, wireframes, and designs based on your requirements.",
    icon: <FileText className="h-8 w-8" />,
    color: "from-purple-500 to-pink-500",
    duration: "3-5 Days",
    deliverables: ["Project Plan", "UI/UX Designs", "Technical Architecture", "Database Design"],
    activities: [
      "Project planning",
      "UI/UX design creation",
      "Technical architecture",
      "Database design",
      "Client approval"
    ]
  },
  {
    step: 3,
    title: "Development",
    description: "We bring your project to life using cutting-edge technologies and best development practices.",
    icon: <Code className="h-8 w-8" />,
    color: "from-green-500 to-teal-500",
    duration: "1-4 Weeks",
    deliverables: ["Working Application", "Source Code", "Documentation", "Progress Reports"],
    activities: [
      "Frontend development",
      "Backend development",
      "Database implementation",
      "API integration",
      "Regular progress updates"
    ]
  },
  {
    step: 4,
    title: "Testing & Quality Assurance",
    description: "Rigorous testing ensures your project meets the highest quality standards before deployment.",
    icon: <TestTube className="h-8 w-8" />,
    color: "from-orange-500 to-red-500",
    duration: "2-3 Days",
    deliverables: ["Test Reports", "Bug Fixes", "Performance Optimization", "Security Audit"],
    activities: [
      "Functionality testing",
      "Performance testing",
      "Security testing",
      "Cross-browser testing",
      "Mobile responsiveness"
    ]
  },
  {
    step: 5,
    title: "Deployment & Launch",
    description: "We deploy your project to production and ensure everything runs smoothly for a successful launch.",
    icon: <Rocket className="h-8 w-8" />,
    color: "from-indigo-500 to-purple-500",
    duration: "1-2 Days",
    deliverables: ["Live Application", "Deployment Guide", "Admin Access", "Launch Support"],
    activities: [
      "Production deployment",
      "Domain & hosting setup",
      "SSL certificate installation",
      "Final testing",
      "Go-live support"
    ]
  },
  {
    step: 6,
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance to ensure your project continues to perform optimally.",
    icon: <HeadphonesIcon className="h-8 w-8" />,
    color: "from-teal-500 to-cyan-500",
    duration: "Ongoing",
    deliverables: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Backup Services"],
    activities: [
      "Technical support",
      "Regular maintenance",
      "Security updates",
      "Performance monitoring",
      "Feature enhancements"
    ]
  }
]

const processFeatures = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "On-Time Delivery",
    description: "We stick to deadlines and deliver projects on schedule"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Dedicated Team",
    description: "Experienced professionals working exclusively on your project"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Goal-Oriented",
    description: "Every step is aligned with your business objectives"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Agile Methodology",
    description: "Flexible approach that adapts to changing requirements"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Quality Assurance",
    description: "Rigorous testing ensures bug-free, high-quality deliverables"
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Client Satisfaction",
    description: "Your success is our priority, with 98% client satisfaction rate"
  }
]

export default function OurProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary rounded-full text-sm font-medium mb-6 animate-bounce-in">
            🚀 Our Proven Process
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            How We Transform Your Ideas Into Reality
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Our systematic 6-step process ensures your project is delivered on time, within budget, and exceeds your expectations
          </p>
        </div>

        {/* Process Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {processFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-sm mb-2">{feature.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {processSteps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeStep === index
                  ? "bg-primary text-white shadow-lg transform scale-105"
                  : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <span className="w-6 h-6 rounded-full bg-current/20 flex items-center justify-center text-xs font-bold">
                {step.step}
              </span>
              <span className="hidden sm:inline">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Details */}
        <div className="mb-12">
          <Card className="max-w-4xl mx-auto shadow-2xl border-2 border-primary/20 bg-white dark:bg-slate-800">
            <CardHeader className={`bg-gradient-to-r ${processSteps[activeStep].color} text-white p-6 rounded-t-lg`}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  {processSteps[activeStep].icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Step {processSteps[activeStep].step}
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {processSteps[activeStep].duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{processSteps[activeStep].title}</CardTitle>
                  <CardDescription className="text-white/90 text-lg">
                    {processSteps[activeStep].description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle size={20} className="text-green-500" />
                    Key Activities
                  </h4>
                  <ul className="space-y-2">
                    {processSteps[activeStep].activities.map((activity, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Star size={20} className="text-yellow-500" />
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {processSteps[activeStep].deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span className="text-sm">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Complete Process Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-primary rounded-full z-10 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{step.step}</span>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'ml-auto pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          <div className={`w-10 h-10 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white`}>
                            {step.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{step.title}</CardTitle>
                            <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss your requirements and begin the journey to transform your ideas into reality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#start-project">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Start Your Project
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link href="#book">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
