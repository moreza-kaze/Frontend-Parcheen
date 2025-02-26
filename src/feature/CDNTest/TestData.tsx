import { Box } from "@mui/material";

import FafaTable from "@/components/material/FafaTable";

const TestData = ({ isLoading, tableData }: any) => {
  const headerData = [
    {
      field: "name",
      headerName: "تست",
      minWidth: 120,
      flex: 1,
      // disableColumnMenu: true,
      // cellClassName: "super-app-theme--sticky",
      // headerClassName: "super-app-theme--sticky-header",
    },
    {
      field: "vmtitle",
      disableColumnMenu: true,
      headerName: "عنوان",
      minWidth: 120,
      flex: 1,
    },
    { field: "power_state", resizable: true, minWidth: 120,flex: 1, },
    { field: "guest_OS", minWidth: 120,flex: 1, },
    { field: "cpu", minWidth: 120,flex: 1, },
  ];

  return (
    <div className="rtl">
      {/* {isLoading ? (
        <LoadingButton />
      ) : ( */}
      {/* <Box sx={{ height: "300px", overflow: "auto" }}> */}
      <FafaTable
        isLoading={isLoading}
        headerData={headerData}
        tableData={tableData}
      />
      {/* </Box> */}
      {/* )} */}
    </div>
  );
};
export default TestData;
