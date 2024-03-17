import { z } from "zod";

export const categorySchema = z.object({
  nama: z.string(),
});
