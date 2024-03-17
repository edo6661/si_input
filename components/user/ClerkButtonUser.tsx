"use client";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import React from "react";
import { useIsClient } from "usehooks-ts";
const ClerkButtonUser = () => {
  const isClient = useIsClient();
  return isClient ? (
    <SignedIn>
      <UserButton />
    </SignedIn>
  ) : null;
};

export default ClerkButtonUser;
