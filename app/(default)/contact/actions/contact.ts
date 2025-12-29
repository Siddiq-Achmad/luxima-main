'use server';


import { ActionError, actionClient } from '@/lib/safe-action';
import { ContactSchema } from '@/lib/validators/contact';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const contact = actionClient
  .schema(ContactSchema)
  .action(async ({ parsedInput: { name, email, message } }) => {
    try {
      const { data, error } = await resend.emails.send({
        from: name ? `${name} <${email}>` : email,
        to: [process.env.RESEND_FROM_EMAIL as string],
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      if (error) {
        console.error('Error sending contact email:', error);
        throw new ActionError(`Failed to send contact email: ${error.message}`);
      }

      return {
        success: true,
        message: "Your message has been sent! We'll get back to you soon.",
      };
    } catch (error) {
      console.error('Contact form error:', error);
      if (error instanceof ActionError) throw error;
      throw new ActionError(
        'Failed to send your message. Please try again later.',
      );
    }
  });
