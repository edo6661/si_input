"use server";

import { db } from "@/lib/db";

export const login = async (email: string, password: string) => {
  try {
    const user = await db.user.findFirst({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    return user;
  } catch (err) {
    console.error(err);
  }
};
