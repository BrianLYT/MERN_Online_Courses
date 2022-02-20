import React from "react";
import { useHistory } from "react-router-dom";

const CourseComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useHistory();
  const handleTakeToLogin = () => {
    history.push("/login");
  };
  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>You must login before seeing your courses.</p>
          <button
            onClick={handleTakeToLogin}
            className="btn btn-primary btn-lg"
          >
            Take me to login page
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role === "instructor" && (
        <div>
          <h1>Welcome to instructor's Course page.</h1>
        </div>
      )}
      {currentUser && currentUser.user.role === "student" && (
        <div>
          <h1>Welcome to student's Course page.</h1>
        </div>
      )}
    </div>
  );
};

export default CourseComponent;
