
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding app__bg'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contactanos</h1>
        <p className='p__opensans'>9 W 53 rd St, New York,NY 10019, USA</p>
        <p className='p__opensans'>+123-456-789</p>
        <p className='p__opensans'>+987-654-321</p>
      </div>
      <div className='app__footer-links_logo'> 
        <img src={images.gourmet} alt='footer logo' className='app__img-gourmet'/>
        <p className='p__opensans'>La mejor manera de encontrarte a ti mismo es perderte en el servicio a los demás.</p>
        <img src={images.spoon} alt='spoon'/>
        <div className='app__footer-links_icons'>
        <FiFacebook/>
        <FiTwitter/>
        <FiInstagram/>
        </div>
      </div> 
      <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Horarios De Atencion</h1>
        <p className='p__opensans'>Lunes- Viernes:</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Sabados - Domingos:</p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>
    </div> 
      <div className='footer__copyright'>
        <p className='p__opensans'>2025 Gourmet. All Rights Reserved.</p>
      </div> 
  </div>
);

export default Footer;
