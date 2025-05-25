import Skills from "./Skills";
const AboutMe = () => {
  return (
    <div className="about-me-area">
      <div className="card shadow-lg mb-3 about-me-card">
        <h1 style={{ margin: "10px", textAlign: "center" }}>About Me</h1>
        <div className="row g-0">
          <div className="col-md-12">
            <div className="card-body">
              <div className="card-text" style={{ fontSize: "1.2rem" }}>
                <div>
                  <div>
                    Hello I am Prathamesh, I have 2 years of experience as an
                    Implementation & Support Engineer, where I gained a strong
                    understanding of the software development lifecycle, client
                    requirements, and UI/UX challenges.
                  </div>
                  <div>
                    I am now seeking to transition into a frontend developer
                    role, where I can leverage my support experience and
                    frontend skills to build efficient and user-friendly
                    interfaces.
                  </div>
                </div>
              </div>
              <hr />
              <h2 style={{ textAlign: "center" }}>Work Experience</h2>
              <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div
                    className="card h-100 shadow"
                    style={{ height: "300px", overflow: "auto" }}
                  >
                    <div className="card-body">
                      <h3 className="card-title">
                        Implementation & Support Engineer
                      </h3>
                      <h4>Monarch IT Solutions Pvt Ltd</h4>
                      <h6>June 2023 – Present</h6>
                      <hr />
                      <div className="card-text">
                        <h5>Key Resposibilities</h5>
                        <ul>
                          <li>Collect and document client requirements.</li>
                          <li>Prepare software workflow documentation.</li>
                          <li>
                            Explain software flow to the development team.
                          </li>
                          <li>Conduct manual testing after deployment.</li>
                          <li>
                            Handle database operations (e.g., running queries,
                            verifying data) during testing.
                          </li>
                          <li>
                            Report and track bugs using Jira; retest after
                            fixes.
                          </li>
                          <li>Give software demos to clients.</li>
                          <li>
                            Resolve client issues in the live environment.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div
                    className="card h-100 shadow"
                    style={{ height: "300px", overflow: "auto" }}
                  >
                    <div className="card-body">
                      <h3 className="card-title">
                        Graduate Apprentice Trainee
                      </h3>
                      <h4>Bharat Electronics Limited</h4>
                      <h6>Feb 2022 – March 2023</h6>
                      <hr />
                      <div className="card-text">
                        <h5>Key Resposibilities</h5>
                        <ul>
                          <li>
                            Perform PCB testing as per PTP and troubleshoot if
                            results are not as expected.
                          </li>
                          <li>
                            Conduct network testing between two encryption
                            devices.
                          </li>
                          <li>
                            Prepare detailed test reports and present them to
                            management.
                          </li>
                          <li>
                            Participate in client demonstrations of the device.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Skills />
              <h2 style={{ textAlign: "center", margin: "20px" }}>
                Education & Certification
              </h2>

              <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card h-100 shadow">
                    <div className="card-body">
                      <h3 className="card-title">Highest Qualification</h3>
                      <hr />
                      <h5>
                        Bachelor of Engineer in Electronics & Telecommunication{" "}
                      </h5>
                      <h5>
                        Padmabhooshan Vasantdada Patil Institute of Technology,
                        Budhgaon
                      </h5>
                      <div className="card-text">
                        Passout Year - September 2021
                      </div>
                      <div className="card-text">Percentage - 69.68%</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card h-100 shadow">
                    <div className="card-body">
                      <h3 className="card-title">Certificate</h3>
                      <hr />
                      <h5>
                        FrontEnd Development [HTML5, CSS3, JavaScript, JQuery &
                        Bootstrap]
                      </h5>
                      <div className="card-text">Issued Year: Dec 2022</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
