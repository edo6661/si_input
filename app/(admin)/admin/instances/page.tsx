import { Heading } from "@/components/ui/heading";
import React from "react";
import ReusableAdminTable from "../../_components/ReusableAdminTable";
import { getAllCategory } from "@/services/category";
import { deleteCategoryWithId } from "@/actions/category";
import { getAllInstance } from "@/services/instance";
import { deleteInstanceWithId } from "@/actions/instance";

const InstancesPage = async () => {
  const allInstance = await getAllInstance();

  return (
    <section className="p-avoid-nav">
      <Heading>Instances</Heading>
      <ReusableAdminTable
        actions={deleteInstanceWithId}
        allData={allInstance!}
      />
    </section>
  );
};

export default InstancesPage;
