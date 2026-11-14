import My_Picture_Web from "../assets/My_Picture_Web.webp";

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
            href="/Prathamesh_Mhetre_Resume.pdf"
            role="button"
            download="Prathamesh_Mhetre_Resume.pdf"
          >
            Download Resume
          </a>
        </p>
      </div>

      {/* hero-image */}
      <div id="hero-container-img">
        <img src={My_Picture_Web} alt="My Picture" />
      </div>
    </div>
  );
};

export default Hero;
