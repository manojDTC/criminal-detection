import { Link } from "react-router-dom";
import digitalLogo from "../assets/digital-logo.png";
import notify from "../assets/notify.png";

const Header = () => {
  return (
    <div
      style={{
        background: "#742774",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Link to="/">
          <img src={digitalLogo} alt="logo"></img>
        </Link>
      </div>
      <div>
        <Link to="/alert">
          <img src={notify} alt="notify"></img>
        </Link>
      </div>
    </div>
  );
};

export default Header;
