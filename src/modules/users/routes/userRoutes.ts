import { Router } from "express";
import { UserController } from "../controllers/userController";
import { ensureIsAuthenticated } from "middlewares/ensureIsAuthenticated";

export const userRoutes = Router();

const userController = new UserController();
userRoutes.get("/:id", userController.GetUserInfoById);
userRoutes.put("/update", ensureIsAuthenticated, userController.UpdateUserInfo);
