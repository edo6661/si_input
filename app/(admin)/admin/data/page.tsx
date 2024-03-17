import Datas from "@/components/Datas";
import { getAllData } from "@/services/data";
import React from "react";

const AdminDataPage = async () => {
  const allData = await getAllData();

  return (
    <div className="container">
      <div className="space-y-8">
        {allData?.map((data) => (
          <Datas {...data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default AdminDataPage;
