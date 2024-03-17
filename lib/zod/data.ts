import { z } from "zod";

export const dataSchema = z.object({
  userId: z.string(),
  data: z.string(),
});
