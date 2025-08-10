import comingSoon from "../assets/comingSoon.png";
import utkarshTuition from "../assets/utkarshTuition.png";
import RedirectToProjectOne from "./RedirectToProjectOne";
import GithubRepoProjectOne from "./GithubRepoProjectOne";
const Project = () => {
  return (
    <div className="project-area">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div className="project-card-area d-flex p-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src={utkarshTuition}
                className="card-img-top img-fluid w-100 d-block mx-auto p-3"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Utkarsh Tuition Version 1</h5>
                <p className="card-text">
                  A responsive website developed with html5, css3 & JavaScript
                  to showcase UI development skills
                </p>
                <div className="project-button">
                  <RedirectToProjectOne />
                  <GithubRepoProjectOne />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={comingSoon}
                className="card-img-top img-fluid w-50 d-block mx-auto p-3"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Project Two</h5>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tenetur doloribus quis natus, distinctio rerum corporis!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={comingSoon}
                className="card-img-top img-fluid w-50 d-block mx-auto p-3"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Project Three</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloribus optio delectus molestiae ipsum blanditiis commodi?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
