import { z } from "zod";

export const releaseSchema = z.object({
  nama: z.string().min(2, {
    message: "Nama release minimal 2 karakter",
  }),
});
