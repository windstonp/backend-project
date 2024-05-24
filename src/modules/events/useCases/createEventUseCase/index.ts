import { prisma } from "database/prismaClient";

export class CreateEventUseCase {
  async execute({
    date,
    description,
    location,
    ticket_value,
    title,
    creator_id,
  }: ICreateEventRequest) {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id: creator_id,
      },
    });

    const event = await prisma.event.create({
      data: {
        creator_id: user.id,
        date,
        description,
        location,
        ticket_value,
        title,
      },
    });

    return event;
  }
}
