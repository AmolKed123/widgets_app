import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, firstName: "John", lastName: "De", age: 35 },
  { id: 2, firstName: "Arya", lastName: "Stark", age: 25 },
  { id: 3, firstName: "Roxie", lastName: "Harvey", age: 28 },
  { id: 4, firstName: "Clifford", lastName: "Ferrara", age: 41 },
  { id: 5, firstName: "Marry", lastName: "Jenna", age: 20 },
  { id: 6, firstName: "Perry", lastName: "Yardi", age: 23 },
];

export default function Table() {
  return (
    <div style={{ height: 400, width: "85%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 4 },
          },
        }}
        pageSizeOptions={[4, 8]}
        checkboxSelection
      />
    </div>
  );
}
