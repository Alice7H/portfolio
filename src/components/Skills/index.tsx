import { skills } from '../../data';
import Certificates from './Certificates';
import Qualifications from './Qualifications';
import './Skills.scss';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">
        Tecnologias que tenho mais contato no momento:
      </h2>
      <ul className="skills-list">
        { skills.map(skill =>     
          <li className="skills-item" key={skill.id}>
            <img
              src={skill.image}
              alt={skill.name}
              width="100"
              height="100"
            />
            <div className="meter meter-filled">
              <span style={{width: skill.percent}}></span>
            </div>
          </li>
        )}
      </ul>

      <Qualifications />
      <Certificates/>
    </section>
  );
}
