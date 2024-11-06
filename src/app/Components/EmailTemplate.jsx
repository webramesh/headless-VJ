// components/EmailTemplate.js

const EmailTemplate = ({ name, email, message }) => {
  return (
    <div>
      <h1>New Contact Form Submission</h1>
      <p>You received a new message from your contact form.</p>

      <h2>Sender Details:</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>

      <h2>Message:</h2>
      <p>{message}</p>

      <hr />
      <p>This email was sent from your website's contact form.</p>
    </div>
  );
};
export default EmailTemplate;
