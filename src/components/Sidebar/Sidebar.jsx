import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../../style/Sidebar.css';

function Sidebar() {
  const location = useLocation();
  const isEventsSectionActive = location.pathname.startsWith('/events');
  const isRegistrationsSectionActive = location.pathname.startsWith('/registrations');
  const isBudgetsSectionActive = location.pathname.startsWith('/budgets');

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <NavLink to="/" className="brand-link">
        <span className="brand-text font-weight-light">Eventos Comunitarios</span>
      </NavLink>

      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Dashboard */}
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>

            {/* Header: Operaciones */}
            <li className="nav-header">Operaciones</li>

            {/* Registrar Evento (listar/crear) */}
            <li className={`nav-item has-treeview ${isEventsSectionActive ? 'menu-open' : ''}`}>
              {/* Parent toggler (kept as plain link for AdminLTE arrow UI) */}
              <a href="#" className={`nav-link ${isEventsSectionActive ? 'active' : ''}`}>
                <i className="nav-icon fas fa-calendar-plus"></i>
                <p>
                  Registrar Evento
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink
                    to="/events"
                    end
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    <i className="fas fa-list-ul nav-icon"></i>
                    <p>Listar</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/events/create"
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    <i className="fas fa-plus-circle nav-icon"></i>
                    <p>Crear</p>
                    <span className="right badge badge-accent">Nuevo</span>
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Inscripciones (listar/crear) */}
            <li className={`nav-item has-treeview ${isRegistrationsSectionActive ? 'menu-open' : ''}`}>
              <a href="#" className={`nav-link ${isRegistrationsSectionActive ? 'active' : ''}`}>
                <i className="nav-icon fas fa-user-check"></i>
                <p>
                  Inscripciones
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink
                    to="/registrations"
                    end
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    <i className="fas fa-list-ul nav-icon"></i>
                    <p>Listar</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/registrations/create"
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    <i className="fas fa-plus-circle nav-icon"></i>
                    <p>Crear</p>
                    <span className="right badge badge-accent">Nuevo</span>
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Presupuestos (listar/crear) */}
            <li className={`nav-item has-treeview ${isBudgetsSectionActive ? 'menu-open' : ''}`}>
              <a href="#" className={`nav-link ${isBudgetsSectionActive ? 'active' : ''}`}>
                <i className="nav-icon fas fa-coins"></i>
                <p>
                  Presupuestos
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink
                    to="/budgets"
                    end
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    <i className="fas fa-list-ul nav-icon"></i>
                    <p>Listar</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/budgets/create"
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    <i className="fas fa-plus-circle nav-icon"></i>
                    <p>Crear</p>
                    <span className="right badge badge-accent">Nuevo</span>
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Header: Herramientas */}
            <li className="nav-header">Herramientas</li>

            {/* Reports */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-chart-line"></i>
                <p>Reports</p>
              </a>
            </li>

            {/* Calendario */}
            <li className="nav-item">
              <NavLink
                to="/calendar"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <i className="nav-icon fas fa-calendar-alt"></i>
                <p>Calendario</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
