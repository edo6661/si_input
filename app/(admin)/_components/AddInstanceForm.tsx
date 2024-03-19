"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useTransition } from "react";
import { dataSchema } from "@/lib/zod/data";
import { createData } from "@/actions/data";
import ImageUpload from "@/components/lib/ImageUploader";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { dataDefaultValues } from "@/constants/data";
import { categorySchema } from "@/lib/zod/category";
import { createCategory } from "@/actions/category";
import FormInput from "@/components/FormInput";
import { instanceSchema } from "@/lib/zod/instance";
import { createInstance } from "@/actions/instance";

export default function AddInstanceForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof instanceSchema>>({
    resolver: zodResolver(instanceSchema),
    defaultValues: {
      nama: "",
    },
  });

  function onSubmit(values: z.infer<typeof instanceSchema>) {
    startTransition(() => {
      createInstance(values)
        .then(() => {
          console.log("success");
          toast.success("Instance added successfully");
          router.push("/admin/instances");
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 p-avoid-nav"
      >
        <FormInput
          label="Nama"
          name="nama"
          placeholder="Nama"
          control={form.control}
          description="Nama Instance"
        />

        <Button type="submit" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
