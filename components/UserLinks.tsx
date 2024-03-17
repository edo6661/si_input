import Link from "next/link";
import React from "react";

const UserLinks = () => {
  return (
    <>
      <Link href="/add-data">Add Data</Link>
      <Link href="/data">Data</Link>
    </>
  );
};

export default UserLinks;
