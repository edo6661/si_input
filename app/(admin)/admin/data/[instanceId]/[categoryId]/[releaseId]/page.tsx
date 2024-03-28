import ReusableDataTable from "@/components/ReusableDataTable";
import ReusableTable from "@/components/ReusableTable";
import { getAllDataByInstanceIdAndCategoryIdAndReleaseId, getAllDataByInstanceIdAndUserIdAndCategoryIdAndReleaseId } from "@/services/data";
import { getCurrentUser } from "@/services/user";
import React from "react";

interface SpesificReleasePageProps {
  params: {
    categoryId: string;
    instanceId: string;
    releaseId: string;
  };
}

const SpesificReleasePage = async ({ params }: SpesificReleasePageProps) => {
  const data = await getAllDataByInstanceIdAndCategoryIdAndReleaseId(
    params.instanceId,
    params.categoryId,
    params.releaseId
  );

  return (
    <section className="p-avoid-aside">
      <ReusableTable allData={data!} />
    </section>
  );
};

export default SpesificReleasePage;
