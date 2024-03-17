import Link from "next/link";
import React from "react";

const HeaderUser = () => {
  return (
    <>
      <Link href="/auth/register">Register</Link>
      <Link href="/auth/login">Login</Link>
      <Link href="/admin/add-data">Add Data</Link>
      <Link href="/admin/data">Data</Link>
    </>
  );
};

export default HeaderUser;
