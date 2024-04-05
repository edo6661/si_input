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
export const getAllDataWithPaginationSearch = async (
  page: number,
  limit: number,
  query: string
) => {
  try {
    const data = await db.data.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        OR: [
          {
            nama: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            instance: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            category: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            release: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            createdBy: {
              username: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      include: {
        createdBy: true,
        instance: true,
        category: true,
        release: true,
      },
    });
    const totalData = await db.data.count({
      where: {
        OR: [
          {
            nama: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            instance: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            category: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            release: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(totalData / limit);
    return {
      data,
      totalPages,
    };
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
export const getAllDataByUserIdWithPaginationSearch = async (
  userId: string,
  page: number,
  limit: number,
  query: string
) => {
  try {
    const data = await db.data.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        userId: userId,
        OR: [
          {
            nama: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            instance: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            category: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            release: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            createdBy: {
              username: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      include: {
        createdBy: true,
        instance: true,
        category: true,
        release: true,
      },
    });
    const totalData = await db.data.count({
      where: {
        userId: userId,
        OR: [
          {
            instance: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            category: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            release: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(totalData / limit);
    return {
      data,
      totalPages,
    };
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

export const getAllDataByInstanceIdAndUserIdWithPaginationSearch = async (
  instanceId: string,
  userId: string,
  page: number,
  limit: number,
  query: string
) => {
  try {
    const data = await db.data.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        instanceId,
        userId,
        OR: [
          {
            nama: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            instance: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            category: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            release: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            createdBy: {
              username: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      include: {
        createdBy: true,
        instance: true,
        category: true,
        release: true,
      },
    });
    const totalData = await db.data.count({
      where: {
        instanceId,
        userId,
        OR: [
          {
            instance: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            category: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            release: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(totalData / limit);
    return {
      data,
      totalPages,
    };
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
export const getAllDataByInstanceIdAndUserIdAndCategoryIdWithPaginationSearch =
  async (
    instanceId: string,
    userId: string,
    categoryId: string,
    page: number,
    limit: number,
    query: string
  ) => {
    try {
      const data = await db.data.findMany({
        take: limit,
        skip: (page - 1) * limit,
        where: {
          instanceId,
          userId,
          categoryId,
          OR: [
            {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              instance: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              category: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              release: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              createdBy: {
                username: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
          ],
        },
        include: {
          createdBy: true,
          instance: true,
          category: true,
          release: true,
        },
      });
      const totalData = await db.data.count({
        where: {
          instanceId,
          userId,
          categoryId,
          OR: [
            {
              instance: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              category: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              release: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
          ],
        },
      });
      const totalPages = Math.ceil(totalData / limit);
      return {
        data,
        totalPages,
      };
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
export const getAllDataByInstanceIdAndUserIdAndCategoryIdAndReleaseIdWithPaginationSearch =
  async (
    instanceId: string,
    userId: string,
    categoryId: string,
    releaseId: string,
    page: number,
    limit: number,
    query: string
  ) => {
    try {
      const data = await db.data.findMany({
        take: limit,
        skip: (page - 1) * limit,
        where: {
          instanceId,
          userId,
          categoryId,
          releaseId,
          OR: [
            {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              instance: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              category: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              release: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              createdBy: {
                username: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
          ],
        },
        include: {
          createdBy: true,
          instance: true,
          category: true,
          release: true,
        },
      });
      const totalData = await db.data.count({
        where: {
          instanceId,
          userId,
          categoryId,
          releaseId,
          OR: [
            {
              instance: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              category: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              release: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
          ],
        },
      });
      const totalPages = Math.ceil(totalData / limit);
      return {
        data,
        totalPages,
      };
    } catch (err) {
      console.error(err);
    }
  };

// ! ADMIN
export const getAllDataByInstanceId = (instanceId: string) => {
  try {
    return db.data.findMany({
      where: {
        instanceId,
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
export const getAllDataByInstanceIdWithPaginationSearch = async (
  instanceId: string,
  page: number,
  limit: number,
  query: string
) => {
  try {
    const data = await db.data.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        instanceId,
        OR: [
          {
            nama: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            instance: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            category: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            release: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            createdBy: {
              username: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      include: {
        createdBy: true,
        instance: true,
        category: true,
        release: true,
      },
    });
    const totalData = await db.data.count({
      where: {
        instanceId,
        OR: [
          {
            instance: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            category: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            release: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(totalData / limit);
    return {
      data,
      totalPages,
    };
  } catch (err) {
    console.error(err);
  }
};

export const getAllDataByInstanceIdAndCategoryId = (
  instanceId: string,
  categoryId: string
) => {
  try {
    return db.data.findMany({
      where: {
        instanceId,
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

export const getALlDataByInstanceIdAndCategoryIdWithPaginationSearch = async (
  instanceId: string,
  categoryId: string,
  page: number,
  limit: number,
  query: string
) => {
  try {
    const data = await db.data.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        instanceId,
        categoryId,
        OR: [
          {
            nama: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            instance: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            category: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            release: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            createdBy: {
              username: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      include: {
        createdBy: true,
        instance: true,
        category: true,
        release: true,
      },
    });
    const totalData = await db.data.count({
      where: {
        instanceId,
        categoryId,
        OR: [
          {
            instance: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            category: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
          {
            release: {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(totalData / limit);
    return {
      data,
      totalPages,
    };
  } catch (err) {
    console.error(err);
  }
};

export const getAllDataByInstanceIdAndCategoryIdAndReleaseId = (
  instanceId: string,
  categoryId: string,
  releaseId: string
) => {
  try {
    return db.data.findMany({
      where: {
        instanceId,
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
export const getAllDataByInstanceIdAndCategoryIdAndReleaseIdWithPaginationSearch =
  async (
    instanceId: string,
    categoryId: string,
    releaseId: string,
    page: number,
    limit: number,
    query: string
  ) => {
    try {
      const data = await db.data.findMany({
        take: limit,
        skip: (page - 1) * limit,
        where: {
          instanceId,
          categoryId,
          releaseId,
          OR: [
            {
              nama: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
              instance: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              category: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              release: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              createdBy: {
                username: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
          ],
        },
        include: {
          createdBy: true,
          instance: true,
          category: true,
          release: true,
        },
      });
      const totalData = await db.data.count({
        where: {
          instanceId,
          categoryId,
          releaseId,
          OR: [
            {
              instance: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              category: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
            {
              release: {
                nama: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
          ],
        },
      });
      const totalPages = Math.ceil(totalData / limit);
      return {
        data,
        totalPages,
      };
    } catch (err) {
      console.error(err);
    }
  };
