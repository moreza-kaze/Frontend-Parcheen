// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
import { DataTable } from "@/components/ui/v1/resizableTable";
import { columns } from "./../../components/ui/v1/Columns";
import { users } from "./data";
import LoadingButton from "@/components/ui/v1/LoadingButton";

const TestData = ({ isLoading }: any) => {
  // const headerLabel: any = [
  //   { label: "نام سرور", className: "max-w-1/4" },
  //   { label: "نوع سیستم عامل", className: "w-1/4" },
  //   { label: "آدرس IP", className: "w-1/4" },
  //   { label: "وضعیت", className: "w-1/4" },
  // ];

  return (
    <div>
      {/* <Table>
        <TableCaption>A list of my fohshs.</TableCaption>
        <TableHeader
          headerLabel={headerLabel}
          headerClassName={"bg-red-100 text-gray-800 text-right"}
        />

        <TableBody
          isLoading={isLoading}
          loadingContent={
            <div>
              <span>اون یک خر تنهای شهره</span>
            </div>
          }
          isEmpty={data.length < 1}
          emptyContent={
            <div>
              <span>اون مصدری خره</span>
            </div>
          }
        >
          {
            data &&
              data.length > 0 &&
              data?.map((ele: any, index: number) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium ">{ele.id}</TableCell>
                    <TableCell>{ele.text}</TableCell>
                    <TableCell>{ele.date}</TableCell>
                    <TableCell className="text-right">{ele.mobile}</TableCell>
                  </TableRow>
                );
              })
            //   :  <TableCell colSpan={headerLabel.length} className="h-24 text-center">
            //   No results.
            // </TableCell>
          }
        </TableBody>
      </Table> */}
      {isLoading ? (
        <LoadingButton />
      ) : (
        <DataTable columns={columns} data={users} />
      )}
    </div>
  );
};
export default TestData;
