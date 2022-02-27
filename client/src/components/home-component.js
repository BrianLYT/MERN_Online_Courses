import React from "react";
import image from "../img/learn.jpg";
import workoutImg from "../img/workout.jpg";
import webDesignImg from "../img/webDesign.jpg";
import dataScienceImg from "../img/dataScience.jpg";
import stockAnalysisImg from "../img/stockAnalysis.jpg";
import cookingImg from "../img/cooking.jpg";
import makeupsImg from "../img/makeups.jpg";

const HomeComponent = () => {
  return (
    <main>
      <section
        className="py-5 text-center container"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold text-white">MERN Online Courses</h1>
            <br></br>
            <p className="fw-normal lead text-white fs-3">
              Enhance your knowledge and skills
            </p>
            <br></br>
            <br></br>
            <p>
              <a href="/register" className="btn btn-primary btn-lg my-2 m-3 ">
                Join Now
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src={workoutImg}
                  className="bd-placeholder-img card-img-top"
                  alt="workoutPicture"
                  width="100%"
                  height="225"
                ></img>
                <div className="card-body">
                  <p className="card-text">
                    The Right Diet, Workout, Meal Plan, Exercise Motivation,
                    Nutrition, Cardio, Home Workout.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src={webDesignImg}
                  className="bd-placeholder-img card-img-top"
                  alt="webDesignPicture"
                  width="100%"
                  height="225"
                ></img>
                <div className="card-body">
                  <p className="card-text">
                    Become a Full-Stack Web Developer. HTML, CSS, Javascript,
                    Node..., build real projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src={cookingImg}
                  className="bd-placeholder-img card-img-top"
                  alt="cookingPicture"
                  width="100%"
                  height="225"
                ></img>
                <div className="card-body">
                  <p className="card-text">
                    Cook like a pro, master the basic techniques used in the
                    World's culinary industry!
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img
                  src={stockAnalysisImg}
                  className="bd-placeholder-img card-img-top"
                  alt="stockAnalysisPicture"
                  width="100%"
                  height="225"
                ></img>
                <div className="card-body">
                  <p className="card-text">
                    Stock Market Technical Analysis, Day Trading, PT Technical
                    Analysis Trading, Candlestick, Options, Swing Trading, Chart
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src={makeupsImg}
                  className="bd-placeholder-img card-img-top"
                  alt="makeupsPicture"
                  width="100%"
                  height="225"
                ></img>
                <div className="card-body">
                  <p className="card-text">
                    Learn to create the perfect eye makeup look for any eye
                    shape. Perfect for the complete beginner or new makeup
                    artist!
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <img
                src={dataScienceImg}
                className="bd-placeholder-img card-img-top"
                alt="dataSciencePicture"
                width="100%"
                height="225"
              ></img>
              <div className="card shadow-sm">
                <div className="card-body">
                  <p className="card-text">
                    Learn Data Science step by step through real Analytics
                    examples. Data Mining, Modeling, Tableau Visualization and
                    more!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeComponent;
