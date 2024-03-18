import { db } from "@/lib/db";

export const getAllData = () => {
  try {
    return db.data.findMany({
      include: {
        createdBy: true,
        instance: true,
        category: true,
        release: true,
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
        release: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
export const getAllDataByInstanceIdAndUserId = (
  instanceId: string,
  userId: string
) => {
  try {
    return db.data.findMany({
      where: {
        instanceId,
        userId,
      },
      include: {
        createdBy: true,
        instance: true,
        category: true,
        release: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const getAllDataByInstanceIdAndUserIdAndCategoryId = (
  instanceId: string,
  userId: string,
  categoryId: string
) => {
  try {
    return db.data.findMany({
      where: {
        instanceId,
        userId,
        categoryId,
      },
      include: {
        createdBy: true,
        instance: true,
        category: true,
        release: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
export const getAllDataByInstanceIdAndUserIdAndCategoryIdAndReleaseId = (
  instanceId: string,
  userId: string,
  categoryId: string,
  releaseId: string
) => {
  try {
    return db.data.findMany({
      where: {
        instanceId,
        userId,
        categoryId,
        releaseId,
      },
      include: {
        createdBy: true,
        instance: true,
        category: true,
        release: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
