import React from 'react';
import './footer.scss';
import { LogoKabayan, Facebook, Youtube, Whatsapp, Instagram } from '../../../assets';

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoKabayan} alt="logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={Facebook} />
          <Icon img={Youtube} />
          <Icon img={Whatsapp} />
          <Icon img={Instagram} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  )
}

export default Footer
