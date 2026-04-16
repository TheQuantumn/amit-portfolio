import { useLocation } from "react-router-dom";
import PillNav from "./PillNav";

function Navbar() {
  const location = useLocation();
  const activeHref = `${location.pathname}${location.hash}`;
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" }
  ];

  return (
    <PillNav
      logo="/nuke-logo.svg"
      logoAlt="Nuke"
      items={navItems}
      activeHref={activeHref}
      className="navbar-pill"
      ease="power2.easeOut"
      baseColor="#0A0A0C"
      pillColor="#8A2BE2"
      hoveredPillTextColor="#0A0A0C"
      pillTextColor="#FFFFFF"
      initialLoadAnimation={true}
    />
  );
}

export default Navbar;
