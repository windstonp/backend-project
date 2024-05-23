import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "database/prismaClient";

export class AuthenticateUserUseCase {
  async execute({ password, email }: IAuthRequest) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    const passwordMatch = await compare(password, user ? user.password : "");

    if (user === null || !passwordMatch) {
      throw new Error("email or password invalid!");
    }

    const token = sign({ email }, process.env.AUTH_HASH_SECRET!, {
      subject: String(user.id),
      expiresIn: "1d",
    });

    return token;
  }
}
