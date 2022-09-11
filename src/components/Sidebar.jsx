import React from 'react'

import Avatar from '../img/eu.jpeg'

import '../styles/componentes/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

function Sidebar() {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt="Mario Ambrosio" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="" className="btn">
        Download Currículo
      </a>
    </aside>
  )
}

export default Sidebar
