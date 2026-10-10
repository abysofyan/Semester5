
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg site-header">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center fw-bold"
        >
          <i className="fa-solid fa-book fa-xl text-primary"></i>
          <span className="ms-2">Bookstore</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Buka navigasi"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto">
            {[
              { to: "/", label: "Home", end: true },
              { to: "/team", label: "Team" },
              { to: "/contact", label: "Contact" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
            ].map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `nav-link nav-custom ${isActive ? "active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex flex-wrap gap-2">
            <Link
              to="/login"
              className="btn btn-outline-primary rounded-pill px-4"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn btn-primary rounded-pill px-4"
            >
              Sign-up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
