import HeaderUser from "@/components/user/HeaderUser";
import { ChildrenType } from "@/types";
import React from "react";

const UserLayout = ({ children }: ChildrenType) => {
  return (
    <main>
      <HeaderUser />
      {children}
    </main>
  );
};

export default UserLayout;
