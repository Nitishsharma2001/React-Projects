import React, { Fragment } from 'react'
import services from './services.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import data from './data.jsx';

console.log(data);
function OurServices() {
  return (
    <>
      <section className='Ourservices'>
        <h1 className='our'>OUR <Fragment>&nbsp;</Fragment> <span className='services'> SERVICES</span></h1>
        <div className='parent'>
          <div className='services-container'>

           {data.OurServices.map((data)=>{
            const {logo,title,des}=data
            return <><div className='card'>
            <div className='icon-container'>
              <span className='icons'><FontAwesomeIcon icon={logo} /></span>
            </div>
            <div>
              <h3>{title}</h3>
              <p>{des}</p>
            </div>
          </div></>
           })

           };

            {/* <div className='card'>
              <div className='icon-container'>
                <span className='icons'><FontAwesomeIcon icon={faWallet} /></span>
              </div>
              <div>
                <h3>Saving Money</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.</p>
              </div>
            </div> */}
            {/* <div className='card'>
              <div className='icon-container'>
                <span className='icons'><FontAwesomeIcon icon={faWallet} /></span>
              </div>
              <div>
                <h3>Saving Money</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.</p>
              </div>
            </div>

            <div className='card'>
              <div className='icon-container'>
                <span className='icons'><FontAwesomeIcon icon={faWallet} /></span>
              </div>
              <div>
                <h3>Saving Money</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.</p>
              </div>
            </div> */}

          </div>
        </div>
      </section>
    </>
  )
}
export default OurServices