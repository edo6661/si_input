import CustomBreadCrumb from "@/components/CustomBreadCrumb";
import Datas from "@/components/Datas";
import ReusableDataTable from "@/components/ReusableDataTable";
import ReusableTable from "@/components/ReusableTable";
import { getAllCategory } from "@/services/category";
import { getAllData, getAllDataByUserId } from "@/services/data";
import { getCurrentUser } from "@/services/user";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const UserDataPage = async () => {
  const user = await getCurrentUser();
  const data = await getAllDataByUserId(user?.id!);

  return (
    <section className="p-avoid-aside flex flex-col gap-2">
      <ReusableTable allData={data!} />
    </section>
  );
};

export default UserDataPage;
