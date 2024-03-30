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
import { releaseSchema } from "@/lib/zod/release";
import { createRelease } from "@/actions/release";

export default function AddReleaseForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof releaseSchema>>({
    resolver: zodResolver(releaseSchema),
    defaultValues: {
      nama: "",
    },
  });

  function onSubmit(values: z.infer<typeof releaseSchema>) {
    startTransition(() => {
      createRelease(values)
        .then(() => {
          console.log("success");
          toast.success("Release added successfully");
          router.push("/admin/release");
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
        className="space-y-8 p-avoid-nav max-w-xl mx-auto"
      >
        <FormInput
          label="Nama"
          name="nama"
          placeholder="Nama"
          control={form.control}
          description="Nama Release"
        />

        <Button type="submit" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
