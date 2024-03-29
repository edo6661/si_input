"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {AnimatePresence,motion} from 'framer-motion'

const UserLinksHeader = () => {
  const [selectedLink, setSelectedLink] = useState(true)
  const pathname = usePathname();
  const linksHeader = ["Profile", "Visi-Misi"];

  const variant = {
    show:{
      opacity:1,
    },
    hidden: {
      opacity:0
    }
  }

  const toggleSelected = () => setSelectedLink((prev) => !prev)

  return (
    <ul className="fl-ic gap-20 font-medium relative">
      <Button
        onClick={toggleSelected}
      >Click</Button>
      <AnimatePresence>
      {
        selectedLink && (
          <>
          <motion.div
            variants={variant}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={cn(" absolute  -bottom-24 bg-white w-40 px-6 py-3 rounded-2xl shadow-md shadow-muted")}
          >
          {linksHeader.map((link) => {
        const id = link === "Visi-Misi" ? "#visimisi" : "#profile"
        return (
          <motion.li key={link}
            
          >
            <a
              className={cn("link-hover text-xl", {
                "active-link": pathname === `/${link.toLowerCase()}`,
              })}
              href={id}
            >
              {link}
            </a>
          </motion.li>
        )
      })}
          </motion.div>
          </>   
        )
      }
      </AnimatePresence>
    </ul>
  );
};

export default UserLinksHeader;
