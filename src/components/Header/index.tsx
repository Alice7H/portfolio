import ToggleTheme from '../ToggleTheme';
import './Header.scss';
import { IThemeMode } from '../../interfaces/IThemeMode';

export default function Header({handleChangeMode}: IThemeMode) {
  return (
    <header className="header">
        <h1 className="header-title">Alice Hata</h1>
        <nav>
          <ul className='header-list'>
            <li className='header-list__item'>
              <a href='/'>Home</a>
            </li>
            <li className='header-list__item'>
              <a href='#about-me'>Sobre Mim</a>
            </li>
            <li className='header-list__item'>
              <a href='#projects'>Projetos</a>
              </li>
            <li className='header-list__item'>
              <a href='#skills'>Habilidades</a>
            </li>
            <li className='header-list__item'>
              <a href='#contact'>Contato</a>
            </li>
            <li className='header-list__item' tabIndex={-1}>
              <a href='/' tabIndex={-1}><ToggleTheme handleChangeMode={handleChangeMode}/></a>
            </li>
          </ul>
        </nav>
      </header>
  )
}
