import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import {
  deleteBook,
  getBooks,
  postBook,
} from "../controllers/books.controller";
import { bookCreateSchema } from "../schemas/book.schema";
import { verifyBookIdExists } from "../middlewares/verifyBookId.middleware";

export const booksRouter: Router = Router();

booksRouter.post("", verifyToken, validateBody(bookCreateSchema), postBook);

booksRouter.get("", getBooks);

booksRouter.delete("/:id", verifyToken, verifyBookIdExists, deleteBook);
