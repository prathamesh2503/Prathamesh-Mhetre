import { IoMdMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact-area">
      <h2 style={{ textAlign: "center" }}>Contact Me</h2>

      {/* ------------------------------------------------------------------------------ */}
      <div class="card">
        <div class="card-body">
          <div className="contact-mail-id">
            <IoMdMail />
            <a
              href="mailto:prathameshmhetre25@gmail.com"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "15px",
                paddingLeft: "5px",
              }}
            >
              prathameshmhetre25@gmail.com
            </a>
          </div>
          <div
            className="contact-mobile-no"
            style={{
              fontSize: "15px",
              paddingLeft: "5px",
            }}
          >
            <FaMobileAlt />
            <a
              href="tel:+919405798325"
              style={{
                textDecoration: "none",
                color: "black",
                paddingLeft: "5px",
              }}
            >
              +91 9405798325
            </a>
          </div>
        </div>
      </div>
      {/* <div className="contact-area-section" style={{ height: "min-content" }}> 
        {/* Left Area 
        <div className="contact-left-area">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Please enter your fullname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Email Id
            </label>
            <input
              type="email"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Please enter your email id"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>

        {/* Right Area 
        <div className="contact-right-area">
          
          <div className="contact-data d-flex">
            <div>
            </div>
          </div>
        </div>
      {/* </div>  */}
    </div>
  );
};

export default Contact;
