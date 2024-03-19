"use server";

import { db } from "@/lib/db";
import { dataSchema } from "@/lib/zod/data";
import { Data } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createData = async (data: z.infer<typeof dataSchema>) => {
  try {
    await db.data.create({
      data: {
        ...data,
      },
    });

    revalidatePath("/admin/data");
  } catch (err) {
    console.error(err);
  }
};
export const deleteDataWithId = async (id: string) => {
  try {
    const deletedData = await db.data.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin/data");
    revalidatePath("/data");
    return deletedData;
  } catch (err) {
    console.error(err);
  }
};
