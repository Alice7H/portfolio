import './Banner.scss';
import './particle-canvas';

export default function Banner() {
  return (
    <>
    <div className='canvas-container'>
      <canvas id='canvas'></canvas>
    </div>
    <section className='banner'>
    <div className='left'>
      <h1 className="banner-title">Olá, eu sou Alice</h1>
      <h2 className="banner-subtitle">Desenvolvedora Front-End Jr.</h2>
    </div>
    <div className="right">
      <img src="https://uploaddeimagens.com.br/images/003/168/916/original/my_avatar2.png?1617083278" 
      alt="my avatar" className="avatar"
      />
    </div>
  </section>
  </>
  )
}
