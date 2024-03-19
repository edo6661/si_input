"use client";
import { cn } from "@/lib/utils";
import { Instance } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Instances = ({ nama, id }: Instance) => {
  const pathname = usePathname();

  const activeLink = pathname.includes(id);

  const adminPath = pathname.includes("admin");
  const basePath = adminPath ? `/admin/data/` : `/data/`;

  return (
    <Link
      href={`${basePath}${id}`}
      key={id}
      className={cn("link-hover font-medium truncate", {
        "active-link": activeLink,
      })}
    >
      {nama}
    </Link>
  );
};

export default Instances;
