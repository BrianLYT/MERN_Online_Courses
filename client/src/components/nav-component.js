import React from "react";
import { Link, useHistory } from "react-router-dom";
import AuthService from "../services/auth.service";
import logo from "../img/logo.svg";

const NavComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useHistory();
  const handleLogout = () => {
    AuthService.logout();
    window.alert("Logout Successfully, now you redirect to the homepage.");
    setCurrentUser(null);
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        ></img>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            {!currentUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            )}
            {!currentUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Log in
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link onClick={handleLogout} className="nav-link" to="#">
                  Log out
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/course">
                  Course
                </Link>
              </li>
            )}
            {currentUser && currentUser.user.role === "instructor" && (
              <li className="nav-item">
                <Link className="nav-link" to="/postCourse">
                  Post Course
                </Link>
              </li>
            )}
            {currentUser && currentUser.user.role === "student" && (
              <li className="nav-item">
                <Link className="nav-link" to="/enroll">
                  Enroll Course
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
