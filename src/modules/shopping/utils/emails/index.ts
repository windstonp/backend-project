export function getMessageForTicketPurchase({
  name,
  location,
  title,
  date,
  ticket_value,
  quantity,
  ticketTotal,
}: IEmailMessageParams) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <h2 style="color: #333;">Ticket Purchase Confirmation for ${title}</h2>
    <p>Dear ${name},</p>
    <p>Thank you for purchasing your ticket(s) for ${title}! We're thrilled to have you join us for what promises to be an incredible experience. Below, you'll find the details of your purchase:</p>
    <h3>Event Details:</h3>
    <ul>
      <li><strong>Event Name:</strong> ${title}</li>
      <li><strong>Date:</strong> ${date.toLocaleDateString()}</li>
      <li><strong>Location:</strong> ${location}</li>
      <li><strong>You bought:</strong> ${quantity} tickets</li>
      <li><strong>Total Amount Paid:</strong> USD$ ${(
        (ticket_value / 100) *
        quantity
      ).toFixed(2)}</li>
      <li><strong>You have a total of:</strong>${ticketTotal} tickets</li>
    </ul>
  </div>
</body>
</html>`;
}
