"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Cloud, Smartphone, Brain, Palette, Shield, Zap, MessageSquare, Send, PenTool, FileText, Blocks, Cpu, Globe, BarChart, ShoppingCart, Megaphone } from 'lucide-react'
import Link from "next/link"

const serviceCategories = [
  {
    title: "Development Services",
    description: "Custom software solutions built with cutting-edge technologies",
    color: "from-blue-500 to-cyan-500",
    services: [
      {
        title: "Web Development",
        description: "Full-stack web applications using React, Next.js, and modern frameworks",
        icon: <Code2 className="h-6 w-6" />,
        price: "Starting from ₹25,000",
        features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"],
      },
      {
        title: "Mobile App Development", 
        description: "Native and cross-platform mobile applications for iOS and Android",
        icon: <Smartphone className="h-6 w-6" />,
        price: "Starting from ₹50,000",
        features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
      },
      {
        title: "E-commerce Platform",
        description: "Complete online store solutions with payment integration",
        icon: <ShoppingCart className="h-6 w-6" />,
        price: "Starting from ₹40,000",
        features: ["Payment Gateway", "Inventory Management", "Admin Dashboard", "Multi-vendor"],
      },
    ],
  },
  {
    title: "AI & Data Solutions",
    description: "Intelligent systems powered by artificial intelligence and data analytics",
    color: "from-purple-500 to-pink-500",
    services: [
      {
        title: "AI & Machine Learning",
        description: "Custom AI solutions, predictive analytics, and intelligent automation",
        icon: <Brain className="h-6 w-6" />,
        price: "Starting from ₹75,000",
        features: ["Custom AI Models", "Predictive Analytics", "Automation", "Data Processing"],
      },
      {
        title: "Data Analysis & BI",
        description: "Transform raw data into actionable business insights",
        icon: <BarChart className="h-6 w-6" />,
        price: "Starting from ₹30,000",
        features: ["Data Visualization", "Business Intelligence", "Custom Reports", "Real-time Analytics"],
      },
      {
        title: "AI Chatbot Solutions",
        description: "Intelligent conversational AI for customer support and engagement",
        icon: <MessageSquare className="h-6 w-6" />,
        price: "Starting from ₹20,000",
        features: ["24/7 Support", "Multi-language", "Integration Ready", "Learning Capability"],
      },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and robust infrastructure management",
    color: "from-green-500 to-teal-500",
    services: [
      {
        title: "Cloud Solutions",
        description: "AWS, Azure, GCP deployment and migration services",
        icon: <Cloud className="h-6 w-6" />,
        price: "Starting from ₹35,000",
        features: ["Cloud Migration", "Auto Scaling", "Cost Optimization", "24/7 Monitoring"],
      },
      {
        title: "DevOps & Automation",
        description: "CI/CD pipelines and infrastructure automation",
        icon: <Zap className="h-6 w-6" />,
        price: "Starting from ₹45,000",
        features: ["CI/CD Pipeline", "Infrastructure as Code", "Monitoring", "Security"],
      },
      {
        title: "API Development",
        description: "RESTful APIs, GraphQL, and microservices architecture",
        icon: <Globe className="h-6 w-6" />,
        price: "Starting from ₹25,000",
        features: ["RESTful APIs", "GraphQL", "Documentation", "Security"],
      },
    ],
  },
  {
    title: "Design & Content",
    description: "Creative solutions that captivate and engage your audience",
    color: "from-orange-500 to-red-500",
    services: [
      {
        title: "UI/UX Design",
        description: "User-centered design that creates delightful experiences",
        icon: <Palette className="h-6 w-6" />,
        price: "Starting from ₹20,000",
        features: ["User Research", "Wireframing", "Prototyping", "Design System"],
      },
      {
        title: "Graphic Design",
        description: "Professional visual design for branding and marketing",
        icon: <PenTool className="h-6 w-6" />,
        price: "Starting from ₹15,000",
        features: ["Logo Design", "Brand Identity", "Marketing Materials", "Print Design"],
      },
      {
        title: "Content Writing",
        description: "SEO-optimized content for websites and marketing campaigns",
        icon: <FileText className="h-6 w-6" />,
        price: "Starting from ₹10,000",
        features: ["SEO Content", "Blog Writing", "Copywriting", "Technical Writing"],
      },
    ],
  },
  {
    title: "Automation Services",
    description: "Streamline your business processes with intelligent automation",
    color: "from-indigo-500 to-purple-500",
    services: [
      {
        title: "WhatsApp Automation",
        description: "Automated customer support and marketing via WhatsApp",
        icon: <MessageSquare className="h-6 w-6" />,
        price: "Starting from ₹15,000",
        features: ["Auto Responses", "Bulk Messaging", "Lead Generation", "Order Updates"],
      },
      {
        title: "Bulk SMS Services",
        description: "Mass messaging for marketing campaigns and notifications",
        icon: <Send className="h-6 w-6" />,
        price: "Starting from ₹5,000",
        features: ["Marketing Campaigns", "OTP Services", "Event Notifications", "Promotional SMS"],
      },
      {
        title: "Digital Marketing",
        description: "Complete digital marketing solutions to grow your business",
        icon: <Megaphone className="h-6 w-6" />,
        price: "Starting from ₹25,000",
        features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
      },
    ],
  },
]

export default function ServiceSelection() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggleService = (serviceTitle: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceTitle) 
        ? prev.filter(s => s !== serviceTitle)
        : [...prev, serviceTitle]
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get Started - Select Your Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Choose from our comprehensive range of services to build your perfect solution
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === index
                  ? "bg-primary text-white shadow-lg transform scale-105"
                  : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {selectedServices.length > 0 && (
          <div className="text-center mb-8">
            <div className="bg-primary/10 rounded-lg p-4 inline-block">
              <h3 className="text-lg font-semibold text-primary mb-2">Selected Services</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {selectedServices.map((service) => (
                  <Badge key={service} variant="secondary" className="bg-primary text-white">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mb-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">{serviceCategories[selectedCategory].title}</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {serviceCategories[selectedCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories[selectedCategory].services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white dark:bg-slate-800"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="text-lg font-bold text-primary mt-2">{service.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button 
                      onClick={() => toggleService(service.title)}
                      className={`w-full transition-all duration-300 ${
                        selectedServices.includes(service.title)
                          ? 'bg-primary text-white'
                          : 'bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90'
                      }`}
                    >
                      {selectedServices.includes(service.title) ? 'Selected ✓' : 'Select Service'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              {selectedServices.length > 0 
                ? `You've selected ${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''}. Let's discuss your project!`
                : "Select your services above or tell us about your custom requirements."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#start-project">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Tell Us About Your Project
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
