import { Heading } from "@/components/ui/heading";
import React from "react";
import ReusableAdminTable from "../../_components/ReusableAdminTable";
import { getAllCategory } from "@/services/category";
import { deleteCategoryWithId } from "@/actions/category";
import { getAllInstance } from "@/services/instance";
import { deleteInstanceWithId } from "@/actions/instance";
import { getAllRelease } from "@/services/release";
import { deleteReleaseWithId } from "@/actions/release";

const ReleasePage = async () => {
  const allCategory = await getAllRelease();
  return (
    <section className="p-avoid-nav">
      <Heading>ReleasePage</Heading>
      <ReusableAdminTable
        actions={deleteReleaseWithId}
        allData={allCategory!}
      />
    </section>
  );
};

export default ReleasePage;
