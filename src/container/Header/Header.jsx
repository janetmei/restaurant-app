import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Persigue El Nuevo Sabor" />
      <h1 className='app__header-h1'>La Clave Para La Buena Comida</h1>
      <p className='pi__opensans' style={{ margin: '2rem 0'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
      <button type='button' className='custom__button'>Explorar Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header image" />
    </div>
  </div>
);

export default Header;
