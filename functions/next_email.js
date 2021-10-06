require("dotenv").config();
const process = require("process");

const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_URL, CONTACT_EMAIL } =
  process.env;

const mailgun = require("mailgun-js")({
  apiKey: MAILGUN_API_KEY,
  domain: MAILGUN_DOMAIN,
  url: MAILGUN_URL,
});

module.exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
      headers: { Allow: "POST" },
    };
  }

  const data = JSON.parse(event.body);
  if (!data.name || !data.email || !data.details) {
    return { statusCode: 422, body: "Name, email, and message are required." };
  }

  var FormData = require("form-data");
  let formData = new FormData();
  formData = {
    from: data.email,
    to: CONTACT_EMAIL,
    "h:Reply-To": data.email,
    subject: `New message from ${data.name}`,
    text: `${data.details}`,
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
};
