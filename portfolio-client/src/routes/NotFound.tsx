import { Link } from "react-router";

function NotFound() {
  return (
    <div>
      <p>Error 404! Page not found</p>
      <Link to={"/"} title="Home">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
