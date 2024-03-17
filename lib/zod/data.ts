import { z } from "zod";

export const dataSchema = z.object({
  userId: z.string(),
  data: z.string(),
  instanceId: z.string(),
  categoryId: z.string(),
  adminId: z.string().optional(),
  nama: z.string(),
  releaseId: z.string(),
});
