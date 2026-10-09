
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row align-items-center g-3">
          <div className="col-md-6">
            <h4 className="fw-bold mb-2">
              <i className="fa-solid fa-book me-2"></i>
              Bookstore
            </h4>
            <p className="text-white-50 mb-0">
              Temukan cerita dan inspirasi di setiap halaman.
            </p>
          </div>

          <div className="col-md-6 text-md-end footer-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <p className="text-center text-white-50 mb-0">
          &copy; {new Date().getFullYear()} Bookstore.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
