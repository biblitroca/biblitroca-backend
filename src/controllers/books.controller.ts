import { Request, Response } from "express";
import { Book } from "../entities";
import { create, read } from "../services/books.services";

export const postBook = async (
  request: Request,
  response: Response
): Promise<Response> => {
  /* const book:  = response.locals.validated;
  const newBook:  = await create(book); */

  return response.status(201).json(/* newBook */);
};

export const getBooks = async (
  request: Request,
  response: Response
): Promise<Response> => {
  /* const book: Book[] = await read(); */

  return response.status(200).json(/* book */);
};
