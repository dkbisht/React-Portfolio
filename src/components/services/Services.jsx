import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>Qualification</h5>
      <h2>Education</h2>

      <div className="container service__container">
      <article className='service'>
          <div className="service__head">
            <h3>12th</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information Technology</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Govt. Model Sr. sec. School 37/D</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>82.8%</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Chandigarh</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Bachelors</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Bachelors of Computer Applications</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Post Graduate Govt. College 11D</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>72.8%</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Chandigarh</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Masters</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Masters of Computer Applications</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>National Institute of Technology, Calicut</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>9.11 CGPA</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Kerala</p>
            </li>
          </ul>
        </article>

      </div>

    </section>
  )
}
export default Services
