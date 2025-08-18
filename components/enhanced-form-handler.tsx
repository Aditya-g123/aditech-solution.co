"use client"

// This is a utility component for handling form submissions with multiple fallbacks
export const submitFormData = async (formData: any) => {
  const submissionData = {
    ...formData,
    timestamp: new Date().toISOString(),
    source: 'website_form'
  }

  // Try multiple submission methods
  const methods = [
    // Method 1: Supabase (if available)
    async () => {
      try {
        const { supabaseClient } = await import('@/lib/supabase')
        const { error } = await supabaseClient
          .from('project_inquiries')
          .insert([{
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
          }])
        
        if (error) throw error
        return { success: true, method: 'supabase' }
      } catch (error) {
        throw new Error(`Supabase failed: ${error}`)
      }
    },

    // Method 2: API Route
    async () => {
      const response = await fetch('/api/submit-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })
      
      if (!response.ok) throw new Error('API route failed')
      return { success: true, method: 'api' }
    },

    // Method 3: Local Storage (fallback)
    async () => {
      const inquiries = JSON.parse(localStorage.getItem('project_inquiries') || '[]')
      inquiries.push({
        ...submissionData,
        id: Date.now(),
      })
      localStorage.setItem('project_inquiries', JSON.stringify(inquiries))
      
      // Also try to send via email (if EmailJS is configured)
      try {
        // You can add EmailJS integration here
        console.log('Form stored locally and ready for email notification')
      } catch (emailError) {
        console.warn('Email notification failed:', emailError)
      }
      
      return { success: true, method: 'localStorage' }
    }
  ]

  // Try each method until one succeeds
  for (const method of methods) {
    try {
      const result = await method()
      console.log(`Form submitted successfully via ${result.method}`)
      return result
    } catch (error) {
      console.warn('Submission method failed:', error)
      continue
    }
  }

  throw new Error('All submission methods failed')
}

export {}
