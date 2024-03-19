import { Heading } from "@/components/ui/heading";
import React from "react";
import ReusableAdminTable from "../../_components/ReusableAdminTable";
import { getAllCategory } from "@/services/category";
import { deleteCategoryWithId } from "@/actions/category";
import { getAllInstance } from "@/services/instance";
import { deleteInstanceWithId } from "@/actions/instance";

const InstancesPage = async () => {
  const allCategory = await getAllInstance();
  return (
    <section className="p-avoid-nav">
      <Heading>InstancesPage</Heading>
      <ReusableAdminTable
        actions={deleteInstanceWithId}
        allData={allCategory!}
      />
    </section>
  );
};

export default InstancesPage;
