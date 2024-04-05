import CustomBreadCrumb from "@/components/CustomBreadCrumb";
import Pagination from "@/components/Pagination";
import ReusableDataTable from "@/components/ReusableDataTable";
import ReusableTable from "@/components/ReusableTable";
import { Heading } from "@/components/ui/heading";
import {
  getAllDataByInstanceIdAndUserId,
  getAllDataByInstanceIdAndUserIdAndCategoryId,
  getAllDataByInstanceIdAndUserIdAndCategoryIdWithPaginationSearch,
} from "@/services/data";
import { getInstanceById } from "@/services/instance";
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

  const user = await getCurrentUser();
  const data = await getAllDataByInstanceIdAndUserIdAndCategoryIdWithPaginationSearch(
    params.instanceId,
    user?.id!,
    params.categoryId,
    currentPage,
    limit,
    query

  );
  const instance = await getInstanceById(user?.instanceId!);
  return (
    <section className="p-avoid-nav flex flex-col gap-2 items-center">
      <Heading>
        {instance?.nama}
      </Heading>
      <ReusableTable allData={data!.data} />
      <Pagination totalPages={data?.totalPages!} />

    </section>
  );
};

export default SpesificCategoryPage;
