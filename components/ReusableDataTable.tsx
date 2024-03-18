import React from "react";
import { TableCell, TableRow } from "./ui/table";
import { DatasProps } from "@/types";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";

const ReusableDataTable = ({
  instance,
  category,
  data,
  createdAt,
  id,
  release,
  nama,
}: DatasProps) => {
  return (
    <TableRow key={id}>
      <TableCell className="font-medium">
        <Link className="link-hover" href={`/data/${instance.id}`}>
          {instance.nama}
        </Link>
      </TableCell>
      <TableCell>
        <Link
          className="link-hover"
          href={`/data/${instance.id}/${category.id}`}
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
          href={`/data/${instance.id}/${category.id}/${release.id}`}
        >
          {release.nama}
        </Link>
      </TableCell>
      <TableCell className="text-right">{formatDate(createdAt)}</TableCell>
    </TableRow>
  );
};

export default ReusableDataTable;
