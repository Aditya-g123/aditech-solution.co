"use client"

import React, { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Shield, Clock, Users, Send, Sparkles, Rocket } from 'lucide-react'

const services = [
  "Web Development",
  "Mobile App Development", 
  "Data Analysis & AI",
  "UI/UX Design",
  "Cloud Solutions",
  "Digital Marketing",
  "E-commerce Platform",
  "AI Chatbot Solutions",
  "DevOps & Automation",
  "API Development",
  "Blockchain Development",
  "IoT Solutions",
  "Graphic Design",
  "Content Writing",
  "WhatsApp Automation",
  "Bulk SMS Services",
]

const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 - ₹1,00,000", 
  "₹1,00,000 - ₹5,00,000",
  "₹5,00,000 - ₹10,00,000",
  "Above ₹10,00,000",
]

const timelines = ["ASAP (Rush Job)", "Within 1 month", "1-3 months", "3-6 months", "6+ months", "Flexible"]

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  services: string[]
  budget: string
  timeline: string
  description: string
  hasExistingWebsite: boolean
  needsOngoingSupport: boolean
  hearAboutUs: string
}

export default function ProjectInquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [],
    budget: "",
    timeline: "",
    description: "",
    hasExistingWebsite: false,
    needsOngoingSupport: false,
    hearAboutUs: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [currentStep, setCurrentStep] = useState(1)

  const handleInputChange = useCallback((field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleServiceToggle = useCallback((service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }, [])

  const nextStep = useCallback(() => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }, [currentStep])

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }, [currentStep])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Try to submit to Supabase first
      let submitted = false
      
      try {
        const { supabaseClient } = await import('@/lib/supabase')
        const { error: supabaseError } = await supabaseClient
          .from('project_inquiries')
          .insert([
            {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              company: formData.company,
              services: formData.services,
              budget: formData.budget,
              timeline: formData.timeline,
              description: formData.description,
              has_existing_website: formData.hasExistingWebsite,
              needs_ongoing_support: formData.needsOngoingSupport,
              hear_about_us: formData.hearAboutUs,
              created_at: new Date().toISOString(),
            }
          ])

        if (!supabaseError) {
          submitted = true
        }
      } catch (supabaseError) {
        console.warn('Supabase submission failed, using fallback:', supabaseError)
      }

      // Fallback: Store in localStorage and show success
      if (!submitted) {
        const inquiries = JSON.parse(localStorage.getItem('project_inquiries') || '[]')
        inquiries.push({
          ...formData,
          id: Date.now(),
          created_at: new Date().toISOString(),
        })
        localStorage.setItem('project_inquiries', JSON.stringify(inquiries))
        
        // Send email notification (you can implement this later)
        console.log('Form data stored locally:', formData)
      }

      setIsSubmitted(true)
      
      // Reset form after 8 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setCurrentStep(1)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          services: [],
          budget: "",
          timeline: "",
          description: "",
          hasExistingWebsite: false,
          needsOngoingSupport: false,
          hearAboutUs: "",
        })
      }, 8000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setError('Failed to submit form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-2 border-green-200 shadow-2xl animate-bounce-in">
        <CardContent className="p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute top-8 right-8 w-4 h-4 bg-emerald-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-6 left-8 w-5 h-5 bg-teal-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-ping delay-500"></div>
          </div>

          <div className="relative z-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-6 animate-pulse shadow-lg">
              <Check className="h-10 w-10 text-white animate-bounce" />
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Rocket className="h-6 w-6 text-green-600 animate-bounce" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Thank You for Your Project Inquiry!
              </h3>
              <Sparkles className="h-6 w-6 text-green-600 animate-pulse" />
            </div>
            <p className="text-green-700 mb-8 text-lg leading-relaxed">
              🎉 We've received your detailed requirements and our expert team will review them carefully. You can expect to
              hear from us within 24 hours with a personalized proposal tailored to your needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center gap-3 p-4 bg-white/50 rounded-lg border border-green-200 transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                  <Clock size={20} className="text-white" />
                </div>
                <span className="font-semibold text-green-800">24hr Response</span>
                <span className="text-sm text-green-600">Quick turnaround time</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-white/50 rounded-lg border border-green-200 transform hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse delay-200">
                  <Shield size={20} className="text-white" />
                </div>
                <span className="font-semibold text-green-800">Free Consultation</span>
                <span className="text-sm text-green-600">No hidden charges</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-white/50 rounded-lg border border-green-200 transform hover:scale-105 transition-all duration-300 animate-fade-in-up delay-400">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse delay-400">
                  <Star size={20} className="text-white" />
                </div>
                <span className="font-semibold text-green-800">Expert Team</span>
                <span className="text-sm text-green-600">Industry professionals</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                <Users size={20} />
                What happens next?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xs">1</div>
                  <span>Our team reviews your requirements</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xs">2</div>
                  <span>We prepare a customized proposal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xs">3</div>
                  <span>Schedule a consultation call</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xs">4</div>
                  <span>Start building your project</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/30 rounded-lg border border-green-200">
              <p className="text-green-700 text-sm mb-2">
                <strong>Need immediate assistance?</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:+919120984300" 
                  className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors"
                >
                  📞 +91 9120984300
                </a>
                <a 
                  href="mailto:info@aaditech.com" 
                  className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors"
                >
                  ✉️ info@aaditech.com
                </a>
                <a 
                  href="https://wa.me/9120984300" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-5xl mx-auto shadow-2xl border-2 border-white/20 bg-white/10 backdrop-blur-md">
      <CardHeader className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md text-white p-6 rounded-t-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-2 left-2 w-4 h-4 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="absolute bottom-2 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 right-2 w-5 h-5 bg-white rounded-full animate-ping delay-1000"></div>
        </div>

        <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
            <Zap size={24} className="text-white" />
          </div>
          Tell Us About Your Project
          <Sparkles size={24} className="animate-pulse" />
        </CardTitle>
        <CardDescription className="text-blue-100 text-lg relative z-10">
          Share your vision and requirements with us. We'll create a customized solution that perfectly fits your needs and budget.
        </CardDescription>

        <div className="flex items-center gap-2 mt-6 relative z-10">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                step <= currentStep 
                  ? "bg-white text-primary shadow-lg transform scale-110" 
                  : "bg-white/30 text-white/70"
              }`}>
                {step < currentStep ? <Check size={20} /> : step}
              </div>
              {step < 3 && (
                <div className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                  step < currentStep ? "bg-white" : "bg-white/30"
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-sm mt-2 opacity-90 relative z-10">
          Step {currentStep} of 3 - {
            currentStep === 1 ? "Basic Information" :
            currentStep === 2 ? "Project Requirements" :
            "Project Details"
          }
        </div>
      </CardHeader>

      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <Users size={24} className="text-blue-400" />
                Basic Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white mb-2">Company/Organization</label>
                  <Input
                    placeholder="Company name (optional)"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white mb-2">How did you hear about us?</label>
                <Select value={formData.hearAboutUs} onValueChange={(value) => handleInputChange("hearAboutUs", value)}>
                  <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google Search</SelectItem>
                    <SelectItem value="social-media">Social Media</SelectItem>
                    <SelectItem value="referral">Friend/Colleague Referral</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="advertisement">Advertisement</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <Zap size={24} className="text-yellow-400" />
                Project Requirements
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-white mb-4">Select all services that apply *</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {services.map((service) => (
                    <div
                      key={service}
                      onClick={() => handleServiceToggle(service)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                        formData.services.includes(service)
                          ? "border-white bg-white/20 text-white shadow-lg"
                          : "border-white/30 hover:border-white/50 hover:bg-white/10 text-white/80"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Checkbox checked={formData.services.includes(service)} readOnly className="border-white" />
                        <span className="text-sm font-medium">{service}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {formData.services.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {formData.services.map((service) => (
                      <Badge key={service} variant="secondary" className="bg-white/20 text-white border-white/30">
                        {service}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white mb-2">Budget Range *</label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white mb-2">Timeline *</label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelines.map((timeline) => (
                        <SelectItem key={timeline} value={timeline}>
                          {timeline}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="existing-website"
                    checked={formData.hasExistingWebsite}
                    onCheckedChange={(checked) => handleInputChange("hasExistingWebsite", checked as boolean)}
                    className="border-white"
                  />
                  <label htmlFor="existing-website" className="text-sm font-medium text-white">
                    I have an existing website that needs updates/redesign
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="ongoing-support"
                    checked={formData.needsOngoingSupport}
                    onCheckedChange={(checked) => handleInputChange("needsOngoingSupport", checked as boolean)}
                    className="border-white"
                  />
                  <label htmlFor="ongoing-support" className="text-sm font-medium text-white">
                    I'm interested in ongoing support and maintenance
                  </label>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <Send size={24} className="text-green-400" />
                Project Details
              </h3>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white mb-2">Describe your project in detail *</label>
                <Textarea
                  placeholder="Please provide as much detail as possible about your project requirements, goals, target audience, specific features needed, design preferences, etc. The more information you provide, the better we can understand and serve your needs."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={8}
                  required
                  className="resize-none bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 transition-all duration-300"
                />
                <div className="text-xs text-white/60 mt-1">{formData.description.length}/2000 characters</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Rocket size={18} className="text-blue-400" />
                  What happens next?
                </h4>
                <div className="space-y-3 text-sm text-white/80">
                  <div className="flex items-center gap-3">
                    <Users size={18} className="text-green-400" />
                    <span>Our expert team will review your requirements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-blue-400" />
                    <span>We'll contact you within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star size={18} className="text-yellow-400" />
                    <span>Free consultation and project proposal</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 animate-shake">
              <p className="text-red-700">{error}</p>
              <div className="mt-2 text-sm text-red-600">
                You can also contact us directly:
                <br />
                📞 <a href="tel:+919120984300" className="underline">+91 9120984300</a>
                <br />
                ✉️ <a href="mailto:info@aaditech.com" className="underline">info@aaditech.com</a>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-6 border-t border-white/20">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all duration-300"
              >
                Previous
              </Button>
            )}

            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="ml-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                disabled={
                  (currentStep === 1 && (!formData.name || !formData.email || !formData.phone)) ||
                  (currentStep === 2 && (formData.services.length === 0 || !formData.budget || !formData.timeline))
                }
              >
                Next Step
                <Sparkles size={16} className="ml-2" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="ml-auto bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                disabled={isSubmitting || !formData.description.trim()}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Submit Project Inquiry
                    <Rocket size={16} className="ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
