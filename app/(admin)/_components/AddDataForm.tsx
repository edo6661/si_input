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
import { Category, Instance, Release } from "@prisma/client";
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";
interface AddDataFormProps {
  userId: string;
  instances: Instance[];
  categories: Category[];
  release: Release[];
}
export default function AddDataForm({
  userId,
  instances,
  categories,
  release,
}: AddDataFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof dataSchema>>({
    resolver: zodResolver(dataSchema),
    defaultValues: {
      userId: userId,
      ...dataDefaultValues,
    },
  });
  const { setValue } = form;

  function onSubmit(values: z.infer<typeof dataSchema>) {
    startTransition(() => {
      createData(values)
        .then(() => {
          console.log("success");
          toast.success("Data added successfully");
          router.push("/data");
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
        className="space-y-12 container"
      >
        <FormInput
          label="Nama"
          name="nama"
          placeholder="Nama"
          control={form.control}
          description="Nama data"
        />
        <div className="flex items-center gap-4">
          <FormSelect
            name="instanceId"
            placeholder="Pilih Instance"
            control={form.control}
            data={instances}
          />
          <FormSelect
            name="categoryId"
            placeholder="Pilih Category"
            control={form.control}
            data={categories}
          />
          <FormSelect
            name="releaseId"
            placeholder="Pilih Release  "
            control={form.control}
            data={release}
          />
        </div>
        <div className="max-w-[200px]">
          <ImageUpload setData={setValue} />
        </div>
        <Button type="submit" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
