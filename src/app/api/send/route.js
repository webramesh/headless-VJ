import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import EmailTemplate from '../../Components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Validate required fields
  if (!name || !email || !message) {
    return NextResponse.json(
      {
        error: 'Missing required fields. Please provide name, email, and message.',
      },
      { status: 400 }
    );
  }
  // TODO: Solve -> The mailinator.com domain is not verified. Please, add and verify your domain on https://resend.com/domains
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Required test email for development
      to: ['rameshkunwar1110@gmail.com'],
      reply_to: email,
      subject: `New Contact Form Message from ${name}`,
      react: EmailTemplate({
        name: name,
        email: email,
        message: message,
      }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Error sending email. Please try again later.',
      },
      { status: 500 }
    );
  }
}
