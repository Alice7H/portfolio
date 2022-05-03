import './Qualifications.scss';

export default function Qualifications() {
  return (
    <div className="qualifications">
      <h2 className="qualifications-title">Qualificações:</h2>
      <ul className="qualifications-list">
        <li>
          <h3>Graduação</h3>
          <p>Análise e Desenvolvimento de Sistemas na FATEC-Itu</p>
        </li>
        <li>
          <h3>Cursos</h3>
          <p>Alura, Freecodecamp e Udemy</p>
        </li>
        <li>
          <h3>Bootcamps</h3>
          <p>Alura e Rocketseat</p>
        </li>
        <li>
          <h3>Experiência</h3>
          <p> Estágio na Tec'events</p>
        </li>
        <li>
          <h3>Outras experiências</h3>
          <p>Venda e cultivo de orquídeas, cactos e suculentas</p>
        </li>
      </ul>
    </div>
  )
}
