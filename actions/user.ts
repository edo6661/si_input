"use server";
import { db } from "@/lib/db";
import { formSchema } from "@/lib/zod/user";
import { z } from "zod";

export const createUser = async (data: z.infer<typeof formSchema>) => {
  try {
    return await db.user.create({
      data: {
        ...data,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
