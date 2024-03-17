import Link from "next/link";
import React from "react";

const AdminLinks = () => {
  return (
    <>
      <Link href="/admin/add-instance">Add Instance</Link>
      <Link href="/admin/add-category">Add Category</Link>
      <Link href="/admin/add-release">Add Release</Link>
      <Link href="/admin/data">Data</Link>
    </>
  );
};

export default AdminLinks;
