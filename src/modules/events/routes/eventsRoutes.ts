import { Router } from "express";
import { EventController } from "../controllers/eventController";
import { ensureIsAuthenticated } from "middlewares/ensureIsAuthenticated";

export const eventRoutes = Router();

const eventController = new EventController();

eventRoutes.post("/create", ensureIsAuthenticated, eventController.CreateEvent);
eventRoutes.get("/", eventController.ListEvents);
eventRoutes.get("/send-reminder/:id", eventController.SendReminderToUsers);
eventRoutes.get(
  "/list-user-events",
  ensureIsAuthenticated,
  eventController.ListUserEvents
);

eventRoutes.delete(
  "/delete/:id",
  ensureIsAuthenticated,
  eventController.DeleteEvent
);
eventRoutes.put(
  "/update/:id",
  ensureIsAuthenticated,
  eventController.UpdateEvent
);
