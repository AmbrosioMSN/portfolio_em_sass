import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/componentes/informationcontainer.sass'

function InformationContainer() {
  return (
      <section id="information">
        <div className="info-card">
          <AiFillPhone id='phone-icon' />
          <div>
            <h3>Telefone</h3>
            <p>(13) 98168-3571</p>
          </div>
        </div>

        <div className="info-card">
          <AiOutlineMail id='email-icon' />
          <div>
            <h3>E-mail</h3>
            <p>mario_conduta@hotmail.com</p>
          </div>
        </div>

        <div className="info-card">
          <AiFillEnvironment id='pin-icon' />
          <div>
            <h3>Localização</h3>
            <p>São Vicente - SP</p>
          </div>
        </div>
      </section>
  )
}

export default InformationContainer
