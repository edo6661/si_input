import AdminLinks from "@/components/AdminLinks";
import UserLinks from "@/components/UserLinks";
import ClerkButtonUser from "@/components/user/ClerkButtonUser";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
interface HeaderAdminProps {
  role: string;
}
const HeaderAdmin = ({ role }: HeaderAdminProps) => {
  return (
    <>
      <div className="container">
        <SignedOut>
          <Link href="/sign-in">Login</Link>
        </SignedOut>
        {role === "ADMIN" ? (
          <AdminLinks />
        ) : role === "USER" ? (
          <UserLinks />
        ) : null}
        <ClerkButtonUser />
      </div>
    </>
  );
};

export default HeaderAdmin;
