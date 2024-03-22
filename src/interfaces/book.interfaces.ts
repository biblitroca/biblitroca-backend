import { z } from "zod";
import { Repository } from "typeorm";
import { Book } from "../entities";
import {
  bookCreateSchema,
  bookReadSchema,
  bookSchema,
} from "../schemas/book.schema";

export type IBook = z.infer<typeof bookSchema>;
export type BookCreate = z.infer<typeof bookCreateSchema>;
export type BookRead = z.infer<typeof bookReadSchema>;
export type BookRepo = Repository<Book>;
