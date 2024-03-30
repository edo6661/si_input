import { z } from "zod";

export const instanceSchema = z.object({
  nama: z.string().min(2, {
    message: "Nama instance minimal 2 karakter",
  }),
});
