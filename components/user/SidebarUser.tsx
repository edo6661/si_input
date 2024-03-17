import React from "react";
import { Heading } from "../ui/heading";
import VerticalSeparator from "../VerticalSeparator";
import { getAllInstance } from "@/services/instance";
import Link from "next/link";

const SidebarUser = async () => {
  const instances = await getAllInstance();

  return (
    <div className="p-avoid-nav  ">
      <aside className="fixed left-0 bg-second min-h-screen w-48">
        <div className="py-4 space-y-4">
          <Heading className="text-center text-2xl" size="md">
            User
          </Heading>
          <VerticalSeparator />
        </div>
        <div className="px-4 flex flex-col gap-4">
          {instances?.map((instance) => (
            <Link
              href={`/data/${encodeURI(instance.nama)}`}
              key={instance.id}
              className="link-hover font-medium truncate"
            >
              {instance.nama}
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default SidebarUser;
