import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email provider
      auth: {
        user: 'g.lunesu@outlook.com', // Your email address
        pass: 'LUzzNhK1%X3P3vu'  // Your email password
      }
    });

    const mailOptions = {
      from: 'Demo contact form <info@avemedia.agency>',
      to: 'Test contact form <g.lunesu@outlook.com>', // Your email
      subject: 'New message from contact form',
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ type: 'success', message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ type: 'error', message: 'There was an issue sending the email.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
