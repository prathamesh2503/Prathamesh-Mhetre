import img1 from "../assets/img1.png";

const Hero = () => {
  return (
    <div className="hero-area">
      <div className="hero-container">
        {/* hero-text */}
        <div className="hero-container-child-text">
          <h1 className="">Hello, World!</h1>
          <p>I am Prathamesh Mhetre</p>
          <p className=" text-center">I am Frontend Developer</p>
          <p>
            <a
              className="btn btn-primary btn-md animate__animated animate__flash animate__slow"
              href="/Prathamesh_Resume.pdf"
              role="button"
              download="Prathamesh_Resume.pdf"
            >
              Download Resume
            </a>
          </p>
        </div>

        {/* hero-image */}
        <div className="hero-container-child-image">
          <img src={img1} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Hero;
