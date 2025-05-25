const AboutMe = () => {
  return (
    <div className="about-me-area">
      <h2>About Me</h2>
      <div className="card shadow-lg mb-3 about-me-card">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text ">
                Hello, I am Prathamesh, I have successfully completed external
                training in frontend development, which sparked a strong passion
                for building engaging and user-friendly web interfaces.
              </p>
              <hr />
              <h4 style={{ textAlign: "center" }}>Education</h4>
              <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">Highest Qualification</h5>
                      <p className="card-text">
                        B.E degree in electronics and telecommunication from
                        shivaji university.
                      </p>
                      <p>Completed: September 2021</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">External Training</h5>
                      <p className="card-text">
                        Frontend development training from institute vethreesoft
                        technologies.
                      </p>
                      <p>Completed: December 2022</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <h4 style={{ textAlign: "center" }}>Work Experience</h4>
              <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">
                        Graduate Apprentice Trainee - BEL, Bengaluru
                      </h5>
                      <p className="card-text">
                        I had the opportunity to work on a project focused on
                        the development and testing of an encryption device,
                        gaining hands-on experience with hardware and network
                        troubleshooting.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">
                        Implementation & Support Engineer - Monarch IT Solutions
                      </h5>
                      <p className="card-text">
                        I joined my current organization as an Implementation
                        and Support Engineer, contributing to the software
                        development of the Kolhapur Municipal Corporation
                        website.
                      </p>
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
