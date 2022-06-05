import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajo'

export const Home = () => {

  return (
    <div className='home'>

      <h2>Hola mi nombre es Diego Romero y soy desarrollador web orientado al
        framework de React,Ubicado en Chile,Actualmente buscando trabajo
        como desarollador <strong>junior FrontEnd</strong>.
      </h2>

      <h2 className='title'>Autodidacta dispuesto a aprender nuevas tecnologias y aprender
        mejores practicas de codificacion y metodologias agiles para aumentar
        mis conocimientos en programacion. <Link to="/Contacto">Pincha aqui para ir al Contacto</Link>
      </h2>

      <section className='lasts-Works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>estos son algunas de mis practicas en desarrollo web</p>


      </section>


      
        <ListadoTrabajos limit="2" />
 
    </div>

  )
}
