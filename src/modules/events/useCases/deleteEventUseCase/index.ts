import { prisma } from "database/prismaClient";

export class DeleteEventUseCase {
  async execute({ id, creator_id }: IDeleteEventRequest) {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id: creator_id,
      },
    });

    await prisma.event.findFirstOrThrow({
      where: {
        id,
      },
    });

    await prisma.event.findFirstOrThrow({
      where: {
        id,
        AND: [
          {
            creator_id: user.id,
          },
        ],
      },
    });

    await prisma.event.delete({
      where: {
        id,
        AND: [
          {
            creator_id: user.id,
          },
        ],
      },
    });
  }
}
