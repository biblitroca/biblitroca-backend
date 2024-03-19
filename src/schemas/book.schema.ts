import { z } from "zod";

export const bookSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(100),
  type: z.string().max(6),
  price: z.number().positive(),
});
