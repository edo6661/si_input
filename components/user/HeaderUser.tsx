import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import ClerkButtonUser from "./ClerkButtonUser";
import AdminLinks from "../AdminLinks";
import UserLinks from "../UserLinks";
import { fredoka } from "@/utils/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Heading } from "../ui/heading";
import { Button } from "../ui/button";
import UserLinksHeader from "./UserLinksHeader";
import UserHeaderData from "./UserHeaderData";
interface HeaderUserProps {
  role: string;
}
const HeaderUser = ({ role }: HeaderUserProps) => {
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
          <div>
            <UserLinksHeader />
          </div>
          <div className="fl-ic gap-4">
            <SignedOut>
              <Button asChild variant="secondary">
                <Link href="/sign-in">Sign in</Link>
              </Button>
            </SignedOut>
            <UserHeaderData />
            <ClerkButtonUser />
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderUser;
