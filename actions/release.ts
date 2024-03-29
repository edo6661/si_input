"use server";

import { db } from "@/lib/db";
import { releaseSchema } from "@/lib/zod/release";
import { Data } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createRelease = async (data: z.infer<typeof releaseSchema>) => {
  try {
    await db.release.create({
      data: {
        ...data,
      },
    });
    revalidatePath("/admin/add-data");
  } catch (err) {
    console.error(err);
  }
};

export const deleteReleaseWithId = async (id: string) => {
  try {
    await db.release.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin/data");
    revalidatePath("/admin/release");
  } catch (err) {
    console.error(err);
  }
};
