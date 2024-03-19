import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userCreateSchema, userUpdateSchema } from "../schemas/user.schema";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";
import {
  deleteUser,
  getUsers,
  patchUser,
  postUser,
} from "../controllers/users.controller";
import { verifyId } from "../middlewares/verifyId.middleware";

export const usersRouter: Router = Router();

usersRouter.post("", validateBody(userCreateSchema), verifyEmail, postUser);

usersRouter.get("", verifyToken, getUsers);

usersRouter.patch(
  "/:id",
  verifyId,
  verifyToken,
  validateBody(userUpdateSchema),
  patchUser
);

usersRouter.delete("/:id", verifyId, verifyToken, deleteUser);
