import HeaderUser from "@/components/user/HeaderUser";
import { cn } from "@/lib/utils";
import { getAllCategory } from "@/services/category";
import { getAllInstance } from "@/services/instance";
import { getCurrentUser } from "@/services/user";
import { ChildrenType } from "@/types";
import { poppins } from "@/utils/fonts";
import React from "react";

const UserLayout = async ({ children }: ChildrenType) => {
  const currentUser = await getCurrentUser();
  const categories = await getAllCategory();
  const instances = await getAllInstance();
  return (
    <>
      <HeaderUser role={currentUser?.role!} />

      <main className={cn("  ", poppins.className)}>{children}</main>
    </>
  );
};

export default UserLayout;
