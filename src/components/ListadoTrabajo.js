import React from 'react'
import { Link } from 'react-router-dom';
import { works } from '../datos/trabajos'

export const ListadoTrabajos = ({limit}) => {
  return (

      <div className='work'>
        {
          works.slice(0,limit).map(work => {

            return (
              <article key={work.id} className="work-item">
                <div className='mask'>
                  <img src={"/images/" + work.id + ".jpg"} ></img>
                </div>


                <h2><Link to={"/project/" + work.id}>{work.id}</Link></h2>
                <h3>Tecnologias: {work.tecnologias}</h3><hr />
              </article>
            );
          })
        }

      </div>

  )
}
