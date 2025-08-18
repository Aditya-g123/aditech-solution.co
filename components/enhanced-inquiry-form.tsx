"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Shield, Clock, Users } from "lucide-react"

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
]

const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹5,00,000",
  "₹5,00,000 - ₹10,00,000",
  "Above ₹10,00,000",
]

const timelines = ["ASAP (Rush Job)", "Within 1 month", "1-3 months", "3-6 months", "6+ months", "Flexible"]

export default function EnhancedInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    description: "",
    hasExistingWebsite: false,
    needsOngoingSupport: false,
    hearAboutUs: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 5 seconds
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
      }, 5000)
    }, 2000)
  }, [])

  const nextStep = useCallback(() => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }, [currentStep])

  const prevStep = useCallback(() => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }, [currentStep])

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardContent className="p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You for Your Inquiry!</h3>
          <p className="text-green-700 mb-6">
            We've received your detailed requirements and our expert team will review them carefully. You can expect to
            hear from us within 24 hours with a personalized proposal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Clock size={16} />
              <span>24hr Response</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Shield size={16} />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Star size={16} />
              <span>Expert Team</span>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary to-blue-500 text-white p-6">
        <CardTitle className="text-2xl flex items-center gap-2">
          <Zap size={24} />
          Tell Us About Your Project
        </CardTitle>
        <CardDescription className="text-blue-100">
          Help us understand your requirements so we can provide the best solution
        </CardDescription>

        {/* Progress indicator */}
        <div className="flex items-center gap-2 mt-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className={`flex-1 h-2 rounded-full ${step <= currentStep ? "bg-white" : "bg-white/30"}`} />
          ))}
        </div>
        <div className="text-sm mt-2 opacity-90">Step {currentStep} of 3</div>
      </CardHeader>

      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-fade-in-up">
              <h3 className="text-lg font-semibold mb-4">Basic Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company/Organization</label>
                  <Input
                    placeholder="Company name (optional)"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">How did you hear about us?</label>
                <Select value={formData.hearAboutUs} onValueChange={(value) => handleInputChange("hearAboutUs", value)}>
                  <SelectTrigger>
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

          {/* Step 2: Project Details */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-lg font-semibold mb-4">Project Requirements</h3>

              <div>
                <label className="block text-sm font-medium mb-3">Services Needed * (Select all that apply)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {services.map((service) => (
                    <div
                      key={service}
                      onClick={() => handleServiceToggle(service)}
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        formData.services.includes(service)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-gray-200 hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Checkbox checked={formData.services.includes(service)} readOnly />
                        <span className="text-sm font-medium">{service}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {formData.services.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {formData.services.map((service) => (
                      <Badge key={service} variant="secondary" className="bg-primary/10 text-primary">
                        {service}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range *</label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger>
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
                <div>
                  <label className="block text-sm font-medium mb-2">Timeline *</label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger>
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

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="existing-website"
                    checked={formData.hasExistingWebsite}
                    onCheckedChange={(checked) => handleInputChange("hasExistingWebsite", checked as boolean)}
                  />
                  <label htmlFor="existing-website" className="text-sm font-medium">
                    I have an existing website that needs updates/redesign
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="ongoing-support"
                    checked={formData.needsOngoingSupport}
                    onCheckedChange={(checked) => handleInputChange("needsOngoingSupport", checked as boolean)}
                  />
                  <label htmlFor="ongoing-support" className="text-sm font-medium">
                    I'm interested in ongoing support and maintenance
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Project Description */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-fade-in-up">
              <h3 className="text-lg font-semibold mb-4">Project Description</h3>

              <div>
                <label className="block text-sm font-medium mb-2">Describe your project in detail *</label>
                <Textarea
                  placeholder="Please provide as much detail as possible about your project requirements, goals, target audience, specific features needed, design preferences, etc. The more information you provide, the better we can understand and serve your needs."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={6}
                  required
                  className="resize-none"
                />
                <div className="text-xs text-gray-500 mt-1">{formData.description.length}/1000 characters</div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">What happens next?</h4>
                <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>Our expert team will review your requirements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>We'll contact you within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={16} />
                    <span>Free consultation and project proposal</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t">
            {currentStep > 1 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}

            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="ml-auto bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90"
                disabled={
                  (currentStep === 1 && (!formData.name || !formData.email || !formData.phone)) ||
                  (currentStep === 2 && (formData.services.length === 0 || !formData.budget || !formData.timeline))
                }
              >
                Next Step
              </Button>
            ) : (
              <Button
                type="submit"
                className="ml-auto bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                disabled={isSubmitting || !formData.description.trim()}
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
