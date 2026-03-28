import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

interface SubmitBriefPayload {
  areaOfProblem?: string;
  specifyNeed?: string;
  urgency?: string;
  name?: string;
  company?: string;
  mobile?: string;
  email?: string;
  capability?: string;
}

function sanitizeForHtml(value?: string, fallback = 'Not provided') {
  const normalized = value?.trim();
  if (!normalized) {
    return fallback;
  }

  return normalized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY environment variable.');
      return NextResponse.json(
        { success: false, message: 'Email service not configured.' },
        { status: 500 }
      );
    }

    const payload = (await request.json()) as SubmitBriefPayload;

    if (!payload.name?.trim() || !payload.email?.trim() || !payload.mobile?.trim() || !payload.specifyNeed?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const safeName = sanitizeForHtml(payload.name);
    const safeEmail = sanitizeForHtml(payload.email);
    const safeMobile = sanitizeForHtml(payload.mobile);
    const safeCompany = sanitizeForHtml(payload.company);
    const safeCapability = sanitizeForHtml(payload.capability, 'General');
    const safeAreaOfProblem = sanitizeForHtml(payload.areaOfProblem);
    const safeUrgency = sanitizeForHtml(payload.urgency);
    const safeSpecifyNeed = sanitizeForHtml(payload.specifyNeed);

    // Send the email using Resend
    const { error } = await resend.emails.send({
      from: 'MAPS Technologies <onboarding@resend.dev>', // You will update this once you link your domain
      to: ['ramoj31475@onbap.com'], // The email where you want to receive the notifications
      replyTo: payload.email, // Allows you to hit "Reply" and email the user directly
      subject: `New Technical Inquiry: ${safeCapability}`,
      html: `
        <h2>New Inquiry from MAPS Technologies Website</h2>
        
        <h3>Contact Details:</h3>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Mobile:</strong> ${safeMobile}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        
        <hr />
        
        <h3>Problem Details:</h3>
        <p><strong>Capability Area:</strong> ${safeCapability}</p>
        <p><strong>Specific Area:</strong> ${safeAreaOfProblem}</p>
        <p><strong>Urgency:</strong> ${safeUrgency}</p>
        
        <h4>Description:</h4>
        <p style="white-space: pre-wrap;">${safeSpecifyNeed}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 400 });
    }

    return NextResponse.json(
      { success: true, message: 'Brief submitted successfully.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Server Error:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error.' },
      { status: 500 }
    );
  }
}