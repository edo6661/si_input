import Pagination from "@/components/Pagination";
import ReusableDataTable from "@/components/ReusableDataTable";
import ReusableTable from "@/components/ReusableTable";
import {
  getAllDataByInstanceIdAndCategoryIdAndReleaseId,
  getAllDataByInstanceIdAndCategoryIdAndReleaseIdWithPaginationSearch,
  getAllDataByInstanceIdAndUserIdAndCategoryIdAndReleaseId,
} from "@/services/data";
import { getCurrentUser } from "@/services/user";
import { SearchParamsType } from "@/types";
import React from "react";

interface SpesificReleasePageProps extends SearchParamsType {
  params: {
    categoryId: string;
    instanceId: string;
    releaseId: string;
  };
}

const SpesificReleasePage = async ({ params, searchParams }: SpesificReleasePageProps) => {
  const query = searchParams.query || '';
  const currentPage = searchParams.page || 1;
  const limit = searchParams.limit || 4;

  const data = await getAllDataByInstanceIdAndCategoryIdAndReleaseIdWithPaginationSearch(
    params.instanceId,
    params.categoryId,
    params.releaseId,
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

export default SpesificReleasePage;
