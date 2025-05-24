const Hero = () => {
  return (
    <div className="hero-area">
      <div className="jumbotron">
        <div className="hero-container">
          <h1
            className="animate__animated animate__flash text-center"
            style={{ fontSize: "48px" }}
          >
            {"<Hello, World!/>"}
          </h1>
          <p style={{ fontSize: "24px" }}>
            Welcome to my portfolio. I am Prathamesh Mhetre, I am transitioning
            to frontend development
          </p>
          <p>
            <a
              className="btn btn-primary btn-lg"
              href="/Prathamesh_Resume.pdf"
              role="button"
              download="Prathamesh_Resume.pdf"
            >
              Download Resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
