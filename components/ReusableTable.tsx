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
import ReusableDataTable from "./ReusableDataTable";
import { getAllDataByUserId } from "@/services/data";
import { cn } from "@/lib/utils";
import { DatasProps } from "@/types";
import DynamicTableHead from "./DynamicTableHead";
import { Heading } from "./ui/heading";
import Link from "next/link";

interface ReusableTableProps {
  allData: DatasProps[];
}

export default async function ReusableTable({ allData }: ReusableTableProps) {
  if (!allData.length)
    return <Heading className="text-center">Empty Data</Heading>;

  return (
    <Table  >
      <TableCaption>A list of your recent Data.</TableCaption>
      <TableHeader>
        <TableRow>
          <DynamicTableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {allData?.map((data) => (
          <ReusableDataTable {...data} key={data.id} />
        ))}
      </TableBody>
    </Table>
  );
}
