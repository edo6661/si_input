import { Heading } from "@/components/ui/heading";
import React from "react";
import ReusableAdminTable from "../../_components/ReusableAdminTable";
import { getAllCategory } from "@/services/category";
import { deleteCategoryWithId } from "@/actions/category";

const CategoryPage = async () => {
  const allCategory = await getAllCategory();
  console.log(allCategory)
  return (
    <section className="p-avoid-nav">
      <Heading>Category</Heading>
      <ReusableAdminTable
        actions={deleteCategoryWithId}
        allData={allCategory!}
      />
    </section>
  );
};

export default CategoryPage;
