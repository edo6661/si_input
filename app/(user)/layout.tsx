import HeaderUser from "@/components/user/HeaderUser";
import { getCurrentUser } from "@/services/user";
import { ChildrenType } from "@/types";
import React from "react";

const UserLayout = async ({ children }: ChildrenType) => {
  const currentUser = await getCurrentUser();
  return (
    <main>
      <HeaderUser role={currentUser?.role!} />
      {children}
    </main>
  );
};

export default UserLayout;
