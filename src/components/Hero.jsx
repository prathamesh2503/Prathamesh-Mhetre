import My_Picture_Web from "../assets/My_Picture_Web.webp";

const Hero = () => {
  return (
    <div className="hero-container">
      <img
        id="hero-image"
        src={My_Picture_Web}
        alt="My Picture"
        height="250"
        width="250"
      />
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
    </div>
  );
};

export default Hero;
