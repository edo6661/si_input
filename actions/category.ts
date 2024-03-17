"use server";

import { db } from "@/lib/db";
import { categorySchema } from "@/lib/zod/category";
import { dataSchema } from "@/lib/zod/data";
import { Data } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createCategory = async (data: z.infer<typeof categorySchema>) => {
  try {
    await db.category.create({
      data: {
        ...data,
      },
    });
    revalidatePath("/admin/add-data");
  } catch (err) {
    console.error(err);
  }
};
