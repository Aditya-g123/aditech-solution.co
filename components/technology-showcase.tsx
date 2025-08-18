"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Database, Cloud, Smartphone, Brain, Palette, Server, Shield } from "lucide-react"
import Link from "next/link"

const technologies = [
  {
    category: "Frontend Development",
    icon: <Code2 className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500",
    techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    icon: <Server className="h-8 w-8" />,
    color: "from-green-500 to-emerald-500",
    techs: ["Node.js", "Python", "Java", "PHP", "Express.js", "Django"],
  },
  {
    category: "Database Systems",
    icon: <Database className="h-8 w-8" />,
    color: "from-purple-500 to-violet-500",
    techs: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase"],
  },
  {
    category: "Cloud Platforms",
    icon: <Cloud className="h-8 w-8" />,
    color: "from-orange-500 to-red-500",
    techs: ["AWS", "Google Cloud", "Azure", "Vercel", "Netlify", "Docker"],
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="h-8 w-8" />,
    color: "from-pink-500 to-rose-500",
    techs: ["React Native", "Flutter", "iOS", "Android", "Expo", "Ionic"],
  },
  {
    category: "AI & Machine Learning",
    icon: <Brain className="h-8 w-8" />,
    color: "from-indigo-500 to-purple-500",
    techs: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Scikit-learn", "Pandas"],
  },
  {
    category: "Design Tools",
    icon: <Palette className="h-8 w-8" />,
    color: "from-teal-500 to-cyan-500",
    techs: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Canva"],
  },
  {
    category: "DevOps & Security",
    icon: <Shield className="h-8 w-8" />,
    color: "from-yellow-500 to-orange-500",
    techs: ["Kubernetes", "Jenkins", "GitHub Actions", "SSL", "OAuth", "JWT"],
  },
]

export default function TechnologyShowcase() {
  const [selectedCategory, setSelectedCategory] = useState(0)

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Technology Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technology Categories */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {technologies.map((tech, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(index)}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                    selectedCategory === index
                      ? "bg-white dark:bg-slate-800 shadow-lg border-2 border-primary"
                      : "bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${tech.color} text-white`}>{tech.icon}</div>
                    <span className="font-semibold">{tech.category}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Technology Details */}
          <div className="lg:col-span-2">
            <Card className="h-full bg-white dark:bg-slate-800 shadow-xl border-2 border-gradient-to-r from-blue-200 to-purple-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${technologies[selectedCategory].color} text-white`}>
                    {technologies[selectedCategory].icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{technologies[selectedCategory].category}</CardTitle>
                    <CardDescription className="text-base">
                      Professional expertise in modern {technologies[selectedCategory].category.toLowerCase()}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {technologies[selectedCategory].techs.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="p-2 text-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-primary/10 hover:to-primary/20 transition-all duration-300 transform hover:scale-105"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                    Why Choose Our Technology Stack?
                  </h4>
                  <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                    <li>• Industry-leading tools and frameworks</li>
                    <li>• Scalable and maintainable solutions</li>
                    <li>• Future-proof technology choices</li>
                    <li>• Expert-level implementation</li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Link href="#book" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                      Start Your Project
                    </Button>
                  </Link>
                  <Link href="#services" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300 bg-transparent"
                    >
                      View Services
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
