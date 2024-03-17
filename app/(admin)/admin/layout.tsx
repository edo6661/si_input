import AdminLinks from "@/components/AdminLinks";
import HeaderUser from "@/components/user/HeaderUser";
import { getCurrentUser } from "@/services/user";
import { ChildrenType } from "@/types";
import React from "react";
import HeaderAdmin from "../_components/HeaderAdmin";
import { getAllCategory } from "@/services/category";
import { getAllInstance } from "@/services/instance";
import { poppins } from "@/utils/fonts";

const AdminLayout = async ({ children }: ChildrenType) => {
  const currentUser = await getCurrentUser();
  const categories = await getAllCategory();
  const instances = await getAllInstance();
  return (
    <>
      <HeaderAdmin role={currentUser?.role!} />
      <main className={poppins.className}>{children}</main>
    </>
  );
};

export default AdminLayout;
