import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { getBooks, postBook } from "../controllers/books.controller";

export const booksRouter: Router = Router();

booksRouter.post("", verifyToken, /* validateBody(add schema), */ postBook);

booksRouter.get("/book/:id", verifyToken, getBooks);
