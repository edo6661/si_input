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

export default function AddCategoryForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      nama: "",
    },
  });

  function onSubmit(values: z.infer<typeof categorySchema>) {
    startTransition(() => {
      createCategory(values)
        .then(() => {
          console.log("success");
          toast.success("Category added successfully");
          router.push("/admin/data");
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormInput
          label="Nama"
          name="nama"
          placeholder="Nama"
          control={form.control}
          description="Nama kategori"
        />

        <Button type="submit" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
