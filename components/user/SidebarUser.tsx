import React from "react";
import { Heading } from "../ui/heading";
import VerticalSeparator from "../VerticalSeparator";
import { getAllInstance } from "@/services/instance";
import Link from "next/link";
import Instances from "../Instances";
import DynamicSidebarTitle from "../DynamicSidebarTitle";
import { Instance } from "@prisma/client";
import { usePathname } from "next/navigation";
import { getCurrentUser } from "@/services/user";

interface SidebarUserProps {
  title: string;
  instances?: Instance[];
  dataInstance?: any[];
}

const SidebarUser = async ({
  title,
  instances,
  dataInstance,
}: SidebarUserProps) => {
  const user = await getCurrentUser();
  return (
    <div className="p-20">
      <aside className="fixed left-0 bg-second min-h-screen w-48">
        <div className="py-4 space-y-4">
          <DynamicSidebarTitle title={title} />
          <VerticalSeparator />
        </div>
        <div className="px-4 flex flex-col gap-4">
          {user?.role === "ADMIN" &&
            instances?.map((instance) => (
              <Instances {...instance} key={instance.id} />
            ))}
          {user?.role === "USER" &&
            dataInstance?.map(({ instance }) => (
              <Instances {...instance} key={instance.id} />
            ))}
        </div>
      </aside>
    </div>
  );
};

export default SidebarUser;
