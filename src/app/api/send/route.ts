import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = "http://localhost:3000";

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationLink = `${domain}/verify-email?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify your email address",
    html: `
    <p>Verify your email address by clicking <a href="${confirmationLink}">this link</a></p>
    `,
  });
};
