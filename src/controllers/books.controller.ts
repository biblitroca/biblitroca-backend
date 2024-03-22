import { Request, Response } from "express";
import { create, destroy, read } from "../services/books.services";
import { BookCreate, BookRead, IBook } from "../interfaces/book.interfaces";

export const postBook = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const book: BookCreate = response.locals.validated;
  const newBook: IBook = await create(book);

  return response.status(201).json(newBook);
};

export const getBooks = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const books: BookRead = await read();

  return response.status(200).json(books);
};

export const deleteBook = async (
  request: Request,
  response: Response
): Promise<Response> => {
  await destroy(response.locals.book);
  console.log(response.locals.book);
  return response.status(204).json();
};
