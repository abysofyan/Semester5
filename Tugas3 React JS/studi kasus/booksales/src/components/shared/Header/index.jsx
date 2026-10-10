import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const navClass = ({ isActive }) =>
    `nav-link nav-custom ${isActive ? "active" : ""}`;

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-0">
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
            data-bs-target="#bookstoreNavbar"
            aria-controls="bookstoreNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="bookstoreNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" end className={navClass}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/book" className={navClass}>
                  Book
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/team" className={navClass}>
                  Team
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className={navClass}>
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className={navClass}>
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/services" className={navClass}>
                  Services
                </NavLink>
              </li>
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
        </div>
      </nav>
    </header>
  );
}