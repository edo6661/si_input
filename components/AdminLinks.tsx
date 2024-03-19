import Link from "next/link";
import React from "react";
import { CustomHoverCard } from "./HoverCard";

const AdminLinks = () => {
  const links = [
    {
      href: "/admin/add-instance",
      label: "Add Instance",
    },
    {
      href: "/admin/add-category",
      label: "Add Category",
    },
    {
      href: "/admin/add-release",
      label: "Add Release",
    },
    {
      href: "/admin/data",
      label: "Data",
    },
    {
      href: "/admin/instances",
      label: "Instances",
    },
    {
      href: "/admin/release",
      label: "Release",
    },
    {
      href: "/admin/category",
      label: "Category",
    },
  ];
  return (
    <>
      <CustomHoverCard data={links} title="Data" />
      {/* <Link href="/admin/add-instance">Add Instance</Link>
      <Link href="/admin/add-category">Add Category</Link>
      <Link href="/admin/add-release">Add Release</Link>
      <Link href="/admin/data">Data</Link> */}
    </>
  );
};

export default AdminLinks;
