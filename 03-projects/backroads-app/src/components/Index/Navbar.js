import logo from "../../assets/explore.png";
import { socialLinks } from "../../data";
import { SocialLink } from "./SocialLink";
import { PageLinks } from "../PageLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="JOURNEY UNVEILED" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        <PageLinks parentClass='nav-links' itemClass='nav-link'/>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
             return <SocialLink key={link.key} {...link} itemClass='nav-icon'/>
          })}
        </ul>

      </div>
    </nav>
  );
};
export default Navbar;
