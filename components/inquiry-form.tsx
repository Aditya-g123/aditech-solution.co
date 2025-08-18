"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check } from "lucide-react"

export default function InquiryForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form
      setName("")
      setEmail("")
      setPhone("")
      setSubject("")
      setMessage("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="w-full max-w-md">
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-green-800">Message Sent!</h3>
          <p className="mt-2 text-sm text-green-700">
            Thank you for your inquiry. We will get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <Select value={subject} onValueChange={setSubject} required>
              <SelectTrigger>
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="services">Services</SelectItem>
                <SelectItem value="learning">Learning Programs</SelectItem>
                <SelectItem value="support">Technical Support</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  )
}
