"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Check, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
      setDate(undefined)

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }, [])

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-green-800">Booking Successful!</h3>
          <p className="mt-2 text-sm text-green-700">
            Thank you for booking a consultation. We will contact you shortly to confirm your appointment.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-6">
        {/* Quick Typeform Link */}
        <div className="bg-gradient-to-r from-primary to-blue-500 rounded-lg p-4 text-white text-center">
          <h3 className="font-semibold mb-2">Quick Booking</h3>
          <p className="text-sm mb-4 opacity-90">Use our advanced booking form for faster scheduling</p>
          <Link href="https://form.typeform.com/to/eEHRxZyK" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="w-full bg-white text-primary hover:bg-gray-100 font-semibold">
              <ExternalLink size={16} className="mr-2" />
              Book via Typeform
            </Button>
          </Link>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <span>Or fill out the form below</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>
          <div>
            <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="data-analysis">Data Analysis</SelectItem>
                <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                <SelectItem value="cloud">Cloud Solutions</SelectItem>
                <SelectItem value="consulting">IT Consulting</SelectItem>
                <SelectItem value="learning">Tech Learning</SelectItem>
                <SelectItem value="graphic-design">Graphic Design</SelectItem>
                <SelectItem value="content-writing">Content Writing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Popover>
              
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Textarea
              placeholder="Additional Information"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Booking..." : "Book Consultation"}
          </Button>
        </form>
      </div>
    </div>
  )
}
