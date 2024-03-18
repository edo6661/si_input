import { DatasProps } from "@/types";
import { Category, Data, Instance, User } from "@prisma/client";
import Link from "next/link";
import React from "react";

const Datas = ({
  nama,
  createdBy,
  category,
  instance,
  id,
  data,
}: DatasProps) => {
  return (
    <div key={id} className="grid grid-cols-3">
      <div className="fl-ic">
        <p>Instance:</p>
        <Link href={`/data/${id}`}>{instance.nama}</Link>
      </div>

      <div className="fl-ic">
        <p>Category:</p>
        {/* <Link href={`/data/${encodeURI(category.nama)}`}>{category.nama}</Link> */}
        <p rel="noreferrer">{category.nama}</p>
      </div>
      <div>
        {/* <Link href={`/data/${encodeURI(category.nama)}`}>{category.nama}</Link> */}
        {createdBy.username}
      </div>
    </div>
  );
};

export default Datas;
