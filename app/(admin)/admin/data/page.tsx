import { getAllData } from "@/services/data";
import React from "react";

const AdminDataPage = async () => {
  const allData = await getAllData();

  return (
    <div>
      AdminDataPage
      <div>{JSON.stringify(allData)}</div>
    </div>
  );
};

export default AdminDataPage;
