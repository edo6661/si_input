"use server";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export const getCurrentUser = async () => {
  try {
    const self = await currentUser();
    if (!self) return;
    return db.user.findUnique({
      where: {
        externalUserId: self?.id,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
