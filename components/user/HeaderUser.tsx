"use client";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import ClerkButtonUser from "./ClerkButtonUser";
import AdminLinks from "../AdminLinks";
import { fredoka } from "@/utils/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Heading } from "../ui/heading";
import { Button } from "../ui/button";
import UserLinksHeader from "./UserLinksHeader";
import UserHeaderData from "./UserHeaderData";
import { Role } from "@prisma/client";
import { usePathname } from "next/navigation";
interface HeaderUserProps {
  role: Role;
}
const HeaderUser = ({ role }: HeaderUserProps) => {
  const pathname = usePathname();
  return (
    <>
      <header
        className={cn(
          " bg-second rounded-md  fixed top-0 z-20 w-full",
          fredoka.className
        )}
      >
        <nav className=" px-6 fl-ic justify-between">
          <Link href="/" className="fl-ic gap-4">
            <Image
              src="/logo-kabupaten-tangerang.png"
              alt="Kabupaten Tangerang"
              width={48}
              height={48}
            />
            <Heading as="h3" size="md" className="font-semibold">
              DPPPA
            </Heading>
          </Link>
          <div className="fl-ic gap-4">
            {pathname.length < 2 && <UserLinksHeader />}
            <SignedOut>
              <Button asChild variant="secondary">
                <Link href="/sign-in">Sign in</Link>
              </Button>
            </SignedOut>
            {role === "USER" && <UserHeaderData />}
            {role === "ADMIN" && <AdminLinks />}
            <ClerkButtonUser />
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderUser;
