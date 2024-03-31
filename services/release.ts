import { db } from "@/lib/db";

export const getAllRelease = async () => {
  try {
    return db.release.findMany({
      include: {
        data: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
