// nextjs-blog/pages/api/subscribe.js
import nodemailer from 'nodemailer';
import { mailcomposer } from 'nodemailer/lib/mail-composer';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Create a nodemailer transporter with your email service provider credentials
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'AHMERMUSTAFA08@GMAIL.COM',
        pass: '090078601', // Replace with your actual Gmail app password
      },
    });

    // Generate the email content
    const emailContent = {
      from: 'ahmermustafa08@gmail.com',
      to: email,
      subject: 'Resume of Ahmer Mustafa',
      text: `Thank you for taking interest in me.`,
      attachments: [
        {
          filename: 'Ahmer_Mustafa_Resume.pdf',
          path: '../public/Ahmer_Mustafa_Resume.pdf',  // Use the absolute path to the resume PDF
        },
      ],
    };

    // Create the email using mailcomposer
    const mail = new mailcomposer(emailContent);

    // Send the email
    try {
      const emailMessage = await mail.compile().build();
      await transporter.sendMail(emailMessage);
      res.status(200).json({ message: 'Welcome email sent successfully.' });
    } catch (error) {
      console.error('Error sending the email:', error);
      res.status(500).json({ error: 'Failed to send welcome email.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
