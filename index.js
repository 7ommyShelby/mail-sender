const express = require('express');
require("dotenv").config();
const nodemailer = require("nodemailer");
const app = express();

const mail = process.env.MAIL_ID
const pass = process.env.PASS

app.use(express.urlencoded());


app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Form</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      form {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        width: 400px;
      }
      label {
        font-weight: bold;
      }
      input[type="email"],
      input[type="text"],
      textarea {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      }
      textarea {
        height: 100px;
      }
      button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
      }
      button:hover {
        background-color: #45a049;
      }
    </style>
    </head>
    <body>
    
    <form action="/api/sendmail" method="post">
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" required><br>
      <label for="subject">Subject:</label><br>
      <input type="text" id="subject" name="subject" required><br>
      <label for="message">Message:</label><br>
      <textarea id="message" name="message" rows="4" required></textarea><br><br>
      <button type="submit">Send Email</button>
    </form>
    
    </body>
    </html>  
    `);
});


const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: mail,
    pass: pass,
  },
});

app.post("/api/sendmail", async (req, res) => {

  console.log(req.body);

  const mailOptions = {
    from: mail, // Replace with your email address
    to: req.body.email, // Replace with the recipient's email address
    subject: req.body.subject, // Replace with your desired subject
    // text: req.body.text, // Plain text content
    // or
    html: `<html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Message</title>
            <style>
              /* Inline CSS */
              body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                margin: 0;
                padding: 20px;
              }
              .container {
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                padding: 20px;
                max-width: 600px;
                margin: 0 auto;
              }
              h1 {
                color: #333;
              }
              p {
                color: #666;
                line-height: 1.6;
              }
            </style>
            </head>
            <body>
              <div class="container">
                <h1>Email Message</h1>
                <p>Hello there!</p>
                <p>${req.body.message}</p>
                <p>Best regards,<br>Daddy</p>
              </div>
            </body>
            </html>`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.send(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Sent</title>
            </head>
            <body style="font-family: Arial, sans-serif; text-align: center;">
            <div style="background-color: #dff0d8; color: #3c763d; padding: 20px; border: 1px solid #d6e9c6; border-radius: 5px; margin: 20px auto; max-width: 400px;">
                <p>Email sent successfully</p>
            </div>
            </body>
            </html>
            `
        )

})


app.listen(8000, () => {
  console.log("server running");
})