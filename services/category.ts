import { db } from "@/lib/db";

export const getAllCategory = async () => {
  try {
    return db.category.findMany({
      include: {
        data: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
