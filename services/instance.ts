import { db } from "@/lib/db";
import { getCurrentUser } from "./user";

export const getAllInstance = async () => {
  try {
    return db.instance.findMany();
  } catch (err) {
    console.error(err);
  }
};
export const getUserInstances = async () => {
  try {
    const currentUser = await getCurrentUser();
    return db.data.findMany({
      where: {
        userId: currentUser?.id!,
      },
      select: {
        instance: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
