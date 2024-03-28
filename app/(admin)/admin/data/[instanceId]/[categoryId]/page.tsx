import CustomBreadCrumb from "@/components/CustomBreadCrumb";
import ReusableDataTable from "@/components/ReusableDataTable";
import ReusableTable from "@/components/ReusableTable";
import {
  getAllDataByInstanceIdAndCategoryId,
  getAllDataByInstanceIdAndUserId,
  getAllDataByInstanceIdAndUserIdAndCategoryId,
} from "@/services/data";
import { getCurrentUser } from "@/services/user";
import React from "react";

interface SpesificCategoryPageProps {
  params: {
    categoryId: string;
    instanceId: string;
  };
}

const SpesificCategoryPage = async ({ params }: SpesificCategoryPageProps) => {
  const data = await getAllDataByInstanceIdAndCategoryId(
    params.instanceId,
    params.categoryId
  );

  return (
    <section className="p-avoid-aside">
      <ReusableTable allData={data!} />
    </section>
  );
};

export default SpesificCategoryPage;
