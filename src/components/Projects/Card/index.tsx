import './Card.scss';
import { IProject } from '../../../interfaces/IProject';

export default function Card({name, image, description, tags, demo, repository} : IProject ) {
  return (
    <div className="card">
        <img src={image} alt={name} className="card-image" />
        <p className="card-description">{description}</p>
        <p className="card-tech">Tecnologias utilizadas:</p>
        <p className="card-tags">
          { 
            tags.map((tag: string) =>< span key={tag} className="tag">{tag}</span>)
          }
        </p>
        <div className="card-buttons">
          { 
            demo !== '' && <a href={demo} target="_blank" rel="noreferrer" className="btn-link" aria-label="Demonstração da aplicação"> Demo </a> 
          }
          { 
            repository !== '' && <a href={repository} aria-label="Redirecionar ao repositório da aplicação" className="btn-link"> Ver no repositório </a> 
          }
        </div>
    </div>
  )
}
