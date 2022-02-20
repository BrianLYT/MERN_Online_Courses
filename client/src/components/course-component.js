import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CourseService from "../services/course.service";
import logo from "../img/logo.svg";

const CourseComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useHistory();
  const handleTakeToLogin = () => {
    history.push("/login");
  };
  let [courseData, setCourseData] = useState(null);
  useEffect(() => {
    console.log("Using effect.");
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
    } else {
      _id = "";
    }
    CourseService.get(_id)
      .then((data) => {
        console.log(data);
        setCourseData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <h1 className="text-center">Welcome to instructor's Course page</h1>
        </div>
      )}
      {currentUser && currentUser.user.role === "student" && (
        <div>
          <h1>Welcome to student's Course page</h1>
        </div>
      )}
      {currentUser && courseData && courseData.length !== 0 && (
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {courseData.map((course) => (
              <div class="col">
                <div className="card text-center" style={{ width: "18rem" }}>
                  <br></br>
                  <img
                    src={logo}
                    class="card-img-top"
                    alt="CoursePicture"
                    width="100"
                    height="80"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                    <p>Student Count: {course.students.length}</p>
                    <button className="btn btn-primary">{course.price}</button>
                    <br />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseComponent;
