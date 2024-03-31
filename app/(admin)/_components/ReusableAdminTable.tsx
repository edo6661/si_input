import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllDataByUserId } from "@/services/data";
import { cn } from "@/lib/utils";
import { DatasProps, InstanceData } from "@/types";
import Link from "next/link";
import AdminHead from "./AdminHead";
import { Category, Data, Instance } from "@prisma/client";
import ReusableAdminDataTable from "./ReuseableDataTable";
import { Heading } from "@/components/ui/heading";


interface ReusableTableProps {
  allData: any[]
  actions: (id: string) => Promise<void>;
}

export default async function ReusableAdminTable({
  allData,
  actions,
}: ReusableTableProps) {
  if (!allData.length)
    return <Heading className="text-center">Empty Data</Heading>;


  return (
    <Table>
      <TableCaption>A list of your recent Data.</TableCaption>
      <TableHeader>
        <TableRow>
          <AdminHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {allData?.map((data) => (
          <ReusableAdminDataTable {...data} key={data.id} actions={actions} />
        ))}
      </TableBody>
    </Table>
  );
}
