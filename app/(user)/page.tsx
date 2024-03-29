import { Button } from "@/components/ui/button";
import UserHero from "@/components/user/UserHero";
import React from "react";
import VisiMisi from "./_components/Visimisi";
import Profile from "./_components/Profile";

const UserPage = () => {
  return (
    <>
      <div className="space-y-8">
      <UserHero />
      <Profile/>
      <VisiMisi />
      </div>
    </>
  );
};

export default UserPage;
