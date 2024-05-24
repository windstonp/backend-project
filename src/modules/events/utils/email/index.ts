export function sendEventUpdatedMessage({
  name,
  location,
  title,
  date,
  ticket_value,
  oldDate,
}: IEmailEventUpdateMessage) {
  return `

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Update: Important Changes to ${title}</title>
</head>
<body>
  <p>Dear ${name},</p>

  <p>I hope this email finds you well.</p>

  <p>I am writing to inform you of some updates regarding <strong>${title}</strong>, scheduled to take place on <strong>${new Date(
    oldDate
  ).toLocaleDateString()}</strong>. Our team has recently made some changes to the event information to ensure a seamless and enjoyable experience for all attendees.</p>

  <p>Here are the key updates:</p>

  <ul>
    <li><strong>Event Name:</strong> ${title}</li>
    <li><strong>Date:</strong> ${date.toLocaleDateString()}</li>
    <li><strong>Location:</strong> ${location}</li>
    <li><strong>Ticket Price:</strong> USD$ ${ticket_value.toFixed(2)}</li>
  </ul>

  <p>We understand that these changes may affect your plans, and we apologize for any inconvenience they may cause. However, we believe that these updates will ultimately enhance the overall experience of the event.</p>

  <p>Please take a moment to review the revised event details.</p>

  <p>Thank you for your understanding and cooperation. We look forward to welcoming you to <strong>${title}</strong> and making it a memorable occasion for everyone involved.</p>
</body>
</html>

`;
}

export function sendReminderMessage({
  eventName,
  name,
  date,
}: IEmailRemindMessage) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reminder: ${eventName} is Approaching!</title>
    </head>
    <body>
      <p>Dear ${name},</p>

      <p>Just a friendly reminder that <strong>${eventName}</strong> is coming up on <strong>${date.toLocaleDateString()}</strong>. We are excited to have you join us for what promises to be a fantastic event.</p>

      <p>Please ensure you have reviewed all the event details and updates.</p>

      <p>We look forward to seeing you there!</p>
    </body>
  </html>
`;
}
