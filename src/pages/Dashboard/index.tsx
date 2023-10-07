import { useNavigate } from "react-router-dom";
import Navbar from "~/components/navbar";
import { ACCESS_TOKEN_KEY } from "~/lib/constants";
import HomePage from "./Home";

const Dashboard: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLogout = (): void => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    navigate("/");
  };

  return (
    <div id="app" className="">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default Dashboard;
