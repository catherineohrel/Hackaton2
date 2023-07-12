import "./nav.scss";
import imgLogo from "../../assets/images/logo/logo.png";

function Nav() {
  return (
    <nav>
      <div className="nav-logo">
        <img src={imgLogo} alt="img-logo" />
      </div>
    </nav>
  );
}

export default Nav;
