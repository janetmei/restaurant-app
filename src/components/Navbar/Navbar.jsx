import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  
  const [toogleMenu, setToogleMenu] = useState (false);
  
  return (
<nav className='app__navbar'>
  <div className='app__navbar-logo'>
    <img src={images.gourmet} alt='logo app' />
  </div>
    <ul className='app__navbar-links'>
      <li className='pi__opensans'> <a href="#home">Home</a></li>
      <li className='pi__opensans'> <a href="#about">Sobre Nosotros</a></li>
      <li className='pi__opensans'> <a href="#menu">Menu</a></li>
      <li className='pi__opensans'> <a href="#awars">Premios</a></li>
      <li className='pi__opensans'> <a href="#contact">Contacto</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#login" className='pi__opensans'>Registrarse</a>
    <div />
      <a href="#reservas" className='pi__opensans'>Reservas</a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToogleMenu(true)} />
        
        {toogleMenu && (
        <div className='app__navbar-smallscreen-overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToogleMenu(false)} />
        <ul className='app__navbar-smallscreen_links '>
          <li className='pi__opensans'> <a href="#home">Home</a></li>
          <li className='pi__opensans'> <a href="#about">Sobre Nosotros</a></li>
          <li className='pi__opensans'> <a href="#menu">Menu</a></li>
          <li className='pi__opensans'> <a href="#awars">Premios</a></li>
          <li className='pi__opensans'> <a href="#contact">Contacto</a></li>
        </ul>
        </div>
      )
      }

    </div>
</nav>    
)
}

export default Navbar;
