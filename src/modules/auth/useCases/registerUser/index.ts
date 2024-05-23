import { sign } from "jsonwebtoken";
import { prisma } from "database/prismaClient";
import { hash } from "bcrypt";

export class RegisterUserUseCase {
  async execute({ password, email }: IAuthRequest) {
    let user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (user !== null) {
      throw new Error("User is already registered!");
    }

    const encryptedPassword = await hash(password, 10);

    user = await prisma.user.create({
      data: {
        password: encryptedPassword,
        email,
      },
    });

    const token = sign({ email }, process.env.AUTH_HASH_SECRET!, {
      subject: String(user.id),
      expiresIn: "1d",
    });

    return token;
  }
}
