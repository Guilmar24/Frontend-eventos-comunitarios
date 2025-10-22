import '../../style/Navbar.css';

function Navbar() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            role="button"
            aria-label="Toggle sidebar"
            onClick={(e) => {
              e.preventDefault();
              // React-controlled pushmenu: toggle AdminLTE's sidebar collapse class
              document.body.classList.toggle('sidebar-collapse');
            }}
          >
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">Inicio</a>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">Ayuda</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
