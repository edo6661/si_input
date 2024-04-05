import CustomBreadCrumb from "@/components/CustomBreadCrumb";
import Pagination from "@/components/Pagination";
import ReusableDataTable from "@/components/ReusableDataTable";
import ReusableTable from "@/components/ReusableTable";
import {
  getALlDataByInstanceIdAndCategoryIdWithPaginationSearch,
  getAllDataByInstanceIdAndCategoryId,
  getAllDataByInstanceIdAndUserId,
  getAllDataByInstanceIdAndUserIdAndCategoryId,
} from "@/services/data";
import { getCurrentUser } from "@/services/user";
import { SearchParamsType } from "@/types";
import React from "react";

interface SpesificCategoryPageProps extends SearchParamsType {
  params: {
    categoryId: string;
    instanceId: string;
  };
}

const SpesificCategoryPage = async ({ params, searchParams }: SpesificCategoryPageProps) => {
  const query = searchParams.query || '';
  const currentPage = searchParams.page || 1;
  const limit = searchParams.limit || 4;

  const data = await getALlDataByInstanceIdAndCategoryIdWithPaginationSearch(
    params.instanceId,
    params.categoryId,
    currentPage,
    limit,
    query
  );

  return (
    <section className="p-avoid-aside">
      <ReusableTable allData={data!.data} />
      <Pagination totalPages={data?.totalPages!} />

    </section>
  );
};

export default SpesificCategoryPage;
