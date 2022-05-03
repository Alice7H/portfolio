import './styles/App.scss';
import { useState } from 'react';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

function App() {
  const [darktheme, setDarkTheme] = useState(true);
  
  function handleChangeMode(): void{
    setDarkTheme(!darktheme);
  }

  return (
    <>
      <Header handleChangeMode={handleChangeMode} />
      <main className={darktheme ? 'dark-theme' : 'light-theme'}>
        <Banner />
        <AboutMe />
        <Projects />
        <Skills />   
        <ScrollToTop/>
      </main>
      <Footer />
    </>
  );
}

export default App;
