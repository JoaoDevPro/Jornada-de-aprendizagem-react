// Sidebar.js
import React, { useState } from "react";
import "./Sidebar.css"; // Assumindo que o CSS está em um arquivo Sidebar.css

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="logo_wrapper">
        <img src="/path/to/renault5.png" alt="Logo" className="logo-small" />
        <span className="company-name">Empresa</span>
        <button
          className="expand-btn"
          aria-label="Expandir Sidebar"
          title="Expandir sidebar"
          onClick={toggleSidebar}
        >
          <i className={`fa-solid ${isCollapsed ? "fa-chevron-left" : "fa-chevron-right"}`} aria-hidden="true"></i>
        </button>
      </div>

      <div className="sidebar-links">
        <ul>
          <li style={{ marginTop: "3rem" }}>
            <a href="/home" className="active">
              <i className="fa regular fa-house"></i> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/listar-risco">
              <i className="fas fa-exclamation-triangle"></i> <span>Risco</span>
            </a>
          </li>
          <li>
            <a href="/listar-solucao">
              <i className="fa-regular fa-lightbulb"></i> <span>Solução</span>
            </a>
          </li>
          <li>
            <a href="#settings">
              <i className="fas fa-cog"></i> <span>Configurações</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sidebar_profile">
        <a href="#logout" className="logout">
          <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}

export default Sidebar;
