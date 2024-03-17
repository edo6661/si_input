import AdminLinks from "@/components/AdminLinks";
import UserLinks from "@/components/UserLinks";
import ClerkButtonUser from "@/components/user/ClerkButtonUser";
import { fredoka } from "@/utils/fonts";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
interface HeaderAdminProps {
  role: string;
}
const HeaderAdmin = ({ role }: HeaderAdminProps) => {
  return (
    <>
      <header className={fredoka.className}>
        <nav className="container">
          <SignedOut>
            <Link href="/sign-in">Login</Link>
          </SignedOut>
          {role === "ADMIN" ? (
            <AdminLinks />
          ) : role === "USER" ? (
            <UserLinks />
          ) : null}
          <ClerkButtonUser />
        </nav>
      </header>
    </>
  );
};

export default HeaderAdmin;
