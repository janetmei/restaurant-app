import React from 'react'
import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css'


const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title='Noticias'/>
        <h1 className='headtext__cormorant'>Suscribete A Nuestro Canal</h1>
        <p className='p__cormorant'>Y No Te Pierdas Las Ultimas Noticias</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type="email" placeholder='Escribe Tu Email'/>
        <button type="button" className='custom__button'>Suscribirse</button>
      </div>
    </div>
        )
      }
         



    

export default Newsletter;
