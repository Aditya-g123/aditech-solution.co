import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Log the submission (in production, you'd save to database or send email)
    console.log('Project inquiry received:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      services: body.services,
      budget: body.budget,
      timeline: body.timeline,
      description: body.description?.substring(0, 100) + '...',
      timestamp: new Date().toISOString()
    })

    // In production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    // 4. Send auto-response email

    return NextResponse.json({ 
      success: true, 
      message: 'Inquiry submitted successfully' 
    })
  } catch (error) {
    console.error('Error processing inquiry:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit inquiry' },
      { status: 500 }
    )
  }
}
