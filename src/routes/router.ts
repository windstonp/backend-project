import { Router } from "express";
import { authRoutes } from "modules/auth/routes/authRoutes";

const router = Router();

router.use("/auth", authRoutes);

export { router };
