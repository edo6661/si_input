import AdminLinks from "@/components/AdminLinks";
import HeaderUser from "@/components/user/HeaderUser";
import { getCurrentUser } from "@/services/user";
import { ChildrenType } from "@/types";
import React from "react";
import HeaderAdmin from "../_components/HeaderAdmin";

const AdminLayout = async ({ children }: ChildrenType) => {
  const currentUser = await getCurrentUser();
  return (
    <main>
      <HeaderAdmin role={currentUser?.role!} />
      {children}
    </main>
  );
};

export default AdminLayout;
