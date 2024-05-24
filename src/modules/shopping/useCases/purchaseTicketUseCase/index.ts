import { prisma } from "database/prismaClient";
import { transporter } from "driver/email";
import { getMessageForTicketPurchase } from "modules/shopping/utils/emails";

export class PurchaseTicketUseCase {
  async execute({ eventId, id, quantity }: IPurchaseTicketRequest) {
    const event = await prisma.event.findFirstOrThrow({
      where: {
        id: eventId,
        AND: [
          {
            date: {
              gte: new Date(new Date().toISOString().slice(0, 10)),
            },
          },
        ],
      },
    });
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id,
      },
    });

    let userEvent = await prisma.userEvents.findFirst({
      where: {
        user_id: user.id,
        event_id: event.id,
      },
    });

    if (!userEvent) {
      userEvent = await prisma.userEvents.create({
        data: {
          event_id: event.id,
          user_id: user.id,
          ticket_quantity: quantity,
        },
        include: {
          event: true,
          user: true,
        },
      });
    } else {
      userEvent = await prisma.userEvents.update({
        data: {
          ticket_quantity: userEvent.ticket_quantity + quantity,
        },
        where: {
          id: userEvent.id,
        },
      });
    }

    const infosToMessageEmail = {
      name: user.name,
      location: event.location,
      title: event.title,
      date: event.date,
      ticket_value: event.ticket_value,
      quantity,
      ticketTotal: userEvent.ticket_quantity,
    };
    transporter.sendMail({
      from: process.env.SMTP_EMAIL_USER,
      to: user.email,
      subject: `Ticket Purchase Confirmation for ${event.title}!`,
      html: getMessageForTicketPurchase(infosToMessageEmail),
    });

    return userEvent;
  }
}
