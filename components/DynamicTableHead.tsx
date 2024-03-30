"use client";
import React from "react";
import { TableHead } from "./ui/table";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const DynamicTableHead = () => {
  const pathname = usePathname();
  const adminPath = pathname.includes("admin");

  const rows = ["Instance", "Category", "Data", "Release", "Created At"];
  const adminRows = [...rows, "User", "Actions"];

  const dynamicRows = adminPath ? adminRows : rows;

  return dynamicRows.map((row, i) => {
    return (
      <TableHead key={i} className="text-center">
        {row}
      </TableHead>
    );
  });
};

export default DynamicTableHead;
