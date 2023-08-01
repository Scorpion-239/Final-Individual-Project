// nextjs-blog/pages/api/subscribe.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Create a nodemailer transporter with your email service provider credentials
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'ahmermustafa08@gmail.com',
        pass: '090078601',
      },
    });

    // Generate the email content
    const emailContent = {
      from: 'ahmermustafa08@gmail.com',
      to: email,
      subject: 'Resume of Ahmer Mustafa ',
      text: `Thank you for taking interest in me.`,
      attachments: [
        {
          filename: 'Ahmer_Mustafa_Resume.pdf',
          path: '../public/Ahmer_Mustafa_Resume.pdf', // Update with the actual path to your resume PDF file
        },
      ],
    };

    // Send the email
    try {
      await transporter.sendMail(emailContent);
      res.status(200).json({ message: 'Welcome email sent successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send welcome email.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
