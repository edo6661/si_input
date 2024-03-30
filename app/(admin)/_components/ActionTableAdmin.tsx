import React, { useTransition } from "react";
import { User } from "@prisma/client";
import { X } from "lucide-react";
import { deleteDataWithId } from "@/actions/data";
import { toast } from "sonner";
import { TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import AlertDialog from "@/components/AlertDialog";
interface ActionTableAdminProps {
  id: string;
  actions: (id: string) => Promise<void>;
}

const ActionTableAdmin = ({ id, actions }: ActionTableAdminProps) => {
  const [isPending, startTransition] = useTransition();
  const handleDelete = async () => {
    startTransition(() => {
      actions(id)
        .then(() => {
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
