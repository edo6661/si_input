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
