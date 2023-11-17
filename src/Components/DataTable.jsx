import * as React from 'react';
import { useDemoData } from '@mui/x-data-grid-generator';
import {
  DataGrid,GridToolbarContainer,GridToolbarExport 
} from '@mui/x-data-grid';

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
      </GridToolbarContainer>
    );
  }
  export default function RemovePrintExport() {
    const columns = [
        { field: "id", headerName: "ID", minWidth: 100 },
        { field: "firstName", headerName: "First name", minWidth: 100 },
        { field: "lastName", headerName: "Last name", minWidth: 100 },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          minWidth: 100,
        },
        {
          field: "fullName",
          headerName: "Full name",
          description: "This column has a value getter and is not sortable.",
          sortable: false,
          minWidth: 100,
          valueGetter: (params) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
        },
        { field: "id", headerName: "ID", minWidth: 100 },
        { field: "firstName", headerName: "First name", minWidth: 100 },
        { field: "lastName", headerName: "Last name", minWidth: 100 },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          minWidth: 100,
        },
        { field: "id", headerName: "ID", minWidth: 100 },
        { field: "firstName", headerName: "First name", minWidth: 100 },
        { field: "lastName", headerName: "Last name", minWidth: 100 },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          minWidth: 100,
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
    // const { data, loading } = useDemoData({
    //   dataSet: 'Commodity',
    //   rowLength: 4,
    //   maxColumns: 6,
    // });
  
    return (
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
        rows={rows}
        columns={columns}
      //    {...data}
          checkboxSelection
        //  loading={loading}
          slots={{
            toolbar: CustomToolbar,
          }}
          sx={{}}
        />
      </div>
    );
  }