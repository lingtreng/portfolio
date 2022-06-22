import React from 'react'
import './about.css'
import ME from '../../assets/av2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolder} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>


      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
                <img src={ME} alt=""/>
            </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>
                    1 Years Working
                  </small>
              </article>
              <article className='about__card'>
                  <FiUsers className='about__icon'/>
                  <h5>Clients</h5>
                  <small>
                    50+ Worldwide
                  </small>
              </article>
              <article className='about__card'>
                  <AiFillFolder className='about__icon'/>
                  <h5>Projects</h5>
                  <small>
                    20+ complete
                  </small>
              </article>
            </div>
          <p>
            
          </p>
          <a id="btn__lettalk" href="#contact" className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
    </div>
  </section>
  )
}

export default About