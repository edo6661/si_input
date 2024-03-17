import { getAllData } from "@/services/data";
import React from "react";
import Datas from "../../_components/Datas";

const AdminDataPage = async () => {
  const allData = await getAllData();

  return (
    <div className="container">
      <div className="space-y-8">
        {allData?.map((data) => (
          <div key={data.id}>
            <h4 className="font-semibold text-2xl ">{data.nama}</h4>
            <a
              href={data.data}
              className=" font-medium text-muted-foreground hover:text-purple-500 transition-all duration-300"
              target="_blank"
            >
              Kesini untuk download datanya
            </a>
            <p className="text-cyan-500">{data.createdBy.username}</p>
            <p className="text-blue-500">{data.category.nama}</p>
            <p className="text-pink-500">{data.instance.nama}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDataPage;
