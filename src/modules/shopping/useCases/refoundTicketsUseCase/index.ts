import { prisma } from "database/prismaClient";

export class RefoundTicketsUseCase {
  async execute({ id, eventId, quantity }: IPurchaseTicketRequest) {
    const event = await prisma.userEvents.findFirstOrThrow({
      where: {
        event_id: eventId,
        AND: [
          {
            user_id: id,
          },
        ],
      },
    });

    if (event.ticket_quantity - quantity < 0) {
      throw new Error("you can't refund this quantity!");
    } else if (event.ticket_quantity - quantity === 0) {
      await prisma.userEvents.delete({
        where: {
          id: event.id,
        },
      });
      return { message: "You've refunded all your tickets!" };
    }
    const result = await prisma.userEvents.update({
      where: {
        id: event.id,
      },
      data: {
        ticket_quantity: event.ticket_quantity - quantity,
      },
    });

    return result;
  }
}
