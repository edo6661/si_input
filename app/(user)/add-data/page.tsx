import { getCurrentUser } from "@/services/user";
import { getAllCategory } from "@/services/category";
import { getAllInstance } from "@/services/instance";
import { getAllRelease } from "@/services/release";
import AddDataForm from "@/app/(admin)/_components/AddDataForm";
import { notFound } from "next/navigation";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AddDataPage = async () => {
  const user = await getCurrentUser();
  const categories = await getAllCategory();
  const release = await getAllRelease();

  if (user?.role === "ADMIN") return notFound();

  if (!user?.instanceId)
    return (
      <>
        <div className="p-avoid-nav fl-ic container">
          <Heading>Cant add data u must fill your instance: </Heading>
          <Button variant="link" size="sm" asChild>
            <Link href="/profile">Profile</Link>
          </Button>
        </div>
      </>
    );

  return (
    <div className="container space-y-12">
      <AddDataForm
        userId={user?.id!}
        categories={categories!}
        release={release!}
        instanceId={user?.instanceId!}
      />
    </div>
  );
};

export default AddDataPage;
