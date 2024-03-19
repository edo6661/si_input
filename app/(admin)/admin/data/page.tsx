import ReusableTable from "@/components/ReusableTable";
import { getAllData, getAllDataByUserId } from "@/services/data";
import { getCurrentUser } from "@/services/user";

const UserDataPage = async () => {
  const data = await getAllData();
  return (
    <section className="p-avoid-aside flex flex-col gap-2">
      <ReusableTable allData={data!} />
    </section>
  );
};

export default UserDataPage;
