import { z } from "zod";

export const instanceSchema = z.object({
  nama: z.string(),
});
