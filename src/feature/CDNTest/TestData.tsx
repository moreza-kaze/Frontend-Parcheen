import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUserStore } from "@/store/userStore";
const TestData = ({isLoading}:any) => {
  const headerLabel: any = [
    { label: "کوفت", className: "" },
    { label: "درد", className: "" },
    { label: "مرض", className: "" },
    { label: "زهرمار", className: "" },
  ];
  const data = useUserStore((state) => state.user);
  // console.log("ffffffffffffffffffffffffff",data);
  return (
    <div>
      <Table>
        <TableCaption>A list of my fohshs.</TableCaption>
        <TableHeader
          headerLabel={headerLabel}
          headerClassName={"bg-red-100 text-gray-800 text-right"}
        />

        <TableBody isLoading={isLoading} loadingContent={<div><span>اون یک خر تنهای شهره</span></div>}
        isEmpty={data.length<1} emptyContent={<div><span>اون مصدری خره</span></div>}
        >
          {data && data.length>0 &&
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
      </Table>
    </div>
  );
};
export default TestData;
