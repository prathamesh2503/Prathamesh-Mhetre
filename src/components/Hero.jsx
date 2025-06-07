import img1 from "../assets/img1.png";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* hero-text */}
      <div id="hero-container-text">
        <h1 className="">Hello, World!</h1>
        <p>I am Prathamesh Mhetre</p>
        <p>I am Frontend Developer</p>
        <p>
          <a
            className="btn btn-primary btn-sm animate__animated animate__flash animate__slow"
            href="/Prathamesh_Resume.pdf"
            role="button"
            download="Prathamesh_Resume.pdf"
          >
            Download Resume
          </a>
        </p>
      </div>

      {/* hero-image */}
      <div id="hero-container-img">
        <img src={img1} alt="..." />
      </div>
    </div>
  );
};

export default Hero;
