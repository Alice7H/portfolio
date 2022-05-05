import './Banner.scss';
import './particle-canvas';
import MyAvatar from '../../assets/images/my-avatar.png';

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
      <img src={MyAvatar} 
      alt="my avatar" className="avatar"
      />
    </div>
  </section>
  </>
  )
}
