import { z } from "zod";

export const releaseSchema = z.object({
  nama: z.string(),
});
