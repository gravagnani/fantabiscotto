import React, { useState } from "react";

import "./Layout.css";
import logo from "../../images/logo.svg";
import { Link, NavLink } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Layout = () => {
  const activeClassName = "active";

  const menu = [
    { label: "Partecipanti", link: "/participants" },
    { label: "Tabellone", link: "/draw" },
    { label: "Regole", link: "/rules" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="app-header">
        <div className="app-header-content">
          <Link to="/">
            <img src={logo} className="app-logo" />
          </Link>
          <h1 className="app-title">FantaBiscotto</h1>

          <nav className="app-header-nav">
            <ul>
              {menu.map((m, i) => {
                return (
                  <li key={i}>
                    <NavLink
                      to={m.link}
                      className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                      }
                    >
                      {m.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="app-header-nav-mobile">
          {menuOpen && (
            <ul>
              {menu.map((m, i) => {
                return (
                  <li key={i}>
                    <NavLink
                      to={m.link}
                      className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                      }
                      onClick={handleOpenMenu}
                    >
                      {m.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="header-menu-btn" onClick={handleOpenMenu}>
            <button>{menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Layout;
