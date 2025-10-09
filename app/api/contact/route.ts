import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only when needed to avoid build-time errors
const getResend = () => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY environment variable is required')
  }
  return new Resend(process.env.RESEND_API_KEY)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Determine form type and create appropriate email content
    const formType = body.formType || 'contact'
    const subject = getEmailSubject(formType, body.subject)
    const htmlContent = generateEmailHTML(formType, body)

    // Send email using Resend
    const resend = getResend()
    const { data, error } = await resend.emails.send({
      from: 'notifications@gmgwebdesign.com',
      to: ['info@unityforlife.org'],
      subject,
      html: htmlContent,
      replyTo: body.email
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! We will contact you within 24 hours.',
      emailId: data?.id
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

function getEmailSubject(formType: string, customSubject?: string): string {
  switch (formType) {
    case 'volunteer':
      return 'New Volunteer Application - UnityForLife Website'
    case 'housing':
      return 'New Housing Application - UnityForLife Website'
    case 'contact':
    default:
      return customSubject 
        ? `Contact Form: ${customSubject} - UnityForLife Website`
        : 'New Contact Form Submission - UnityForLife Website'
  }
}

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  formType?: string
  // Volunteer specific
  availability?: string
  skills?: string
  // Housing specific
  housingType?: string
  urgency?: string
  accessibility?: string
}

function generateEmailHTML(formType: string, data: ContactFormData): string {
  const baseHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; line-height: 1.6;">
      <div style="background: #1E3A8A; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">UnityForLife - ${getFormTypeTitle(formType)}</h1>
      </div>
      
      <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
        <h2 style="color: #1E3A8A; margin-top: 0;">Contact Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
            <td style="padding: 8px 0; color: #1f2937;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
            <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a></td>
          </tr>
          ${data.phone ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
            <td style="padding: 8px 0; color: #1f2937;"><a href="tel:${data.phone}" style="color: #2563eb;">${data.phone}</a></td>
          </tr>
          ` : ''}
        </table>
  `

  // Add form-specific content
  let specificContent = ''
  
  if (formType === 'contact' && data.subject) {
    specificContent += `
      <h2 style="color: #1E3A8A; margin-top: 30px;">Subject</h2>
      <p style="color: #1f2937; background: white; padding: 15px; border-radius: 6px; border: 1px solid #d1d5db;">${data.subject}</p>
    `
  }

  if (formType === 'volunteer') {
    specificContent += `
      <h2 style="color: #1E3A8A; margin-top: 30px;">Volunteer Information</h2>
      <table style="width: 100%; border-collapse: collapse;">
        ${data.availability ? `
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Availability:</td>
          <td style="padding: 8px 0; color: #1f2937;">${data.availability}</td>
        </tr>
        ` : ''}
        ${data.skills ? `
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #374151;">Skills:</td>
          <td style="padding: 8px 0; color: #1f2937;">${data.skills}</td>
        </tr>
        ` : ''}
      </table>
    `
  }

  if (formType === 'housing') {
    specificContent += `
      <h2 style="color: #1E3A8A; margin-top: 30px;">Housing Information</h2>
      <table style="width: 100%; border-collapse: collapse;">
        ${data.housingType ? `
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 150px;">Housing Type:</td>
          <td style="padding: 8px 0; color: #1f2937;">${data.housingType}</td>
        </tr>
        ` : ''}
        ${data.urgency ? `
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #374151;">Urgency:</td>
          <td style="padding: 8px 0; color: #1f2937;">${data.urgency}</td>
        </tr>
        ` : ''}
        ${data.accessibility ? `
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #374151;">Accessibility:</td>
          <td style="padding: 8px 0; color: #1f2937;">${data.accessibility}</td>
        </tr>
        ` : ''}
      </table>
    `
  }

  const messageContent = `
    <h2 style="color: #1E3A8A; margin-top: 30px;">Message</h2>
    <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #d1d5db; color: #1f2937;">
      ${data.message.replace(/\n/g, '<br>')}
    </div>
  `

  const footerContent = `
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #d1d5db; text-align: center; color: #6b7280; font-size: 14px;">
          <p>This message was sent from the UnityForLife website contact form.</p>
          <p>Reply directly to this email to respond to ${data.name}.</p>
          <p style="margin-top: 15px;">
            <strong>UnityForLife</strong><br>
            Safe, accessible housing for veterans, elderly, and disabled individuals<br>
            <a href="tel:844-864-8945" style="color: #2563eb;">844-UNITY-4-LIFE</a> | 
            <a href="mailto:info@unityforlife.org" style="color: #2563eb;">info@unityforlife.org</a>
          </p>
        </div>
      </div>
    </div>
  `

  return baseHTML + specificContent + messageContent + footerContent
}

function getFormTypeTitle(formType: string): string {
  switch (formType) {
    case 'volunteer':
      return 'Volunteer Application'
    case 'housing':
      return 'Housing Application'
    case 'contact':
    default:
      return 'Contact Form Submission'
  }
}