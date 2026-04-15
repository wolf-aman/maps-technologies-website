/**
 * Submit Brief API Route
 * 
 * Handles technical inquiry form submissions via email.
 * Validates input, sanitizes data, and sends email through Resend.
 * 
 * POST /api/submit-brief
 * Body: SubmitBriefPayload
 * Response: { success: boolean; message: string }
 */

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { env } from '@/config/env.config';
import { logger } from '@/lib/logger';
import { validator } from '@/lib/validator';

/**
 * Payload for brief submission
 */
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

/**
 * Handle brief submission POST request
 */
export async function POST(request: Request) {
  const startTime = Date.now();
  
  try {
    logger.debug('Brief submission request received');

    // Validate Resend API key
    if (!env.RESEND_API_KEY) {
      logger.error('Missing RESEND_API_KEY environment variable');
      return NextResponse.json(
        { success: false, message: 'Email service not configured. Please contact support.' },
        { status: 503 }
      );
    }

    // Parse request body
    let payload: SubmitBriefPayload;
    try {
      payload = (await request.json()) as SubmitBriefPayload;
    } catch (error) {
      logger.warn('Invalid request body format', { error: String(error) });
      return NextResponse.json(
        { success: false, message: 'Invalid request format.' },
        { status: 400 }
      );
    }

    // Validate required fields using validator utility
    const { valid, errors } = validator.validateFormData(payload as Record<string, unknown>, {
      name: { required: true, minLength: 2, maxLength: 100 },
      email: { required: true, type: 'email', maxLength: 254 },
      mobile: { required: true, type: 'phone' },
      specifyNeed: { required: true, minLength: 10, maxLength: 2000 },
    });

    if (!valid) {
      logger.warn('Validation failed', { errors });
      return NextResponse.json(
        { success: false, message: 'Validation failed: ' + Object.values(errors).join(', ') },
        { status: 400 }
      );
    }

    // Sanitize all input fields for HTML output (XSS prevention)
    const safeName = validator.sanitizeHtml(payload.name);
    const safeEmail = validator.sanitizeHtml(payload.email);
    const safeMobile = validator.sanitizeHtml(payload.mobile);
    const safeCompany = validator.sanitizeHtml(payload.company, 'Not specified');
    const safeCapability = validator.sanitizeHtml(payload.capability, 'General');
    const safeAreaOfProblem = validator.sanitizeHtml(payload.areaOfProblem, 'Not specified');
    const safeUrgency = validator.sanitizeHtml(payload.urgency, 'Not specified');
    const safeSpecifyNeed = validator.sanitizeHtml(payload.specifyNeed);

    logger.info('Brief validation passed', { email: safeEmail, capability: safeCapability });

    // Initialize Resend with validated API key
    const resend = new Resend(env.RESEND_API_KEY);

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: `MAPS Technologies <${env.RESEND_FROM_EMAIL}>`,
      to: [env.CONTACT_EMAIL],
      replyTo: safeEmail,
      subject: `New Technical Inquiry: ${safeCapability}`,
      html: generateEmailHtml({
        name: safeName,
        email: safeEmail,
        mobile: safeMobile,
        company: safeCompany,
        capability: safeCapability,
        areaOfProblem: safeAreaOfProblem,
        urgency: safeUrgency,
        specifyNeed: safeSpecifyNeed,
      }),
    });

    if (error) {
      logger.error('Resend API error', error as Error, { email: safeEmail });
      return NextResponse.json(
        { success: false, message: 'Failed to send email. Please try again later.' },
        { status: 503 }
      );
    }

    const duration = Date.now() - startTime;
    logger.info('Brief submitted successfully', { email: safeEmail, durationMs: duration });

    return NextResponse.json(
      { success: true, message: 'Brief submitted successfully. We will be in touch soon.' },
      { status: 200 }
    );
  } catch (err) {
    const duration = Date.now() - startTime;
    logger.error('Unexpected error in submit-brief API', err as Error, { durationMs: duration });

    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

/**
 * Generate HTML email template
 */
function generateEmailHtml(data: {
  name: string;
  email: string;
  mobile: string;
  company: string;
  capability: string;
  areaOfProblem: string;
  urgency: string;
  specifyNeed: string;
}): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #1e40af; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
    .section { background-color: #f5f5f5; padding: 15px; margin: 10px 0; border-left: 4px solid #1e40af; }
    .section h3 { margin-top: 0; color: #1e40af; }
    .detail { margin: 8px 0; }
    .label { font-weight: bold; color: #1e40af; }
    .footer { font-size: 12px; color: #666; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Technical Inquiry</h2>
      <p>A new inquiry has been received through the MAPS Technologies website.</p>
    </div>

    <div class="section">
      <h3>Contact Details</h3>
      <div class="detail"><span class="label">Name:</span> ${data.name}</div>
      <div class="detail"><span class="label">Email:</span> ${data.email}</div>
      <div class="detail"><span class="label">Mobile:</span> ${data.mobile}</div>
      <div class="detail"><span class="label">Company:</span> ${data.company}</div>
    </div>

    <div class="section">
      <h3>Problem Details</h3>
      <div class="detail"><span class="label">Capability Area:</span> ${data.capability}</div>
      <div class="detail"><span class="label">Specific Area:</span> ${data.areaOfProblem}</div>
      <div class="detail"><span class="label">Urgency:</span> ${data.urgency}</div>
    </div>

    <div class="section">
      <h3>Description</h3>
      <p style="white-space: pre-wrap; margin: 0;">${data.specifyNeed}</p>
    </div>

    <div class="footer">
      <p>This email was sent from the MAPS Technologies inquiry form.</p>
      <p>Response email: ${data.email}</p>
    </div>
  </div>
</body>
</html>
  `;
}