import { prisma } from "database/prismaClient";
import { transporter } from "driver/email";
import { sendReminderMessage } from "modules/events/utils/email";

export class SendRemindForTheEvent {
  async execute({ id }: Omit<IDeleteEventRequest, "creator_id">) {
    const event = await prisma.event.findFirstOrThrow({
      where: {
        id: id,
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
      eventName: event.title,
      date: event.date,
    };

    event.users_in_event.map((item) => {
      transporter.sendMail({
        from: process.env.SMTP_EMAIL_USER,
        to: item.user.email,
        subject: `Reminder: ${infosToMessageEmail.eventName} is Approaching!`,
        html: sendReminderMessage({
          ...infosToMessageEmail,
          name: item.user.name,
        }),
      });
    });
    return {
      message: "you have successfully reminded the users!",
      users: event.users_in_event,
    };
  }
}
