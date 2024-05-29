# Email Form with Node.js and Express

This project demonstrates a simple web application built using Node.js and Express to send emails using Nodemailer. It provides a basic HTML form where users can input an email address, subject, and message, which upon submission, sends an email using the provided credentials.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- Express
- Nodemailer
- dotenv

## Installation

1. Clone this repository to your local machine:

    ```
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```
    cd email-form-nodejs-express
    ```

3. Install dependencies using npm:

    ```
    npm install
    ```

4. Create a `.env` file in the root directory and provide your email credentials:

    ```
    MAIL_ID=your_email@example.com
    PASS=your_email_password
    ```

    Replace `your_email@example.com` with your email address and `your_email_password` with your email password.

## Usage

1. Start the server:

    ```
    npm start
    ```

2. Open a web browser and go to `http://localhost:8000/`.
3. Fill out the email form with the recipient's email address, subject, and message.
4. Click on the "Send Email" button.
5. Upon successful submission, you will receive a confirmation message, and the email will be sent to the recipient.

## Customization

- **Email Provider**: Currently, the application is configured to send emails using Outlook's SMTP server. You can modify the `host` and `port` properties in the Nodemailer transporter configuration to use a different email provider.
- **HTML Email Content**: The email content is formatted using HTML. You can customize the HTML template within the `html` property of the `mailOptions` object in the `/api/sendmail` route.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests for any improvements or additional features you'd like to see.

## License

This project is licensed under the [MIT License](LICENSE).
