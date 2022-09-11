import React from 'react'

import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TecnologiesContainer from './TecnologiesContainer'

import '../styles/componentes/maincontent.sass'


function MainContent() {
  return (
    <main id='main-content'>  
    <AboutContainer/>
    <TecnologiesContainer/>
    <ProjectsContainer/>
    </main> 
  )
}

export default MainContent
