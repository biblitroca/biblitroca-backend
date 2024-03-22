import { NextFunction, Request, Response } from "express";
import { BookRepo } from "../interfaces/book.interfaces";
import { AppDataSource } from "../data-source";
import { Book } from "../entities";
import { AppError } from "../error";

export const verifyBookIdExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const bookId: number = +request.params.id;
  const repo: BookRepo = AppDataSource.getRepository(Book);
  const book: Book | null = await repo.findOneBy({ id: bookId });

  if (!book) {
    throw new AppError("Book not found", 404);
  }

  response.locals = { ...response.locals, book: book };

  return next();
};
