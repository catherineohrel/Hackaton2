import "./nav.scss";
import imgLogo from "../../assets/images/logo/logo.png";

function Nav() {
  return (
    <div className="navbar-content">
      <div className="nav-logo">
        <img src={imgLogo} alt="img-logo" />
      </div>
    </div>
  );
}

export default Nav;
