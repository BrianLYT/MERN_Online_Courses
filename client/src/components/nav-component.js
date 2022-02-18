import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

const NavComponent = () => {
  return (
    <div>
      <nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <img
                src={logo}
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt=""
              ></img>
              <ul className="navbar-nav">
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
            </div>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="搜尋"
                aria-label="Search"
              ></input>
            </form>
            <button class="btn btn-warning" type="submit">
              搜尋
            </button>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavComponent;
