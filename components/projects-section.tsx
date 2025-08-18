"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400&text=E-Commerce+Platform",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI Chatbot Solution",
    description: "Intelligent chatbot with natural language processing for customer support automation.",
    image: "/placeholder.svg?height=300&width=400&text=AI+Chatbot",
    technologies: ["Python", "TensorFlow", "React", "WebSocket"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    image: "/placeholder.svg?height=300&width=400&text=Banking+App",
    technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
    category: "Mobile Development",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for business intelligence with real-time data visualization.",
    image: "/placeholder.svg?height=300&width=400&text=Analytics+Dashboard",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
    category: "Data Analysis",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Digital Marketing Platform",
    description: "Comprehensive digital marketing solution with campaign management and analytics.",
    image: "/placeholder.svg?height=300&width=400&text=Marketing+Platform",
    technologies: ["Angular", "Spring Boot", "MySQL", "Redis"],
    category: "Digital Marketing",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Cloud Infrastructure",
    description: "Scalable cloud infrastructure setup with automated deployment and monitoring.",
    image: "/placeholder.svg?height=300&width=400&text=Cloud+Infrastructure",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    category: "Cloud Solutions",
    liveUrl: "#",
    githubUrl: "#",
  },
]

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "AI/ML",
  "Data Analysis",
  "Digital Marketing",
  "Cloud Solutions",
]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [visibleProjects, setVisibleProjects] = useState(6)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const displayedProjects = filteredProjects.slice(0, visibleProjects)

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Our Recent Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Explore our portfolio of successful projects across various technologies and industries
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
                    <Link href={project.liveUrl} className="text-gray-500 hover:text-primary transition-colors">
                      <ExternalLink size={16} />
                    </Link>
                    <Link href={project.githubUrl} className="text-gray-500 hover:text-primary transition-colors">
                      <Github size={16} />
                    </Link>
                  </div>
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProjects.length > visibleProjects && (
          <div className="text-center">
            <Button onClick={() => setVisibleProjects((prev) => prev + 3)} variant="outline" size="lg">
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
