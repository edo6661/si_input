import { TableHead } from "@/components/ui/table";

const AdminHead = () => {
  const rows = ["Nama", "Action"];

  return rows.map((row, i) => {
    return (
      <TableHead key={i} className="text-center">
        {row}
      </TableHead>
    );
  });
};

export default AdminHead;
