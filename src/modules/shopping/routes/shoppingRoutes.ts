import { Router } from "express";
import { ShoppingController } from "../controllers/shoppingController";
import { ensureIsAuthenticated } from "middlewares/ensureIsAuthenticated";

export const shoppingRoutes = Router();

const shoppingController = new ShoppingController();

shoppingRoutes.post(
  "/buy-ticket/:id",
  ensureIsAuthenticated,
  shoppingController.PurchaseTicketForEvent
);

shoppingRoutes.get(
  "/show-tickets",
  ensureIsAuthenticated,
  shoppingController.ShowPurchasedTickets
);
shoppingRoutes.delete(
  "/refund-ticket/:id",
  ensureIsAuthenticated,
  shoppingController.RefundTickets
);
