import React from 'react'
import './about.css'
import ME from '../../Assets/meabout.jpg'
import {FaUserTie} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import {FaFolder} from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>Qualification</h5>
              <small>MCA from NIT Calicut</small>
            </article>

            <article className='about__card'>
              <FaUserTie className='about__icon'/>
              <h5>Profession</h5>
              <small>Full Stack Developer</small>
            </article>

            <article className='about__card'>
              <FaFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
            
            
          </div>
          <p>
          A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.  </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About