import { hash } from "bcrypt";
import { prisma } from "database/prismaClient";
import { transporter } from "driver/email";
import { decode, verify } from "jsonwebtoken";

export class RecoverPasswordUseCase {
  async execute({ token, password }: IRecoverPasswordRequest) {
    const { sub } = verify(token, process.env.AUTH_HASH_SECRET!) as IPayload;

    const user = await prisma.user.findFirst({
      where: {
        id: Number(sub),
      },
    });

    if (user === null) {
      throw new Error("User not found!");
    }

    const encryptedPassword = await hash(password, 10);

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        email: user.email,
        password: encryptedPassword,
      },
    });

    transporter.sendMail({
      from: process.env.SMTP_EMAIL_USER,
      to: sub,
      subject: "Your password was recovered!",
      text: `Your password was recovered`,
    });
  }
}
