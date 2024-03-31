import React, { useTransition } from "react";
import { Data, User } from "@prisma/client";
import { X } from "lucide-react";
import { deleteDataWithId } from "@/actions/data";
import { toast } from "sonner";
import { TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import AlertDialog from "@/components/AlertDialog";
interface ActionTableAdminProps {
  id: string;
  actions: (id: string) => Promise<void>;
  data: Data[]
}

const ActionTableAdmin = ({ id, actions, data }: ActionTableAdminProps) => {
  const [isPending, startTransition] = useTransition();
  const handleDelete = async () => {
    startTransition(() => {
      actions(id)
        .then(() => {
          if (data.length > 0) {
            return toast.error(`Data cannot be deleted because it has a relationship with another data`);
          }
          toast.success(`Data  has been deleted`);
        })
        .catch((err) => {
          console.error(err);
          toast.error(`Failed to delete data: ${err.message}`);
        });
    });
  };

  return (
    <>
      <TableCell>
        <AlertDialog
          action={handleDelete}
          isPending={isPending}
          trigger={
            isPending ? "Deleting..." : "Delete"
          }
        />
      </TableCell>
    </>
  );
};

export default ActionTableAdmin;
