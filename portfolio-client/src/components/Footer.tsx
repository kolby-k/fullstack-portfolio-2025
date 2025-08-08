import { Link } from "react-router";

function Footer() {
  return (
    <div className="footerBar">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Footer;
