import Certificates from './Certificates';
import Qualifications from './Qualifications';
import './Skills.scss';
import Html5Logo from '../../assets/images/html5.png';
import Css3Logo from '../../assets/images/css3.png';
import JavascriptLogo from '../../assets/images/javascript.png';
import TypescriptLogo from '../../assets/images/typescript.png';
import StyledComponentLogo from '../../assets/images/styled-components.png';
import BootstrapLogo from '../../assets/images/bootstrap.png';
import SassLogo from '../../assets/images/sass.png';
import GitLogo from '../../assets/images/git.png';
import ReactLogo from '../../assets/images/react.png';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">
        Tecnologias que tenho mais contato no momento:
      </h2>
      <ul className="skills-list">
        <li className="skills-items">
          <img
            src={Html5Logo}
            alt="html"
            width="100"
            height="100"
          />

          <div className="meter meter-filled">
            <span style={{ width: "85%" }}></span>
          </div>
        </li>
        <li className="skills-items">
          <img
            src={Css3Logo}
            alt="CSS"
            width="100"
            height="100"
          />

          <div className="meter meter-filled">
            <span style={{ width: "85%" }}></span>
          </div>
        </li>
        <li className="skills-items">
          <img
            src={JavascriptLogo}
            alt="JAVASCRIPT"
            width="100"
            height="100"
          />

          <div className="meter meter-filled">
            <span style={{ width: "70%" }}></span>
          </div>
        </li>
        <li className="skills-items">
          <img
            src={ReactLogo}
            alt="REACTJS"
            width="100"
            height="100"
          />

          <div className="meter meter-filled">
            <span style={{ width: "60%" }}></span>
          </div>
        </li>
        <li className="skills-items">
          <img
            src={TypescriptLogo}
            alt="TYPESCRIPT"
            width="100"
            height="100"
          />

          <div className="meter meter-filled">
            <span style={{ width: "60%" }}></span>
          </div>
        </li>
        <li className="skills-items">
          <img
            src={GitLogo}
            alt="GIT"
            width="100"
            height="100"
          />

          <div className="meter meter-filled">
            <span style={{ width: "50%" }}></span>
          </div>
        </li>
        <li className="skills-items">
          <img
            src={SassLogo}
            alt="SASS"
            width="100"
            height="100"
          />

          <div className="meter meter-filled">
            <span style={{ width: "40%" }}></span>
          </div>
        </li>
        <li className="skills-items">
          <img
            src={BootstrapLogo}
            alt="BOOTSTRAP"
            width="100"
            height="100"
          />

          <div className="meter meter-filled">
            <span style={{ width: "60%" }}></span>
          </div>
        </li>
        <li className="skills-items">
          <img
            src={StyledComponentLogo}
            alt="STYLED COMPONENTS"
            width="100"
            height="100"
          />

          <div className="meter meter-filled">
            <span style={{ width: "35%" }}></span>
          </div>
        </li>
      </ul>

      <Qualifications />
      <Certificates/>
    </section>
  );
}
