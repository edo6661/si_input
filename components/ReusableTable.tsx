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

export default async function ReusableTable({ id }: { id: string }) {
  const allData = await getAllDataByUserId(id);

  return (
    <Table>
      <TableCaption>A list of your recent Data.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Instance</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Data</TableHead>
          <TableHead className="text-right">Created At</TableHead>
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
