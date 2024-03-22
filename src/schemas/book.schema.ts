import { z } from "zod";

export const bookSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(100),
  author: z.string().max(50),
  type: z.string().max(6),
  price: z.number().positive(),
});

export const bookCreateSchema = bookSchema.omit({ id: true });
export const bookReadSchema = bookSchema.array();
