import './Card.scss';
import { IProjects } from '../../interfaces/IProjects';

export default function Card({image, name, description, tags, link} : IProjects) {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} alt={name} className="card-image" />
        <p className="card-description">{description}</p>
        <p className="card-tech">Tecnologias utilizadas:</p>
        <p className="card-tags">{ 
          tags.map((tag,index) => 
          <span key={index} className="tag">{tag}</span>
          )}
        </p>
      </a>
    </div>
  )
}
