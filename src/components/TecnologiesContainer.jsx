import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact } from 'react-icons/di'

import '../styles/componentes/tecnologiescontainer.sass'

const tecnologies = [
  {id: 'html', name: 'HTML5', icon: <DiHtml5/>},
  {id: 'css', name: 'CSS3', icon: <DiCss3/>},
  {id: 'js', name: 'JavaScript', icon: <DiJsBadge/>},
  {id: 'node', name: 'Node.js', icon: <DiNodejsSmall/>},
  {id: 'mysql', name: 'MqSQL', icon: <DiMysql/>},
  {id: 'react', name: 'React', icon: <DiReact/>},
]

function TecnologiesContainer() {
  return (
    <section className="tecnologies-container">
      <h2>Tecnologias</h2>
      <div className='tecnologies-grid'>
        {tecnologies.map((tech) => (
          <div className='tecnologies-card' id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='tecnologies-info'>
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TecnologiesContainer
