import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://in.linkedin.com/in/dikshant-bisht-3a2a01223?trk=people-guest_people_search-card' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/dkbisht' target="_blank"><BsGithub /></a>
        <a href='https://www.instagram.com/dkbisht/' target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials