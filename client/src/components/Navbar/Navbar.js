// react
import { Link, useNavigate } from "react-router-dom";

// assets
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

// hooks
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
            <span>HMS</span>
          </Link>
        </div>
        <nav className="navbar">
          <ul>
            {!user && (
              <>
                <li className="menu-link">
                  <Link to="/login">Log in</Link>
                </li>
                <li className="btn-link">
                  <Link to="/register">register</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link to="/patient/dashboard" className="menu-link">
                    Dashboard
                  </Link>
                </li>
                {/* <li className="btn-link">
                  {!isPending && <a onClick={() => logout().then(() => navigate("/"))}>Log out</a>}
                  {isPending && <a disabled>Logging out...</a>}
                </li> */}
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}