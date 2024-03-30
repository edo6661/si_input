import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { CustomHoverCard } from "../HoverCard";

const UserLinksHeader = () => {
  const data = [
    {
      href: "#profile",
      label: "Profile",
    },
    {
      href: "#visimisi",
      label: "Visi-Misi",
    },
  ];

  return <CustomHoverCard data={data} title="Section" />;
};

export default UserLinksHeader;
