import SidebarUser from "@/components/user/SidebarUser";
import { getAllInstance } from "@/services/instance";
import { ChildrenType } from "@/types";
import React from "react";

const LayoutData = async ({ children }: ChildrenType) => {
  return (
    <>
      <div>
        <SidebarUser />
        {children}
      </div>
    </>
  );
};

export default LayoutData;
