import { prisma } from "database/prismaClient";

export class GetUserInfoUseCase {
  async execute({ id }: IGetUserInfoRequest) {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id,
      },
      include: {
        created_events: true,
        participating_events: {
          include: {
            event: true,
          },
        },
      },
    });

    return user;
  }
}
