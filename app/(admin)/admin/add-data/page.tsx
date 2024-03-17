import React from "react";
import AddDataForm from "../../_components/AddDataForm";
import { currentUser } from "@clerk/nextjs";
import { getCurrentUser } from "@/services/user";
import { getAllCategory } from "@/services/category";
import { getAllInstance } from "@/services/instance";
import { getAllRelease } from "@/services/release";

const AddDataPage = async () => {
  const user = await getCurrentUser();
  const instances = await getAllInstance();
  const categories = await getAllCategory();
  const release = await getAllRelease();

  return (
    <AddDataForm
      userId={user?.id!}
      categories={categories!}
      instances={instances!}
      release={release!}
    />
  );
};

export default AddDataPage;
