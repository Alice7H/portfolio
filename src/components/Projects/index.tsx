import Card from '../Card';
import './Projects.scss';
import MaintenanceService from '../../assets/images/maintenance-service.png';

export default function Projects() {
  return (
    <section className="projects" id="projects">
    <h2 className="projects-title">Portfólio:</h2>
    <div className="projects-cards">
      <Card 
        image="https://uploaddeimagens.com.br/images/003/165/876/original/thumb_zilda.png?1617057867" 
        name="Zilda Arns Neumann"
        description="Projeto de tributo"
        tags={['HTML','CSS']}
        link="https://codepen.io/alice7h/pen/RwovXqO"
      />
       <Card 
        image="https://uploaddeimagens.com.br/images/003/179/614/original/thumb_landing_page.png?1617410873" 
        name="Landing Page"
        description="Este é um projeto de landing page"
        tags={['HTML','CSS']}
        link="https://codepen.io/alice7h/pen/dyOxXdE"
      /> 
       <Card 
        image="https://uploaddeimagens.com.br/images/003/165/958/original/thumb_restaurant.png?1617058534" 
        name="Fake Restaurant"
        description="Divulgação de um restaurante fake"
        tags={['HTML','CSS']}
        link="https://codepen.io/alice7h/pen/mdRdaje"
      /> 
       <Card 
        image="https://alurakut.vercel.app/logo.svg" 
        name="Clone do Orkut"
        description="Projeto clone do orkut"
        tags={['HTML','CSS', 'JAVASCRIPT','REACT']}
        link="https://alurakut-alice7h.vercel.app/"
      />  
        <Card 
        image={MaintenanceService} 
        name="Aluracord"
        description="Projeto baseado no Discord"
        tags={['HTML','CSS', 'JAVASCRIPT','REACT','SUPABASE']}
        link="https://aluracord-554hjuee3-alice7h.vercel.app/"
      /> 
        <Card 
        image={MaintenanceService}
        name="Code Text Editor"
        description="Projeto para compartilhar códigos"
        tags={['HTML','CSS', 'JAVASCRIPT','REACT']}
        link="https://code-text-editor-gg0m6c2ch-alice7h.vercel.app/"
      />  
       <Card 
        image="https://raw.githubusercontent.com/Alice7H/alura-event-tracker/master/src/assets/banner.png" 
        name="React: gerenciando estado com Recoil"
        description="Este é um projeto de agendamento de eventos"
        tags={['HTML','CSS', 'JAVASCRIPT','REACT', 'RECOIL']}
        link="https://github.com/Alice7H/alura-event-tracker"
      /> 
    </div>
  </section>
  )
}
