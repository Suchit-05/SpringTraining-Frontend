import "./App.css";

import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />

      <header className="header">
        <h1>Spring Boot Management System</h1>
        <p>React + Spring Boot CRUD Application</p>
      </header>

      <AppRoutes />
    </>
  );
}

export default App;