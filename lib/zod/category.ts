import { z } from "zod";

export const categorySchema = z.object({
  nama: z.string().min(2, {
    message: "Nama kategori minimal 2 karakter",
  }),
});
