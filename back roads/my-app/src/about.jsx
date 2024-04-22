import React from 'react'
import about from './about.css'
import data from './data.jsx'

console.log(data)

// console.log("url of images are as follows",images)
function About() {
    return (
        <>
            <section className='about'>
                <h2>About<span>Us</span></h2>
                <div className='about-content section-center'>
                    <div><img src={data.images.about} alt="unable to load" /></div>
                    <div><h3 className='about-heading'>Explore The Difference</h3>
                        <p className='para-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>
                        <p className='para-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>
                        <div className='btn-container'><button className='btn-about'>READ MORE</button></div>
                        </div>
                </div>
            </section>
        </>
    )
}
export default About