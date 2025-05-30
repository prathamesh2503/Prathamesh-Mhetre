import { MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact-area">
      <h2 style={{ textAlign: "center" }}>Contact Me</h2>

      {/* ------------------------------------------------------------------------------ */}

      <div className="contact-area-section" style={{ height: "min-content" }}>
        {/* Left Area */}
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

        {/* Right Area */}
        <div className="contact-right-area">
          <div className="contact-data d-flex">
            <div>
              <MdEmail />
            </div>
            <a
              href="mailto:prathameshmhetre25@gmail.com"
              className="text-decoration-none"
              style={{ paddingLeft: "8px", color: "black" }}
            >
              prathameshmhetre25@gmail.com{" "}
            </a>
          </div>
          <div className="contact-data d-flex">
            <div>
              <FaMobileAlt />
            </div>
            <p style={{ paddingLeft: "8px" }}>9405798325</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
