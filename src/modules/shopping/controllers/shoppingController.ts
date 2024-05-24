import { Request, Response } from "express";
import {
  PurchaseTicketUseCase,
  RefoundTicketsUseCase,
  ShowPurchasedTicketsUseCase,
} from "../useCases";
import { getUserIdFromRequest } from "modules/utils";

export class ShoppingController {
  async PurchaseTicketForEvent(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;
    const { quantity } = request.body;
    const eventId = Number(id);
    if (!eventId) {
      return response.status(400).json({
        message: "Event not found!",
      });
    }
    const loggedUserId = getUserIdFromRequest(request);

    const purchaseTicketUseCase = new PurchaseTicketUseCase();

    const result = await purchaseTicketUseCase.execute({
      eventId,
      id: loggedUserId,
      quantity,
    });

    return response.status(200).json(result);
  }

  async ShowPurchasedTickets(
    request: Request,
    response: Response
  ): Promise<Response> {
    const loggedUserId = getUserIdFromRequest(request);

    const showPurchasedTicketsUseCase = new ShowPurchasedTicketsUseCase();

    const result = await showPurchasedTicketsUseCase.execute({
      id: loggedUserId,
    });

    return response.status(200).json(result);
  }

  async RefundTickets(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const eventId = Number(id);
    const { quantity } = request.body;
    const loggedUserId = getUserIdFromRequest(request);

    const refoundTicketUseCase = new RefoundTicketsUseCase();

    const result = await refoundTicketUseCase.execute({
      id: loggedUserId,
      eventId,
      quantity,
    });

    return response.status(200).json(result);
  }
}
