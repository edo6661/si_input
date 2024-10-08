"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
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
import { Heading, X } from "lucide-react";
import Link from "next/link";
interface AddDataFormProps {
  userId: string;
  categories: Category[];
  release: Release[];
  instanceId: string;
}
export default function AddDataForm({
  userId,
  categories,
  release,
  instanceId,
}: AddDataFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof dataSchema>>({
    resolver: zodResolver(dataSchema),
    defaultValues: {
      userId: userId,
      instanceId: instanceId,
      ...dataDefaultValues,
    },
  });
  const { setValue, watch } = form;

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

  const data = watch("data");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 p-avoid-nav max-w-2xl mx-auto"
      >
        <FormInput
          label="Nama"
          name="nama"
          placeholder="Nama"
          control={form.control}
          description="Nama data"
        />
        <div className="flex items-center justify-between ">
          {/* <FormSelect
            name="instanceId"
            placeholder="Pilih Instance"
            control={form.control}
            data={instances}
          /> */}
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
        <div>
          {data ? (
            <>
              <div className="space-x-4">
                <a href={data} target="_blank" className="link-hover">
                  {data}
                </a>
                <Button
                  variant="destructive"
                  size="icon"
                  className=" h-8 w-8 px-0 py-0"
                  onClick={() => setValue("data", "")}
                  disabled={isPending}
                >
                  <X size="18" />
                </Button>
              </div>
            </>
          ) : (
            <>
              <FormField
                control={form.control}
                name="data"
                render={({ field }) => (
                  <FormItem>
                    <ImageUpload setData={setValue} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
        </div>
        <Button type="submit" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
