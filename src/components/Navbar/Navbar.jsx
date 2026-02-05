import React,{ useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  const [sidenav, setSidenav] = useState(false);
  const [sticky, setSticky] = useState(false);

  const menuIcon = <FontAwesomeIcon icon={faBars} />;

  const sidenavShow = () => {
    setSidenav(!sidenav);
  };

  // ✅ Close menu function
  const closeMenu = () => {
    setSidenav(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header id="site_header" className={`${sticky ? "sticky" : ''}`}>
        <div className="container">
          <nav className="navbar" id="Navbar">

            <div className="navbar_toggler" onClick={sidenavShow}>
              {menuIcon}
            </div>

            <div className={`menu_items ${sidenav ? "active" : ""}`}>
              <ul>
                <li>
                  <Link activeClass="active" to="home" spy smooth onClick={closeMenu}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="about" spy smooth onClick={closeMenu}>
                    About US
                  </Link>
                </li>

                <li>
                  <Link to="services" spy smooth onClick={closeMenu}>
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="blog" spy smooth onClick={closeMenu}>
                    Blog
                  </Link>
                </li>

                <li>
                  <Link to="contact" spy smooth onClick={closeMenu}>
                    Contact US
                  </Link>
                </li>
              </ul>
            </div>

          </nav>
        </div>
      </header>
    </>
  )
}
