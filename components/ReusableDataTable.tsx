import React from "react";
import { TableCell, TableRow } from "./ui/table";
import { DatasProps } from "@/types";
import { formatDate } from "@/utils/formatDate";

const ReusableDataTable = ({
  instance,
  category,
  data,
  createdAt,
  id,
  nama,
}: DatasProps) => {
  return (
    <TableRow key={id}>
      <TableCell className="font-medium">{instance.nama}</TableCell>
      <TableCell>{category.nama}</TableCell>
      <TableCell>
        <a href={data} target="_blank">
          {nama}
        </a>
      </TableCell>
      <TableCell className="text-right">{formatDate(createdAt)}</TableCell>
    </TableRow>
  );
};

export default ReusableDataTable;
