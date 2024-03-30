import { z } from "zod";

const required = "Harus diisi";

export const dataSchema = z.object({
  userId: z.string().min(2, {
    message: required,
  }),
  data: z.string().min(2, {
    message: required,
  }),
  instanceId: z.string().min(2, {
    message: required,
  }),
  categoryId: z.string().min(2, {
    message: required,
  }),
  adminId: z.string().optional(),
  nama: z.string().min(2, {
    message: "Nama harus lebih dari 2 karakter",
  }),
  releaseId: z.string().min(2, {
    message: required,
  }),
});
