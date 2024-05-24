import { prisma } from "database/prismaClient";

export class ListAllUserEventsUseCase {
  async execute({ id }: Omit<IDeleteEventRequest, "creator_id">) {
    const event = await prisma.user.findFirstOrThrow({
      where: {
        id,
      },
      include: {
        participating_events: {
          include: {
            event: true,
          },
        },
      },
    });

    return event.participating_events;
  }
}
