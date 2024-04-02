import { Outlet } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      <h1>this is dashboard</h1>
      <Outlet />
    </div>
  );
};

export default DashboardPage;
