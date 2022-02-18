import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

const NavComponent = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <img
          src={logo}
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        ></img>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                首頁
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                註冊
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                登入
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                登出
              </a>
            </li>
          </ul>
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
      </div>
    </nav>
  );
};

export default NavComponent;
