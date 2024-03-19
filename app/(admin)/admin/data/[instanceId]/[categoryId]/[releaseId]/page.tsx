import ReusableDataTable from "@/components/ReusableDataTable";
import ReusableTable from "@/components/ReusableTable";
import { getAllDataByInstanceIdAndUserIdAndCategoryIdAndReleaseId } from "@/services/data";
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
  const user = await getCurrentUser();
  const data = await getAllDataByInstanceIdAndUserIdAndCategoryIdAndReleaseId(
    params.instanceId,
    user?.id!,
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
