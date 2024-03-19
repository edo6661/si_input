import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { fredoka } from "@/utils/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Role } from "@prisma/client";
import { Heading } from "./ui/heading";

const Footer = () => {
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
        </nav>
      </header>
    </>
  );
};

export default Footer;
