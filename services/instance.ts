import { db } from "@/lib/db";
import { getCurrentUser } from "./user";

export const getAllInstance = async () => {
  try {
    return db.instance.findMany({
      include: {
        data: true,
      },
    });
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
export const getAllInstanceWithoutUser = async () => {
  try {
    return db.instance.findMany({
      where: {
        user: null,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
export const getInstanceById = async (id: string) => {
  try {
    return db.instance.findUnique({
      where: {
        id,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
