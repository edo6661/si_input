import { db } from "@/lib/db";

export const getAllRelease = async () => {
  try {
    return db.release.findMany();
  } catch (err) {
    console.error(err);
  }
};
