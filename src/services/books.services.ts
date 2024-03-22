import { BookRepo } from "./../interfaces/book.interfaces";
import { bookSchema } from "./../schemas/book.schema";
import { AppDataSource } from "../data-source";
import { Book } from "../entities";
import { BookCreate, IBook } from "../interfaces/book.interfaces";

export const create = async (payload: BookCreate): Promise<IBook> => {
  const repo: BookRepo = AppDataSource.getRepository(Book);
  const book: Book = repo.create(payload);
  await repo.save(book);

  return bookSchema.parse(book);
};

export const read = async (): Promise<Book[]> => {
  const repo: BookRepo = AppDataSource.getRepository(Book);
  const book: Book[] = await repo.find();

  return book;
};

export const destroy = async (book: Book): Promise<void> => {
  const repo: BookRepo = AppDataSource.getRepository(Book);
  await repo.remove(book);
};
