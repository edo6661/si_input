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
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import SearchForm from "./SearchForm";

interface ReusableTableProps {
  allData: DatasProps[];
}

export default async function ReusableTable({ allData }: ReusableTableProps) {

  return (
    <>
      <div className="container">
        <SearchForm />
        {!allData.length && (
          <Heading className="text-center">Empty Data</Heading>
        )}
        <Table>
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
      </div>
    </>
  );
}
