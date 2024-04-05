"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import FormInput from "@/components/FormInput";
import { createRelease } from "@/actions/release";
import FormSelect from "@/components/FormSelect";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Data, Instance } from "@prisma/client";
import { changeInstanceUser, deleteUserWithId } from "@/actions/user";

export const formUserSchema = z.object({
  instanceId: z.string().min(1, {
    message: "Instance is required",
  }),
  userId: z.string(),
})

interface FormUsersProps {
  instanceId: string;
  nama: string;
  instances: Instance[]
  instancesWithoutUser: Instance[]
  userId: string;
  data: Data[]
}

export default function FormUsers(
  { instanceId, instances, userId, instancesWithoutUser, data }: FormUsersProps
) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formUserSchema>>({
    resolver: zodResolver(formUserSchema),
    defaultValues: {
      instanceId: instanceId,
      userId
    },
  });
  const alreadyAssigned = !!(!instancesWithoutUser.find((instance) => instance.id === form.watch("instanceId")))

  function onSubmit(values: z.infer<typeof formUserSchema>) {
    if (alreadyAssigned) {
      toast.error("Instance already assigned");
      return;
    }
    startTransition(() => {
      changeInstanceUser(values)
        .then(() => {
          console.log("success");
          toast.success("Instance Changed successfully");
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }
  const deleteUser = () => {
    startTransition(() => {
      deleteUserWithId(userId)
        .then(() => {
          if (data.length > 0) return toast.error("User has data, cannot be deleted");
          toast.success("User deleted successfully");
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
        className=" space-y-4"
      >
        <FormSelect
          name="instanceId"
          control={form.control}
          data={instances}
          placeholder="Select instance"

        />
        <div className="fl-ic justify-between">
          <Button type="submit" disabled={isPending}>
            Submit
          </Button>
          <Button type="button" variant="destructive" disabled={isPending}
            onClick={deleteUser}
          >
            Delete
          </Button>
        </div>
      </form>
    </Form>
  );
}
