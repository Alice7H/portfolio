import './ScrollToTop.scss';

export default function ScrollToTop() {
  return(
    <button aria-label="Voltar ao topo da página"
      title="Voltar ao topo da página" 
      type="button"
      onClick={(): void => { window.scrollTo(0,0)}}
      className="icon-chevron-circle-up">
    </button>
  )
}
