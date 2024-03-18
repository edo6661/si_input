import AdminLinks from "@/components/AdminLinks";
import HeaderUser from "@/components/user/HeaderUser";
import { getCurrentUser } from "@/services/user";
import { ChildrenType } from "@/types";
import React from "react";
import { getAllCategory } from "@/services/category";
import { getAllInstance } from "@/services/instance";
import { poppins } from "@/utils/fonts";
import { notFound } from "next/navigation";

const AdminLayout = async ({ children }: ChildrenType) => {
  const currentUser = await getCurrentUser();
  const categories = await getAllCategory();
  const instances = await getAllInstance();

  if (currentUser?.role === "USER") return notFound();

  return (
    <>
      <HeaderUser role={currentUser?.role!} />
      <main className={poppins.className}>{children}</main>
    </>
  );
};

export default AdminLayout;
