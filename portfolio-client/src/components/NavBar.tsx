import { NavLink } from "react-router";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/contact", label: "Contact" },
];

function NavBar() {
  const linkClass =
    "px-4 py-3 text-(--text-primary) rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 data-[active=true]:font-semibold data-[active=true]:underline underline-offset-4";

  const renderLinks = () =>
    LINKS.map(({ to, label }) => (
      <NavLink
        key={to}
        to={to}
        className={({ isActive }) =>
          isActive ? linkClass : "text-(--text-secondary)"
        }
      >
        {label}
      </NavLink>
    ));

  return (
    <nav className="navbar" aria-label="Main">
      {renderLinks()}
    </nav>
  );
}

export default NavBar;
