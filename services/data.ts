import { db } from "@/lib/db";

export const getAllData = () => {
  try {
    return db.data.findMany({});
  } catch (err) {
    console.error(err);
  }
};
