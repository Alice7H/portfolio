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
    image: "https://raw.githubusercontent.com/Alice7H/react-to-do/master/public/images/banner.png",
    name: "To Do List",
    description: "Projeto para adicionar, marcar como concluído e remover tarefas",
    tags: ['HTML', 'CSS', 'REACT', 'INTL'],
    demo: "",
    repository: "https://github.com/Alice7H/react-to-do"
  },
  {
    id: 3,
    image: "https://alurakut.vercel.app/logo.svg",
    name: "Alurakut",
    description: "Projeto clone do orkut",
    tags: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
    demo: "https://alurakut-alice7h.vercel.app/",
    repository: "https://github.com/Alice7H/alurakut"
  },
  {
    id: 4,
    image: `${AluracordBanner}`,
    name: "Aluracord",
    description: "Projeto de troca de mensagens",
    tags: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'SUPABASE'],
    demo: "https://aluracord-554hjuee3-alice7h.vercel.app/",
    repository: "https://github.com/Alice7H/aluracord"
  },
  {
    id: 5,
    image: `${CodeTextEditorBanner}`,
    name: "Code Text Editor",
    description: "Projeto para compartilhar códigos",
    tags: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
    demo: "https://code-text-editor-gg0m6c2ch-alice7h.vercel.app/",
    repository: "https://github.com/Alice7H/code-text-editor"
  },
  {
    id: 6,
    image: `${AluraEventTrackerBanner}`,
    name: "React: gerenciando estado com Recoil",
    description: "Este é um projeto de agendamento de eventos",
    tags: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'RECOIL'],
    demo: "",
    repository: "https://github.com/Alice7H/alura-event-tracker"
  },
  {
    id: 7,
    image: `${LetmeaskBanner}`,
    name: "LetMeAsk",
    description: "Este é um projeto que consiste em salas de Q&A (perguntas e respostas)",
    tags: ['HTML', 'REACT', 'TYPESCRIPT', 'SCSS', 'FIREBASE'],
    demo: "https://letmeask-nlw-45f71.web.app/",
    repository: ""
  },
  {
    id: 8,
    image: `https://raw.githubusercontent.com/Alice7H/react-covid-19/master/src/assets/images/banner.png`,
    name: "react-covid-19",
    description: "É um projeto com gráficos e informações sobre casos e mortes de COVID-19",
    tags: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
    demo: "",
    repository: "https://github.com/Alice7H/react-covid-19",
  },
  // {
  //   id: 9,
  //   image: `https://raw.githubusercontent.com/Alice7H/react-timecash/master/src/images/banner.png`,
  //   name: "react-timecash",
  //   description: "É um projeto para contar as horas de serviços prestados, bem como custo de viagem e produtos utilizados.",
  //   tags: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'FIREBASE', 'BOOTSTRAP', 'FORMIK', 'YUP'],
  //   demo: "",
  //   repository: "https://github.com/Alice7H/react-timecash",
  // },
  {
    id: 10,
    image: "https://raw.githubusercontent.com/Alice7H/mundo-invertido/2ed40ae119b44da6895fcd812e7e60546007671f/src/assets/images/banner/logo.svg",
    name: "Mundo Invertido",
    description: "Projeto Mundo Invertido com theme switcher do Stranger Things",
    tags: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'FIREBASE', 'TYPESCRIPT'],
    demo: "https://mundo-invertido-theta.vercel.app/",
    repository: "https://github.com/Alice7H/mundo-invertido"
  },
  {
    id: 11,
    image: "https://raw.githubusercontent.com/Alice7H/spider-verse/main/public/cover.png",
    name: "Spider-verse",
    description: "Carrossel parallax do Aranhaverso",
    tags: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NEXT.JS v13', 'TYPESCRIPT', 'FRAMER-MOTION'],
    demo: "",
    repository: "https://github.com/Alice7H/spider-verse"
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
    percent: "70%"
  },
  {
    id: 4,
    image: `${TypescriptLogo}`,
    name: "TYPESCRIPT",
    percent: "70%"
  },
  {
    id: 5,
    image: `${GitLogo}`,
    name: "GIT",
    percent: "90%"
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
