import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    cellClassName: "super-app-theme--sticky", // Add sticky class
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    width: 160,
    sortable: false,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const StyledBox = styled(Box)({
  "& .super-app-theme--sticky": {
    position: "sticky",
    left: 0,
    background: "#fff",
    zIndex: 1, // Ensure it stays on top
  },
});

export default function DataGridDemo() {
  return (
    <StyledBox sx={{ height: 400, width: "50%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </StyledBox>
  );
}