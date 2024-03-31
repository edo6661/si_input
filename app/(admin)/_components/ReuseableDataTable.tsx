"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import { Instance } from "@prisma/client";
import ActionTableAdmin from "./ActionTableAdmin";
import { InstanceData } from "@/types";
interface ReusableAdminDataTableProps extends InstanceData {
  actions: (id: string) => Promise<void>;
}
const ReusableAdminDataTable = ({
  nama,
  id,
  actions,
  data
}: ReusableAdminDataTableProps) => {


  return (
    <TableRow key={id} className="text-center">
      <TableCell className="font-medium">{nama}</TableCell>

      <ActionTableAdmin actions={actions} id={id} data={data} />
    </TableRow>
  );
};

export default ReusableAdminDataTable;
