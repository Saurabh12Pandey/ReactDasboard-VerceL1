import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import MediationSharpIcon from '@mui/icons-material/MediationSharp';
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none", color:"black"}}>
          <span className="logo">Dahboard for Product</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <ProductionQuantityLimitsOutlinedIcon className="icon" />
              <span>Product</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <SupportAgentTwoToneIcon className="icon" />
              <span>Customer</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Income</span>
          </li>
          <li>
            <MediationSharpIcon className="icon" />
            <span>Promote</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Help</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
