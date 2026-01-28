import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'zgh3tp87',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, email, phone, company, jobTitle, inquiryType, message, source } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const doc = {
      _type: 'contactSubmission',
      name,
      email,
      phone: phone || '',
      company: company || '',
      jobTitle: jobTitle || '',
      inquiryType: inquiryType || 'general',
      message: message || '',
      submittedAt: new Date().toISOString(),
      status: 'new',
      source: source || 'contact-page',
    }

    const result = await client.create(doc)

    return NextResponse.json(
      { success: true, id: result._id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating contact submission:', error)
    return NextResponse.json(
      { error: 'Failed to save contact submission' },
      { status: 500 }
    )
  }
}
