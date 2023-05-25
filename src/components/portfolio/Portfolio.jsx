import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/placementcell.jpg'
import IMG2 from '../../Assets/hostel.jpg'
import IMG3 from '../../Assets/emagazine.jpg'

const data=[
  {
    id: 1,
    image: IMG1,
    title: 'Placement Cell Management System Web Application using Html, Css, Javascript and Bootstrap for frontend and Flask for Backend',
    github: 'https://github.com/mayank171/Placement-Cell-Management-System',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Hostelersbay Ruby on Rails Web Project',
    github: 'https://github.com/dkbisht/hostelersbayrails',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Nitc E- Magazine Android Appliation using Android Studio (Java) for frontend and backend and Google Firebase  Database',
    github:'https://github.com/alokpandeygzp/NITC-eMagazine' ,
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
          {
            data.map(({id, image, title, github})=>{
                return(
                  <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">         
                    <a href={github} className='btn'>Github</a>
                  </div>
                  </div>
                </article>       
               )  
            })
          }     
      </div>
    </section>
  )
}

export default Portfolio
