"use server";
import { formSchema } from "@/app/(user)/auth/register/page";
import { db } from "@/lib/db";
import { User } from "@prisma/client";
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
