import React, { useTransition } from "react";
import { TableCell } from "../ui/table";
import { Button } from "../ui/button";
import { User } from "@prisma/client";
import { X } from "lucide-react";
import { deleteDataWithId } from "@/actions/data";
import { toast } from "sonner";
interface AdminDataTableProps {
  createdBy: User;
  id: string;
}

const AdminDataTable = ({ createdBy, id }: AdminDataTableProps) => {
  const [isPending, startTransition] = useTransition();
  const handleDelete = async () => {
    startTransition(() => {
      deleteDataWithId(id)
        .then((data) => {
          toast.success(`Data ${data?.nama} has been deleted`);
        })
        .catch((err) => {
          console.error(err);
          toast.error(`Failed to delete data: ${err.message}`);
        });
    });
  };

  return (
    <>
      <TableCell>{createdBy?.username}</TableCell>
      <TableCell>
        <Button
          variant="destructive"
          size="icon"
          className="w-fit px-3"
          onClick={handleDelete}
          disabled={isPending}
        >
          <X size="18" />
        </Button>
      </TableCell>
    </>
  );
};

export default AdminDataTable;
