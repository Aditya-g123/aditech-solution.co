"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { Users, Briefcase, Award, Building } from "lucide-react"

export default function CounterSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    experience: 0,
  })

  const targets = {
    projects: 500,
    clients: 200,
    awards: 50,
    experience: 10,
  }

  const startAnimation = useCallback(() => {
    if (hasAnimated) return

    setHasAnimated(true)
    const duration = 2000
    const frameDuration = 1000 / 60
    const totalFrames = Math.round(duration / frameDuration)

    let frame = 0

    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames

      setCounts({
        projects: Math.floor(progress * targets.projects),
        clients: Math.floor(progress * targets.clients),
        awards: Math.floor(progress * targets.awards),
        experience: Math.floor(progress * targets.experience),
      })

      if (frame >= totalFrames) {
        setCounts({
          projects: targets.projects,
          clients: targets.clients,
          awards: targets.awards,
          experience: targets.experience,
        })
        clearInterval(counter)
      }
    }, frameDuration)

    return () => clearInterval(counter)
  }, [hasAnimated, targets.projects, targets.clients, targets.awards, targets.experience])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          startAnimation()
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [startAnimation, hasAnimated])

  return (
    <section ref={sectionRef} className="py-16 bg-primary text-white relative">
      <div className="absolute inset-0 opacity-10">
        <img src="/images/team-presentation.png" alt="Team Background" className="w-full h-full object-cover" />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Briefcase size={40} className="mb-4" />
            <h3 className="text-4xl font-bold">{counts.projects}+</h3>
            <p className="text-lg mt-2">Projects Delivered</p>
          </div>
          <div className="flex flex-col items-center">
            <Users size={40} className="mb-4" />
            <h3 className="text-4xl font-bold">{counts.clients}+</h3>
            <p className="text-lg mt-2">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <Award size={40} className="mb-4" />
            <h3 className="text-4xl font-bold">{counts.awards}+</h3>
            <p className="text-lg mt-2">Awards Won</p>
          </div>
          <div className="flex flex-col items-center">
            <Building size={40} className="mb-4" />
            <h3 className="text-4xl font-bold">{counts.experience}+</h3>
            <p className="text-lg mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
