import Pagination from "@/components/Pagination";
import ReusableTable from "@/components/ReusableTable";
import { Input } from "@/components/ui/input";
import { getAllData, getAllDataByUserId, getAllDataWithPaginationSearch } from "@/services/data";
import { getCurrentUser } from "@/services/user";
import { SearchParamsType } from "@/types";



const UserDataPage = async ({ searchParams }: SearchParamsType) => {
  const query = searchParams.query || '';
  const currentPage = searchParams.page || 1;
  const limit = searchParams.limit || 4;
  const data = await getAllDataWithPaginationSearch(currentPage, limit, query);
  return (
    <section className="p-avoid-aside flex flex-col gap-2">
      <ReusableTable allData={data?.data!} />
      <Pagination totalPages={data?.totalPages!} />
    </section>
  );
};

export default UserDataPage;
