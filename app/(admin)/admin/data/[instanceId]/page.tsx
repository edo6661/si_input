import ReusableDataTable from "@/components/ReusableDataTable";
import ReusableTable from "@/components/ReusableTable";
import { getAllDataByInstanceId, getAllDataByInstanceIdAndUserId } from "@/services/data";
import { getCurrentUser } from "@/services/user";
import React from "react";

interface InstancePageProps {
  params: {
    instanceId: string;
  };
}

const InstancePage = async ({ params }: InstancePageProps) => {
  const data = await getAllDataByInstanceId(
    params.instanceId,
  );


  return (
    <section className="p-avoid-aside">
      <ReusableTable allData={data!} />
    </section>
  );
};

export default InstancePage;
