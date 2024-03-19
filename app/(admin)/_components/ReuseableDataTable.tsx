"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import { Instance } from "@prisma/client";
import ActionTableAdmin from "./ActionTableAdmin";
interface ReusableAdminDataTableProps extends Instance {
  actions: (id: string) => Promise<void>;
}
const ReusableAdminDataTable = ({
  nama,
  id,
  actions,
}: ReusableAdminDataTableProps) => {
  return (
    <TableRow key={id} className="text-center">
      <TableCell className="font-medium">{nama}</TableCell>
      <ActionTableAdmin actions={actions} id={id} />
    </TableRow>
  );
};

export default ReusableAdminDataTable;
