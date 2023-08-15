const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());  // Allow cross-origin requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email provider
        auth: {
            user: 'YOUR_EMAIL@gmail.com', // Your email address
            pass: 'YOUR_EMAIL_PASSWORD'  // Your email password
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
        res.json({ type: 'success', message: 'Email sent successfully!' });
    } catch (error) {
        res.json({ type: 'error', message: 'There was an issue sending the email.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
