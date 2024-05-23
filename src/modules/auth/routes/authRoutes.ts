import { Router } from "express";
import { AuthController } from "../controllers/authController";

export const authRoutes = Router();

const authController = new AuthController();

authRoutes.post("/", authController.SignIn);
authRoutes.post("/register", authController.RegisterUser);
authRoutes.post("/forgot-password", authController.ForgotPassword);
authRoutes.post("/recover-password", authController.RecoverPassword);
