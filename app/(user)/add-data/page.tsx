import { getCurrentUser } from "@/services/user";
import { getAllCategory } from "@/services/category";
import { getAllInstance } from "@/services/instance";
import { getAllRelease } from "@/services/release";
import AddDataForm from "@/app/(admin)/_components/AddDataForm";
import { notFound } from "next/navigation";

const AddDataPage = async () => {
  const user = await getCurrentUser();
  const instances = await getAllInstance();
  const categories = await getAllCategory();
  const release = await getAllRelease();

  if (user?.role === "ADMIN") return notFound();

  return (
    <div className="p-avoid-nav">
      <AddDataForm
        userId={user?.id!}
        categories={categories!}
        instances={instances!}
        release={release!}
      />
    </div>
  );
};

export default AddDataPage;
