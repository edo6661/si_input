import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import ClerkButtonUser from "./ClerkButtonUser";
import AdminLinks from "../AdminLinks";
import UserLinks from "../UserLinks";
interface HeaderUserProps {
  role: string;
}
const HeaderUser = ({ role }: HeaderUserProps) => {
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

export default HeaderUser;
