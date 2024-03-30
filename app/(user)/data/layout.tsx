import SidebarUser from "@/components/user/SidebarUser";
import { getAllInstance, getUserInstances } from "@/services/instance";
import { getCurrentUser } from "@/services/user";
import { ChildrenType } from "@/types";
import { notFound } from "next/navigation";
import React from "react";

const LayoutData = async ({ children }: ChildrenType) => {
  const title = "User";
  const user = await getCurrentUser();
  const instances = await getAllInstance();

  if (user?.role === "ADMIN") return notFound();

  return (
    <>
      <div>
        <SidebarUser title={title} instances={instances!} />
        {children}
      </div>
    </>
  );
};

export default LayoutData;
