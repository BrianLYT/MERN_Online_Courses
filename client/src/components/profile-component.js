import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";

const ProfileComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  return (
    <div className="text-center" style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>You must login first before getting your profile.</div>
      )}
      {currentUser && (
        <div>
          <h1>In profile page.</h1>
          <header>
            <h3>
              <strong>{currentUser.user.username}</strong>
            </h3>
          </header>
          <p>
            <strong>Email: {currentUser.user.email}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
