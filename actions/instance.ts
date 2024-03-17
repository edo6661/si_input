"use server";

import { db } from "@/lib/db";
import { categorySchema } from "@/lib/zod/category";
import { dataSchema } from "@/lib/zod/data";
import { instanceSchema } from "@/lib/zod/instance";
import { Data } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createInstance = async (data: z.infer<typeof instanceSchema>) => {
  try {
    await db.instance.create({
      data: {
        ...data,
      },
    });
    revalidatePath("/admin/add-data");
  } catch (err) {
    console.error(err);
  }
};
