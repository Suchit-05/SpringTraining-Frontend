import EntityTable from "../components/EntityTable";

function OrdersPage() {
  return <EntityTable title="Orders" endpoint="/orders" />;
}

export default OrdersPage;