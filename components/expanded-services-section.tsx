"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Brain,
  Palette,
  Shield,
  Zap,
  Cpu,
  Globe,
  Blocks,
  Workflow,
  PenTool,
  FileText,
} from "lucide-react"
import Link from "next/link"

const serviceCategories = [
  {
    title: "Web & Mobile Development",
    description: "Modern, responsive applications built with cutting-edge technologies",
    services: [
      {
        title: "Full-Stack Web Development",
        description: "Complete web solutions using React, Next.js, Node.js, and modern frameworks",
        icon: <Code2 className="h-8 w-8" />,
        technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB"],
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android",
        icon: <Smartphone className="h-8 w-8" />,
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Progressive Web Apps",
        description: "Fast, reliable web apps that work offline and feel like native apps",
        icon: <Globe className="h-8 w-8" />,
        technologies: ["PWA", "Service Workers", "WebAssembly", "IndexedDB"],
        color: "from-green-500 to-teal-500",
      },
    ],
  },
  {
    title: "AI & Data Solutions",
    description: "Intelligent systems and data-driven insights for modern businesses",
    services: [
      {
        title: "AI & Machine Learning",
        description: "Custom AI solutions, predictive analytics, and intelligent automation",
        icon: <Brain className="h-8 w-8" />,
        technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Scikit-learn"],
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Data Analytics & BI",
        description: "Transform raw data into actionable business insights and visualizations",
        icon: <Database className="h-8 w-8" />,
        technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark"],
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Chatbot & NLP Solutions",
        description: "Intelligent conversational AI and natural language processing systems",
        icon: <Brain className="h-8 w-8" />,
        technologies: ["Dialogflow", "Rasa", "NLTK", "spaCy", "Transformers"],
        color: "from-cyan-500 to-blue-500",
      },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description: "Scalable, secure, and reliable cloud solutions for modern enterprises",
    services: [
      {
        title: "Cloud Architecture & Migration",
        description: "Design and migrate to scalable cloud infrastructure on AWS, Azure, GCP",
        icon: <Cloud className="h-8 w-8" />,
        technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
        color: "from-sky-500 to-blue-500",
      },
      {
        title: "DevOps & Automation",
        description: "Streamline development with CI/CD pipelines and infrastructure automation",
        icon: <Workflow className="h-8 w-8" />,
        technologies: ["Jenkins", "GitLab CI", "Terraform", "Ansible", "Prometheus"],
        color: "from-emerald-500 to-green-500",
      },
      {
        title: "Cybersecurity Solutions",
        description: "Comprehensive security audits, penetration testing, and compliance",
        icon: <Shield className="h-8 w-8" />,
        technologies: ["OWASP", "Penetration Testing", "SSL/TLS", "OAuth", "GDPR"],
        color: "from-red-500 to-pink-500",
      },
    ],
  },
  {
    title: "Design & Content Services",
    description: "Creative solutions that captivate audiences and drive engagement",
    services: [
      {
        title: "Graphic Design",
        description: "Professional visual design for branding, marketing materials, and digital assets",
        icon: <PenTool className="h-8 w-8" />,
        technologies: ["Adobe Creative Suite", "Figma", "Canva", "Sketch", "Illustrator"],
        color: "from-pink-500 to-rose-500",
      },
      {
        title: "Content Writing",
        description: "Engaging, SEO-optimized content for websites, blogs, and marketing campaigns",
        icon: <FileText className="h-8 w-8" />,
        technologies: ["SEO Writing", "Copywriting", "Technical Writing", "Blog Content", "Social Media"],
        color: "from-violet-500 to-purple-500",
      },
      {
        title: "UI/UX Design",
        description: "User-centered design that creates intuitive and delightful experiences",
        icon: <Palette className="h-8 w-8" />,
        technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
        color: "from-teal-500 to-cyan-500",
      },
    ],
  },
  {
    title: "Emerging Technologies",
    description: "Next-generation solutions for forward-thinking businesses",
    services: [
      {
        title: "Blockchain Development",
        description: "Decentralized applications, smart contracts, and cryptocurrency solutions",
        icon: <Blocks className="h-8 w-8" />,
        technologies: ["Ethereum", "Solidity", "Web3.js", "IPFS", "DeFi"],
        color: "from-yellow-500 to-orange-500",
      },
      {
        title: "IoT Solutions",
        description: "Connected devices, sensor networks, and real-time monitoring systems",
        icon: <Cpu className="h-8 w-8" />,
        technologies: ["Arduino", "Raspberry Pi", "MQTT", "LoRaWAN", "Edge Computing"],
        color: "from-teal-500 to-cyan-500",
      },
      {
        title: "AR/VR Development",
        description: "Immersive experiences for training, marketing, and entertainment",
        icon: <Zap className="h-8 w-8" />,
        technologies: ["Unity", "Unreal Engine", "ARKit", "ARCore", "WebXR"],
        color: "from-violet-500 to-purple-500",
      },
    ],
  },
]

export default function ExpandedServicesSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Comprehensive Technology Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            From traditional web development to cutting-edge AI and creative design solutions, we cover the full
            spectrum of modern technology and creative needs
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? "bg-primary text-white shadow-lg transform scale-105"
                  : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="mb-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">{serviceCategories[activeCategory].title}</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {serviceCategories[activeCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories[activeCategory].services.map((service, index) => (
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
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-primary/10 hover:to-primary/20 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Link href="#inquiry">
                      <Button className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 transition-all duration-300">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Don't See What You're Looking For?</h3>
            <p className="text-lg mb-6 opacity-90">
              We specialize in custom solutions tailored to your unique business needs. Let's discuss your project!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#inquiry">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Start Custom Project
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
