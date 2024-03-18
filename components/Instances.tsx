"use client";
import { cn } from "@/lib/utils";
import { Instance } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Instances = ({ nama, id }: Instance) => {
  const pathname = usePathname();

  const activeLink = pathname.includes(id);

  return (
    <Link
      href={`/data/${id}`}
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
