interface ICreateEventRequest {
  date: Date;
  description: string;
  location: string;
  ticket_value: number;
  title: string;
  creator_id: number;
}

interface IDeleteEventRequest {
  id: number;
  creator_id: number;
}

interface IUpdateEventRequest extends ICreateEventRequest {
  id: number;
}

interface IEmailEventUpdateMessage {
  name: string;
  location: string;
  title: string;
  date: Date;
  ticket_value: number;
  oldDate: Date;
}

interface IEmailRemindMessage {
  eventName: string;
  name: string;
  date: Date;
}
