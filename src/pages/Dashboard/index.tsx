import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "~/components/navbar";
import { ACCESS_TOKEN_KEY } from "~/lib/constants";

const Dashboard: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLogout = (): void => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    navigate("/");
  };

  return (
    <div id="app" className="">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
