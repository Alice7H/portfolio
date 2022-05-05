import Card from './Card';
import './Projects.scss';
import { projects } from '../../data';

export default function Projects() {
  return (
    <section className="projects" id="projects">
    <h2 className="projects-title">Portfólio:</h2>
    <div className="projects-cards">
      { 
        projects.map(project => <Card key={project.id} {...project} />)
      }
    </div>
  </section>
  )
}
