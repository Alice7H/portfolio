import { IThemeMode } from '../../interfaces/IThemeMode';
import './ToggleTheme.scss';

export default function ToggleTheme({handleChangeMode}: IThemeMode) {
  return (
    <>
      <label className="switch">
        <input 
          tabIndex={0}
          type="checkbox" 
          className="toggleScreenReader" 
          onChange={handleChangeMode}
          aria-label="Switch between dark and light mode"/>
          <span className="switch-left">🌞</span>
          <span className="switch-right">🌜</span>
      </label>
    </>
    
  )
}
