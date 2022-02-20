import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CourseService from "../services/course.service";
import logo from "../img/logo.svg";

const EnrollComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useHistory();
  let [searchInput, setSearchInput] = useState("");
  let [searchResult, setSearchResult] = useState(null);
  const handleTakeToLogin = () => {
    history.push("/login");
  };
  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearch = () => {
    CourseService.getCourseByName(searchInput)
      .then((data) => {
        console.log(data);
        setSearchResult(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEnroll = (e) => {
    CourseService.enroll(e.target.id, currentUser.user._id)
      .then(() => {
        window.alert("Done Enrollment");
        history.push("/course");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>You must login first before searching for courses.</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            Take me to login page.
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role === "instructor" && (
        <div>
          <h1>Only students can enroll in courses.</h1>
        </div>
      )}
      {currentUser && currentUser.user.role === "student" && (
        <div>
          <h1 className="text-center">Search Course</h1>
          <br />
          <div className="search input-group mb-3">
            <input
              onChange={handleChangeInput}
              type="text"
              className="form-control"
            />
            <button onClick={handleSearch} className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      )}
      {currentUser && searchResult && searchResult.length !== 0 && (
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {searchResult.map((course) => (
              <div class="col">
                <div
                  key={course._id}
                  className="card text-center"
                  style={{ width: "18rem" }}
                >
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
                    <p>Price: {course.price}</p>
                    <p>Student: {course.students.length}</p>
                    <a
                      href="#"
                      onClick={handleEnroll}
                      className="card-text"
                      className="btn btn-primary"
                      id={course._id}
                    >
                      Enroll
                    </a>
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

export default EnrollComponent;
