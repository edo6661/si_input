import { getAllData } from "@/services/data";
import React from "react";

const AdminDataPage = async () => {
  const allData = await getAllData();

  return (
    <div>
      AdminDataPage
      {allData?.map((data) => (
        <p key={data.data}>{data.data}</p>
      ))}
    </div>
  );
};

export default AdminDataPage;
