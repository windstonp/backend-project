import nodeMailer from "nodemailer";

export const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL_USER,
    pass: process.env.SMTP_EMAIL_PASSWORD,
  },
});
