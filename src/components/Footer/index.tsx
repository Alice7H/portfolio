import './Footer.scss';
import ScrollToTop from '../ScrollToTop';

export default function Footer() {
  return (
    <footer className="footer">
       <ScrollToTop/>
      <div className="footer-top">
        <div className="footer-location">
          <h5>Localização</h5>
          <p>Vila Santa Terezinha, Sorocaba, São Paulo - BR</p>
        </div>
        <div className="footer-media"> 
          <h5>Redes sociais</h5>
          <div className="row">
            <a href="https://www.linkedin.com/in/alice-hata/" target="_blank" rel="noreferrer"
            className="footer-media__linkedin" aria-label="go to LinkedIn">  
            </a>     
            <a href="https://github.com/Alice7H" target="_blank" rel="noreferrer" className="footer-media__github" aria-label="go to Github">
            </a>
            <a href="https://www.facebook.com/alice.hata9" target="_blank" rel="noreferrer" className="footer-media__facebook" aria-label="go to Facebook">
            </a>        
            <a href="https://api.whatsapp.com/send?phone=5511975724664&text=%20Ol%C3%A1%2C%20tudo%20bem%3F%20Responderei%20assim%20que%20puder.%20Como%20posso%20te%20ajudar%3F" 
            target="_blank" rel="noreferrer" className="footer-media__whatsapp" aria-label="go to WhatsApp">
            </a>    
          </div> 
        </div>
        <div className="footer-contact" id="contact">
          <h5>Contato</h5>
          <p>
            <a href="mailto: alicehata9@gmail.com" target="_blank" rel="noreferrer" className="footer-contact__link">
              alicehata9@gmail.com
            </a>
          </p>
          <p> 
            <a href="https://api.whatsapp.com/send?phone=5511975724664&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Obrigada%20pelo%20contato%2C%20responderei%20o%20mais%20breve%20poss%C3%ADvel." target="_blank" rel="noreferrer" className="footer-contact__link">
              +55 11 97572 4664
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">              
          <p>Ícones encontrados no site <a href="https://icons8.com" target="_blank" rel="noreferrer" aria-label="Link para os ícones da aplicação" >Icons8</a></p>
          <p>Desenvolvido em 2022</p>
      </div>
    </footer>
  );
}
