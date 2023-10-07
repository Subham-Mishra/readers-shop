import { Outlet } from "react-router-dom";
import Navbar from "~/components/navbar";
import { ShoppingCartProvider } from "~/hooks/useCart";

const Dashboard: React.FC = (): JSX.Element => {
  return (
    <div id="app" className="">
      <ShoppingCartProvider>
        <Navbar />
        <Outlet />
      </ShoppingCartProvider>
    </div>
  );
};

export default Dashboard;
