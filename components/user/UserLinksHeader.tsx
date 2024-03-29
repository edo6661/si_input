"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const UserLinksHeader = () => {
  const pathname = usePathname();
  const linksHeader = ["Profile", "Visi-Misi"];

  return (
    <ul className="fl-ic gap-6 font-medium">
      {linksHeader.map((link) => (
        <li key={link}>
          <Link
            href={link.toLowerCase()}
            className={cn("link-hover text-xl", {
              "active-link": pathname === `/${link.toLowerCase()}`,
            })}
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserLinksHeader;
