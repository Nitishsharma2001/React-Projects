import React,{ Fragment } from 'react'
import data from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import tr from './tours.css'
console.log(data);
function Tours() {
    return (
        <>
            <section className='tours'>
                <h1 className='tourheading'>FEATURED <Fragment>&nbsp;</Fragment><span>TOURS</span></h1>
                <div className='tourscontainer'>
                    {data.tours.map((item) => {

                        return (
                            < div key={item.id} className='tourscard'>
                                <div className='theader'>
                                    <img className='toursimg' src={item.img} alt="unable to load" />
                                    <span className='toursdate'>{item.tourdate}</span>
                                </div>
                                <div className='tourcontent'>
                                    <h4>{item.title}</h4>
                                    <p className='tourdes'>{item.des}</p>
                                    <div className='tourfooter'>
                                        <p><span><FontAwesomeIcon icon={faMap} /></span>{item.country}</p>
                                        <p>{item.footerdays}</p>
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section >
        </>
    )
}
export default Tours;