import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <main className="dashboard-grid">
      <section className="dashboard-card dashboard-card--accent-one">
        <span className="dashboard-card__eyebrow">Records</span>
        <h2>Customers</h2>
        <p>Review customer profiles, contact details, and account activity in one place.</p>
        <Link to="/customers" className="dashboard-card__button">
          Open Customers
        </Link>
      </section>

      <section className="dashboard-card dashboard-card--accent-two">
        <span className="dashboard-card__eyebrow">Catalog</span>
        <h2>Products</h2>
        <p>Browse product entries and keep the catalog aligned with current inventory.</p>
        <Link to="/products" className="dashboard-card__button">
          Open Products
        </Link>
      </section>

      <section className="dashboard-card dashboard-card--accent-three">
        <span className="dashboard-card__eyebrow">Operations</span>
        <h2>Orders</h2>
        <p>Track order records and inspect the latest transactional updates.</p>
        <Link to="/orders" className="dashboard-card__button">
          Open Orders
        </Link>
      </section>
    </main>
  );
}

export default DashboardPage;