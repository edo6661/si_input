import { db } from "@/lib/db";

export const getAllInstance = async () => {
  try {
    return db.instance.findMany();
  } catch (err) {
    console.error(err);
  }
};
