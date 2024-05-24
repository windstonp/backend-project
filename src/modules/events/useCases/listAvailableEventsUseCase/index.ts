import { prisma } from "database/prismaClient";

export class ListAvailableEventsUseCase {
  async execute() {
    const event = await prisma.event.findMany({
      where: {
        date: {
          gte: new Date(new Date().toISOString().slice(0, 10)),
        },
      },
      include: {
        users_in_event: {
          include: {
            user: true,
          },
        },
      },
    });

    return event;
  }
}
