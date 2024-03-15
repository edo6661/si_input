import { db } from "@/lib/db";

export const getAllData = async () => {
  try {
    return await db.data.findMany();
  } catch (err) {
    console.error(err);
  }
};
