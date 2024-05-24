import { prisma } from "database/prismaClient";
import { transporter } from "driver/email";
import { sendEventUpdatedMessage } from "modules/events/utils/email";

export class UpdateEventUseCase {
  async execute({
    id,
    creator_id,
    date,
    description,
    location,
    ticket_value,
    title,
  }: IUpdateEventRequest) {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id: creator_id,
      },
    });

    const oldEvent = await prisma.event.findFirstOrThrow({
      where: {
        id,
      },
    });

    const oldDate = oldEvent.date;

    const event = await prisma.event.update({
      where: {
        id,
        AND: [
          {
            creator_id: user.id,
          },
        ],
      },
      data: {
        date,
        description,
        location,
        ticket_value,
        title,
      },
      include: {
        users_in_event: {
          include: {
            user: true,
          },
        },
      },
    });

    const infosToMessageEmail = {
      name: user.name,
      location: event.location,
      title: event.title,
      date: event.date,
      ticket_value: event.ticket_value,
      oldDate,
    };
    event.users_in_event.map((item) => {
      transporter.sendMail({
        from: process.env.SMTP_EMAIL_USER,
        to: item.user.email,
        subject: "Your upcoming event have been updated!",
        html: sendEventUpdatedMessage(infosToMessageEmail),
      });
    });
    return event;
  }
}
