"use server";

import { formUserSchema } from "@/app/(admin)/admin/users/_components/FormUsers";
import { formProfile } from "@/app/(user)/profile/_components/FormProfile";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/services/user";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const updateInstanceUser = async (data: z.infer<typeof formProfile>) => {
  try {
    const currentUser = await getCurrentUser();
    const newUser = await db.user.update({
      where: {
        id: currentUser?.id,
      },
      data: {
        instanceId: data.instanceId,
      },
    });
    revalidatePath("/profile");
    revalidatePath("/add-data");
    return newUser;
  } catch (err) {
    console.error(err);
  }
};
export const changeInstanceUser = async (
  data: z.infer<typeof formUserSchema>
) => {
  try {
    const newUser = await db.user.update({
      where: {
        id: data.userId,
      },
      data: {
        instanceId: data.instanceId,
      },
    });
    revalidatePath("/admin/users");
    return newUser;
  } catch (err) {
    console.error(err);
  }
};
