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
import { DatasProps } from "@/types";
import Link from "next/link";
import AdminHead from "./AdminHead";
import { Heading } from "lucide-react";
import { Category, Instance } from "@prisma/client";
import ReusableAdminDataTable from "./ReuseableDataTable";

interface ReusableTableProps {
  allData: Instance[];
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
