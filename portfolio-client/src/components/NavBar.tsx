import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="nav-glow navbar ">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default NavBar;
