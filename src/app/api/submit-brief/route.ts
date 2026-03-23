import { NextResponse } from 'next/server';

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

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as SubmitBriefPayload;

    console.log('submit-brief payload:', {
      areaOfProblem: payload.areaOfProblem,
      specifyNeed: payload.specifyNeed,
      urgency: payload.urgency,
      name: payload.name,
      company: payload.company,
      mobile: payload.mobile,
      email: payload.email,
      capability: payload.capability,
    });

    return NextResponse.json(
      { success: true, message: 'Brief submitted successfully.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request payload.' },
      { status: 400 }
    );
  }
}
