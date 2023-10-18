import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Hello  Shahrukh</h1>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;