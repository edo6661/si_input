import { DatasProps } from "@/types";
import React from "react";

const Data = ({ data, nama, createdBy, category, instance }: DatasProps) => {
  return (
    <>
      <h4 className="font-semibold text-2xl ">{nama}</h4>
      <a
        href={data}
        className=" font-medium text-muted-foreground hover:text-purple-500 transition-all duration-300"
        target="_blank"
      >
        Kesini untuk download datanya
      </a>
      <p className="text-cyan-500">{createdBy.username}</p>
      <p className="text-blue-500">{category.nama}</p>
      <p className="text-pink-500">{instance.nama}</p>
    </>
  );
};

export default Data;
