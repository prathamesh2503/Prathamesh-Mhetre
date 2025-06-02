import { IoMdMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact-area">
      <h2 style={{ textAlign: "center" }}>Contact Me</h2>
      {/* ------------------------------------------------------------------------------ */}
      <div className="card contact-card">
        <div className="card-body contact-container">
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
          <div className="contact-form">
            <hr />
            <form
              action="https://formsubmit.co/prathameshmhetre25@gmail.com"
              method="post"
            >
              <div className="mb-3 contact-input">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Please enter your fullname"
                  required
                />
              </div>
              <div className="mb-3 contact-input">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Email Id
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Please enter your email id"
                  required
                />
              </div>

              <div className="mb-3 contact-input">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  name="textarea"
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
