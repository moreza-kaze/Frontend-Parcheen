import LoadingButton from "@/components/ui/v1/LoadingButton";
import { Box, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import CPUIcon from "@/assets/icon/CPUIcon";

const FafaTable = ({ tableData, headerData, isLoading }: any) => {
  return (
    <DataGrid
      // autoPageSize
      hideFooter={true}
      disableRowSelectionOnClick={true}
      disableColumnMenu
      sx={{
        height: 300, // Set a fixed height
        "& .MuiDataGrid-virtualScroller": {
          overflowY: "auto",
        },
        "& .MuiDataGrid-virtualScrollerRenderZone": {
          transform: "translateZ(0)", // Forces repaint to prevent disappearing rows
        },
      }}
      columns={[
        ...headerData,
        {
          field: "actions",
          headerName: "",
          sortable: false,
          filterable: false,
          width: 80, // Adjust width
          align: "center",
          headerAlign: "center",
          renderCell: (params) => (
            <IconButton
              onClick={(event) => {
                console.log("params.row", params.row);
              }}
              size="small"
            >
              <CPUIcon className="w-6 h-6" />
            </IconButton>
          ),
        },
      ]}
      rows={isLoading ? [] : tableData}
      pageSizeOptions={[5, 10, 20]}
    />
  );
};
export default FafaTable;
