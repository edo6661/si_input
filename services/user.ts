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

export const getUserInstanceId = async () => {
  try {
    const self = await currentUser();
    const user = await db.user.findUnique({
      where: {
        externalUserId: self?.id,
      },
      include: {
        instance: true,
      },
    });
    return user;
  } catch (err) {
    console.error(err);
  }
};

export const getAllUsers = async () => {
  try {
    const currentUser = await getCurrentUser();
    return await db.user.findMany({
      include: {
        instance: true,
      },
      where: {
        NOT: {
          id: currentUser?.id,
        },
      },
    });
  } catch (err) {
    console.error(err);
  }
};
