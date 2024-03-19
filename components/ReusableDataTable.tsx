"use client";
import { TableCell, TableRow } from "./ui/table";
import { DatasProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import AdminDataTable from "./admin/AdminDataTable";

const ReusableDataTable = ({
  instance,
  category,
  data,
  id,
  release,
  nama,
  createdBy,
}: DatasProps) => {
  const pathname = usePathname();
  const adminPath = pathname.includes("admin");
  const basePath = adminPath ? `/admin/data/` : `/data/`;
  return (
    <TableRow key={id} className="text-center">
      <TableCell className="font-medium">
        <Link className="link-hover" href={`${basePath}${instance.id}`}>
          {instance.nama}
        </Link>
      </TableCell>
      <TableCell>
        <Link
          className="link-hover"
          href={`${basePath}${instance.id}/${category.id}`}
        >
          {category.nama}
        </Link>
      </TableCell>
      <TableCell>
        <a href={data} target="_blank">
          {nama}
        </a>
      </TableCell>
      <TableCell>
        <Link
          className="link-hover"
          href={`${basePath}${instance.id}/${category.id}/${release.id}`}
        >
          {release.nama}
        </Link>
      </TableCell>
      {adminPath && <AdminDataTable createdBy={createdBy} id={id} />}
    </TableRow>
  );
};

export default ReusableDataTable;
