import { prisma } from "database/prismaClient";
import { transporter } from "driver/email";
import { sign } from "jsonwebtoken";

export class ForgotPasswordUseCase {
  async execute({ email }: IForgotPasswordRequest) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (user === null) {
      throw new Error("User not found!");
    }

    const token = sign({ email }, process.env.AUTH_HASH_SECRET!, {
      subject: String(user.id),
      expiresIn: "1d",
    });

    transporter.sendMail({
      from: process.env.SMTP_EMAIL_USER,
      to: email,
      subject: "Reset password request",
      text: `you can recovery your account on this link: http://localhost:3030/recovery-email?token=${token}`,
    });
  }
}
