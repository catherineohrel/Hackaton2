import "./nav.scss";
import imgLogo from "../../assets/images/logo/logo.png";
import { useNavigate } from "react-router-dom";

function Nav() {
  const nav = useNavigate();

  const handleNav = () => {
    nav("./");
  };
  return (
    <div className="navbar-content">
      <button onClick={handleNav} className="nav-logo">
        <img src={imgLogo} alt="img-logo" />
      </button>
    </div>
  );
}

export default Nav;
