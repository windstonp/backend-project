import { Router } from "express";
import { authRoutes } from "modules/auth/routes/authRoutes";
import { eventRoutes } from "modules/events/routes/eventsRoutes";
import { shoppingRoutes } from "modules/shopping/routes/shoppingRoutes";
import { userRoutes } from "modules/users/routes/userRoutes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/event", eventRoutes);
router.use("/shopping", shoppingRoutes);

export { router };
