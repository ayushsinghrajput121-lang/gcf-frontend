import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { phoneNumber } from "./Constants";
// import About from '../pages/About'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMenuOpen);

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMenuOpen]);

  return (
    <>
      <div id="top-links" className="ftsl-navbar  rounded sticky-top">
        <nav className="navbar p-0 navbar-expand-lg frontnavbar  navbar-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand p-0">
              <img
                src="images\Group 4.png"
                alt="cheapgoogle flight logo"
                className="img-fluid logo"
                style={{ width: "200px" }}
              />
            </Link>
            <button
              type="button"
              className="navbar-toggler me-0"
              aria-controls="navbarCollapse"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`collapse navbar-collapse mynavbar-collapse ${isMenuOpen ? "show" : ""}`}
              id="navbarCollapse"
            >
              <div className="top-form"></div>
              <div className="navbar-nav navbar-my-nav ms-auto">
                <Link to="/" className="nav-item nav-link mynav-link" onClick={closeMenu}>
                  Home
                </Link>

                <Link to="/about" className="nav-item nav-link mynav-link" onClick={closeMenu}>
                  About Us
                </Link>
                
                <Link className="nav-item nav-link mynav-link" to="/privacy" onClick={closeMenu}>Privacy Policy</Link>
                <Link className="nav-item nav-link mynav-link" to="/terms-condition" onClick={closeMenu}>Terms & Conditions </Link>
                <Link to="/contact" className="nav-item nav-link mynav-link" onClick={closeMenu}>
                  Contact Us
                </Link>
                <Link className="nav-item nav-link mynav-link call-nav" to={`tel:${phoneNumber}`} onClick={closeMenu}>
                <i className="fa-solid fa-headset" aria-hidden="true"></i>{phoneNumber}</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
