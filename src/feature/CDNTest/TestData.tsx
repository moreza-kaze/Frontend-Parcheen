import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const TestData = () => {
  const headerLabel: any = [
    { label: "Invoice", className: "w-1/4 bg-red-400" },
    { label: "Invoice2", className: "w-1/4" },
    { label: "Invoice3", className: "w-1/4" },
    { label: "Invoice4", className: "w-1/4" },
  ];
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader headerLabel={headerLabel} />

        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export default TestData;
