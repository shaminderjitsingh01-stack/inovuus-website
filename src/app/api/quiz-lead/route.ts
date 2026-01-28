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

    const { email, name, company, phone, score, maxScore, resultTier, answers, source } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const doc = {
      _type: 'quizLead',
      email,
      name: name || '',
      company: company || '',
      phone: phone || '',
      score: score || 0,
      maxScore: maxScore || 100,
      resultTier: resultTier || 'unknown',
      answers: answers || [],
      submittedAt: new Date().toISOString(),
      status: 'new',
      source: source || 'website',
    }

    const result = await client.create(doc)

    return NextResponse.json(
      { success: true, id: result._id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating quiz lead:', error)
    return NextResponse.json(
      { error: 'Failed to save quiz lead' },
      { status: 500 }
    )
  }
}
