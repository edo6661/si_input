import { db } from "@/lib/db";

export const getAllData = () => {
  try {
    return db.data.findMany({
      include: {
        createdBy: true,
        instance: true,
        category: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
export const getAllDataByUserId = (userId: string) => {
  try {
    return db.data.findMany({
      where: {
        userId: userId,
      },
      include: {
        createdBy: true,
        instance: true,
        category: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
