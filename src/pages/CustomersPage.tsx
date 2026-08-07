import EntityTable from "../components/EntityTable";

function CustomersPage() {
  return <EntityTable title="Customers" endpoint="/customers" />;
}

export default CustomersPage;