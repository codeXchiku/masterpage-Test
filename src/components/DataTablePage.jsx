import React from "react";
import { useLocation } from "react-router-dom";
import DataTable from "./DataTable";

function DataTablePage() {
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <div>
      
      <DataTable data={data} />
    </div>
  );
}

export default DataTablePage;
