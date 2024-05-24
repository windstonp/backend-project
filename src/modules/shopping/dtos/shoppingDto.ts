interface IPurchaseTicketRequest {
  id: number;
  eventId: number;
  quantity: number;
}

interface IEmailMessageParams {
  name: string;
  location: string;
  title: string;
  date: Date;
  ticket_value: number;
  quantity: number;
  ticketTotal: number;
}
