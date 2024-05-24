import { prisma } from "database/prismaClient";

export class ShowPurchasedTicketsUseCase {
  async execute({ id }: Omit<IPurchaseTicketRequest, "quantity" | "eventId">) {
    const eventsWitchTicketBought = await prisma.userEvents.findMany({
      where: {
        user_id: id,
      },
      include: {
        event: true,
      },
    });
    return eventsWitchTicketBought;
  }
}
