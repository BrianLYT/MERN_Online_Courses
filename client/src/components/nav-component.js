import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

const NavComponent = () => {
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
                首頁
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                註冊
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                登入
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                登出
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="搜尋"
              aria-label="Search"
            ></input>
          </form>
          <button className="btn btn-warning" type="submit">
            搜尋
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
