"use client";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CustomHoverCard } from "../HoverCard";

const UserHeaderData = () => {
  const pathname = usePathname();

  const data = [
    {
      href: "/data",
      label: "Data",
    },
    {
      href: "/add-data",
      label: "Add Data",
    },
  ];

  return (
    <>
      <CustomHoverCard data={data} title="Data" />
      {/* <Button
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
      </Button> */}
    </>
  );
};

export default UserHeaderData;
