import Pagination from "@/components/Pagination";
import ReusableDataTable from "@/components/ReusableDataTable";
import ReusableTable from "@/components/ReusableTable";
import { getAllDataByInstanceId, getAllDataByInstanceIdAndUserId, getAllDataByInstanceIdWithPaginationSearch } from "@/services/data";
import { getCurrentUser } from "@/services/user";
import { SearchParamsType } from "@/types";
import React from "react";

interface InstancePageProps extends SearchParamsType {
  params: {
    instanceId: string;
  };
}

const InstancePage = async ({ params, searchParams }: InstancePageProps) => {
  const query = searchParams.query || '';
  const currentPage = searchParams.page || 1;
  const limit = searchParams.limit || 4;

  const data = await getAllDataByInstanceIdWithPaginationSearch(
    params.instanceId,
    currentPage,
    limit,
    query
  );


  return (
    <section className="p-avoid-aside">

      <ReusableTable allData={data?.data!} />
      <Pagination totalPages={data?.totalPages!} />

    </section>
  );
};

export default InstancePage;
