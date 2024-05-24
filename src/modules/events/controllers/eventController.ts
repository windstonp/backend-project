import { Request, Response } from "express";
import {
  CreateEventUseCase,
  DeleteEventUseCase,
  ListAllUserEventsUseCase,
  ListAvailableEventsUseCase,
  SendRemindForTheEvent,
  UpdateEventUseCase,
} from "../useCases";
import { getUserIdFromRequest } from "modules/utils";

export class EventController {
  async CreateEvent(request: Request, response: Response): Promise<Response> {
    const requestData: ICreateEventRequest = request.body;
    const loggedUserId = getUserIdFromRequest(request);

    const createEventUseCase = new CreateEventUseCase();

    const result = await createEventUseCase.execute({
      ...requestData,
      creator_id: loggedUserId,
    });

    return response.status(200).json(result);
  }

  async ListEvents(request: Request, response: Response): Promise<Response> {
    const listAvailableEventsUseCase = new ListAvailableEventsUseCase();

    const result = await listAvailableEventsUseCase.execute();

    return response.status(200).json(result);
  }

  async ListUserEvents(
    request: Request,
    response: Response
  ): Promise<Response> {
    const listAllUserEventsUseCase = new ListAllUserEventsUseCase();
    const loggedUserId = getUserIdFromRequest(request);

    const result = await listAllUserEventsUseCase.execute({ id: loggedUserId });

    return response.status(200).json(result);
  }

  async SendReminderToUsers(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const sendReminderToUsersUseCase = new SendRemindForTheEvent();

    const result = await sendReminderToUsersUseCase.execute({ id: Number(id) });

    return response.status(200).json(result);
  }

  async DeleteEvent(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const loggedUserId = getUserIdFromRequest(request);

    const deleteEventUseCase = new DeleteEventUseCase();

    if (!id) {
      return response.status(400).json({
        message: "Event not found!",
      });
    }

    await deleteEventUseCase.execute({
      id: Number(id),
      creator_id: loggedUserId,
    });

    return response.status(200).json({
      message: "Event Deleted successfully!",
    });
  }

  async UpdateEvent(request: Request, response: Response): Promise<Response> {
    const { id: idEvent } = request.params;
    const id = Number(idEvent);
    if (!id) {
      return response.status(400).json({
        message: "Event not found!",
      });
    }

    const requestData: IUpdateEventRequest = request.body;
    const loggedUserId = getUserIdFromRequest(request);

    const updateEventUseCase = new UpdateEventUseCase();

    const result = await updateEventUseCase.execute({
      ...requestData,
      creator_id: loggedUserId,
      id: Number(id),
    });

    return response.status(200).json(result);
  }
}
