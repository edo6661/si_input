"use client";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const UserHeaderData = () => {
  const pathname = usePathname();
  const activeData = pathname === "/data";
  const activeAddData = pathname === "/add-data";
  return (
    <>
      <Button
        asChild
        variant="link"
        className={cn("", {
          "active-link": activeData,
        })}
      >
        <Link href="/data">Data</Link>
      </Button>
      <Button
        asChild
        variant="link"
        className={cn("", {
          "active-link": activeAddData,
        })}
      >
        <Link href="/add-data">Add Data</Link>
      </Button>
    </>
  );
};

export default UserHeaderData;
