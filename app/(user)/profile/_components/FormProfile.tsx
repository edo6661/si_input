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
import { updateInstanceUser } from "@/actions/user";
interface AddDataFormProps {
  instances: Instance[];
}
export const formProfile = z.object({
  instanceId: z.string().min(2, {
    message: "Harus Diisi",
  }),
});
export default function FormProfile({ instances }: AddDataFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formProfile>>({
    resolver: zodResolver(formProfile),
    defaultValues: {
      instanceId: "",
    },
  });

  function onSubmit(values: z.infer<typeof formProfile>) {
    startTransition(() => {
      updateInstanceUser(values)
        .then((data) => {
          toast.success("Instance has been updated successfully");
          router.push("/add-data");
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
        <FormSelect
          name="instanceId"
          placeholder="Pilih Instance"
          control={form.control}
          data={instances}
        />

        <Button type="submit" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
