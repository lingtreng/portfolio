import React from 'react'
import './about.css'
import ME  from '../../assets/avt2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolder} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>About me</h1>


      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
                <img src={ME} alt=""About Image />
            </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>
                    3+ Years Working
                  </small>
              </article>
              <article className='about__card'>
                  <FiUsers className='about__icon'/>
                  <h5>Clients</h5>
                  <small>
                    200+ Worldwide
                  </small>
              </article>
              <article className='about__card'>
                  <AiFillFolder className='about__icon'/>
                  <h5>Projects</h5>
                  <small>
                    80+ complete
                  </small>
              </article>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Dolore,
                quod saepe dignissimos, reiciendis commodi quidem architecto
                libero tempora harum eum sed maxime ducimus molestiae,
                atque suscipit perferendis cum enim eius.
            </p>
            <a href="#contact" className='btn btn-primary'>
              Let's Talk
            </a>
        </div>
      </div>
    </section>
  )
}

export default About