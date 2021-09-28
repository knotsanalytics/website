// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
require("dotenv").config();
const handler = async (event) => {
  const {
    MAILGUN_API_KEY,
    MAILGUN_DOMAIN,
    MAILGUN_URL,
    CONTACT_TO_EMAIL_ADDRESS,
  } = process.env;

  const mailgun = require("mailgun-js")({
    apiKey: MAILGUN_API_KEY,
    domain: MAILGUN_DOMAIN,
    url: MAILGUN_URL,
  });

  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: "Method Not Allowed",
        headers: { Allow: "POST" },
      };
    }

    const data = JSON.parse(event.body);
    if (!data.contactName || !data.contactEmail || !data.contactMessage) {
      return {
        statusCode: 422,
        body: "Name, email, and message are required.",
      };
    }

    var FormData = require("form-data");
    let formData = new FormData();
    formData = {
      from: data.contactEmail,
      to: CONTACT_TO_EMAIL_ADDRESS,
      "h:Reply-To": data.contactEmail,
      subject: `New message from ${data.contactName}`,
      text: `${data.contactMessage}`,
    };

    return mailgun
      .messages()
      .send(formData)
      .then(() => ({
        statusCode: 200,
        body: "Your message was sent successfully! We'll be in touch.",
      }))
      .catch((error) => ({
        statusCode: 422,
        body: `${error}`,
      }));
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
