import AluracordBanner from './assets/images/aluracord-banner.png';
import CodeTextEditorBanner from './assets/images/code-text-editor-banner.png';
import AluraEventTrackerBanner from './assets/images/event-tracker.png';
import LetmeaskBanner from './assets/images/letmeask.png';
import Html5Logo from './assets/images/html5.png';
import Css3Logo from './assets/images/css3.png';
import JavascriptLogo from './assets/images/javascript.png';
import TypescriptLogo from './assets/images/typescript.png';
import StyledComponentLogo from './assets/images/styled-components.png';
import BootstrapLogo from './assets/images/bootstrap.png';
import SassLogo from './assets/images/sass.png';
import GitLogo from './assets/images/git.png';
import ReactLogo from './assets/images/react.png';

export const projects = [
  {
    id: 0,
    image: "https://uploaddeimagens.com.br/images/003/165/876/original/thumb_zilda.png?1617057867",
    name: "Zilda Arns Neumann",
    description: "Projeto de tributo",
    tags: ['HTML','CSS'],
    demo: "https://codepen.io/alice7h/pen/RwovXqO",
    repository: ""
  },
  {
    id: 1,
    image: "https://uploaddeimagens.com.br/images/003/179/614/original/thumb_landing_page.png?1617410873",
    name: "Landing Page",
    description: "Este é um projeto de landing page",
    tags: ['HTML','CSS'],
    demo: "https://codepen.io/alice7h/pen/dyOxXdE",
    repository: ""
  },
  {
    id: 2,
    image: "https://uploaddeimagens.com.br/images/003/165/958/original/thumb_restaurant.png?1617058534",
    name: "Fake Restaurant",
    description: "Divulgação de um restaurante fake",
    tags: ['HTML','CSS'],
    demo: "https://codepen.io/alice7h/pen/mdRdaje",
    repository: ""
  },
  {
    id: 3,
    image: "https://alurakut.vercel.app/logo.svg",
    name: "Alurakut",
    description: "Projeto clone do orkut",
    tags: ['HTML','CSS', 'JAVASCRIPT','REACT'],
    demo: "https://alurakut-alice7h.vercel.app/",
    repository: ""
  },
  {
    id: 4,
    image: `${AluracordBanner}`,
    name: "Aluracord",
    description: "Projeto de troca de mensagens",
    tags: ['HTML','CSS', 'JAVASCRIPT','REACT','SUPABASE'],
    demo: "https://aluracord-554hjuee3-alice7h.vercel.app/",
    repository: ""
  },
  {
    id: 5,
    image: `${CodeTextEditorBanner}`,
    name: "Code Text Editor",
    description: "Projeto para compartilhar códigos",
    tags: ['HTML','CSS', 'JAVASCRIPT','REACT'],
    demo: "https://code-text-editor-gg0m6c2ch-alice7h.vercel.app/",
    repository: "https://github.com/Alice7H/code-text-editor"
  },
  {
    id: 6,
    image: `${AluraEventTrackerBanner}`,
    name: "React: gerenciando estado com Recoil",
    description: "Este é um projeto de agendamento de eventos",
    tags: ['HTML','CSS', 'JAVASCRIPT','REACT', 'RECOIL'],
    demo: "",
    repository: "https://github.com/Alice7H/alura-event-tracker"
  },
  {
    id: 7,
    image: `${LetmeaskBanner}`,
    name: "LetMeAsk",
    description: "Este é um projeto que consiste em salas de Q&A (perguntas e respostas)",
    tags: ['HTML','REACT','TYPESCRIPT','SCSS', 'FIREBASE'],
    demo: "https://letmeask-nlw-45f71.web.app/",
    repository: ""
  }
]

export const skills = [
 {
   id: 0,
   image: `${Html5Logo}`,
   name: "HTML",
   percent: "85%"
 }, 
 {
    id: 1,
    image: `${Css3Logo}`,
    name: "CSS",
    percent: "85%"
  }, 
  {
    id: 2,
    image: `${JavascriptLogo}`,
    name: "JAVASCRIPT",
    percent: "70%"
  }, 
  {
    id: 3,
    image: `${ReactLogo}`,
    name: "REACTJS",
    percent: "60%"
  }, 
  {
    id: 4,
    image: `${TypescriptLogo}`,
    name: "TYPESCRIPT",
    percent: "60%"
  }, 
  {
    id: 5,
    image: `${GitLogo}`,
    name: "GIT",
    percent: "50%"
  }, 
  {
    id: 6,
    image: `${SassLogo}`,
    name: "SASS",
    percent: "40%"
  }, 
  {
    id: 7,
    image: `${BootstrapLogo}`,
    name: "BOOTSTRAP",
    percent: "60%"
  },
  {
    id: 8,
    image: `${StyledComponentLogo}`,
    name: "STYLED COMPONENTS",
    percent: "35%"
  },
]
