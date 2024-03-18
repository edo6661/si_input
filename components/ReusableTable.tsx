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

interface ReusableTableProps {
  allData: DatasProps[];
}

export default async function ReusableTable({ allData }: ReusableTableProps) {
  const rows = ["Instance", "Category", "Data", "Release", "Created At"];
  return (
    <Table>
      <TableCaption>A list of your recent Data.</TableCaption>
      <TableHeader>
        <TableRow>
          {rows.map((row, i) => {
            return (
              <TableHead
                key={i}
                className={cn("", {
                  "text-right": i === rows.length - 1,
                })}
              >
                {row}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {allData?.map((data) => (
          <ReusableDataTable {...data} key={data.id} />
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
