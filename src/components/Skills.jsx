import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
const Skills = () => {
  return (
    <div className="skills-area">
      <h2 style={{ textAlign: "center", margin: "20px" }}>Skills</h2>
      <div className="skill-cards-area d-flex gap-3">
        <div className="card skill-card" style={{ width: "10rem" }}>
          <div className="card-body skill-card-body">
            <div className="skill-card-icon">
              <FaHtml5 />
            </div>
            <h5 className="card-title">HMTL</h5>
          </div>
        </div>
        <div className="card skill-card" style={{ width: "10rem" }}>
          <div className="card-body skill-card-body">
            <div className="skill-card-icon">
              <FaCss3Alt />
            </div>
            <h5 className="card-title">CSS</h5>
          </div>
        </div>
        <div className="card skill-card" style={{ width: "10rem" }}>
          <div className="card-body skill-card-body">
            <div className="skill-card-icon">
              <IoLogoJavascript />
            </div>
            <h5 className="card-title">JavaScript</h5>
          </div>
        </div>
        <div className="card skill-card" style={{ width: "10rem" }}>
          <div className="card-body skill-card-body">
            <div className="skill-card-icon">
              <FaReact />
            </div>
            <h5 className="card-title">React</h5>
          </div>
        </div>
        <div className="card skill-card" style={{ width: "10rem" }}>
          <div className="card-body skill-card-body">
            <div className="skill-card-icon">
              <FaBootstrap />
            </div>
            <h5 className="card-title">Bootstrap</h5>
          </div>
        </div>
        <div className="card skill-card" style={{ width: "10rem" }}>
          <div className="card-body skill-card-body">
            <div className="skill-card-icon">
              <FaGitAlt />
            </div>
            <h5 className="card-title">Git</h5>
          </div>
        </div>
        <div className="card skill-card" style={{ width: "10rem" }}>
          <div className="card-body skill-card-body">
            <div className="skill-card-icon">
              <FaNodeJs />
            </div>
            <h5 className="card-title">NodeJs</h5>
          </div>
        </div>
        <div className="card skill-card" style={{ width: "10rem" }}>
          <div className="card-body skill-card-body">
            <div className="skill-card-icon">
              <SiExpress />
            </div>
            <h5 className="card-title">ExpressJs</h5>
          </div>
        </div>
        <div className="card skill-card" style={{ width: "10rem" }}>
          <div className="card-body skill-card-body">
            <div className="skill-card-icon">
              <RiSupabaseFill />
            </div>
            <h5 className="card-title">Supabase</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
