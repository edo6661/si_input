import { db } from "@/lib/db";

export const getAllCategory = async () => {
  try {
    return db.category.findMany();
  } catch (err) {
    console.error(err);
  }
};
