import FormSelect from "@/components/FormSelect";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { getAllInstance, getAllInstanceWithoutUser } from "@/services/instance";
import { getCurrentUser, getUserInstanceId } from "@/services/user";
import Image from "next/image";
import React from "react";
import FormProfile from "./_components/FormProfile";
import { notFound } from "next/navigation";

const ProfilePage = async () => {
  const current = await getUserInstanceId();
  const instancesWithoutUser = await getAllInstanceWithoutUser()


  if (current?.role === "ADMIN") return notFound();

  return (
    <section className="p-avoid-nav container">
      <Heading>Profile</Heading>
      <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-4">
        <Image
          src={current?.profilePhoto!}
          alt="avatar"
          width={150}
          height={150}
          className="rounded-full"
        />
        <Heading size="sm">{current?.username}</Heading>
        {instancesWithoutUser && instancesWithoutUser?.length > 0 ? current?.instanceId ? (
          <Heading size="sm">{current?.instance?.nama}</Heading>
        ) : (
          <FormProfile instances={instancesWithoutUser!} />
        ) : <Heading>No Free Instance, Tell Admin To Add New Instance</Heading>}
      </div>
    </section>
  );
};

export default ProfilePage;
