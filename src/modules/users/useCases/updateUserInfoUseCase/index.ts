import { hash } from "bcrypt";
import { prisma } from "database/prismaClient";

export class UpdateUserInfoUseCase {
  async execute({
    id,
    name,
    number,
    password,
    profile_image,
  }: IUpdateUserRequestDto) {
    const encryptedPassword = await hash(password, 10);

    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        number,
        password: encryptedPassword,
        profile_image,
      },
    });

    return user;
  }
}
