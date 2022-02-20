import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import logo from "../img/logo.svg";

const ProfileComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>You must login first before getting your profile.</div>
      )}
      {currentUser && (
        <div>
          <h1 className="text-center">Profile</h1>
          <br></br>
          <div
            className="card bg-light col-6 mx-auto"
            style={{ width: "18rem" }}
          >
            <br></br>
            <img
              src={logo}
              className="card-img-top"
              alt="IdPhoto"
              width="100"
              height="80"
            ></img>
            <br></br>
            <div className="card-body">
              <p>
                <strong>Email: {currentUser.user.email}</strong>
              </p>
              <p>
                <strong>Role: {currentUser.user.role}</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
