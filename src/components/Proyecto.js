import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { works } from '../datos/trabajos'

export const Proyecto = () => {

    const [proyecto, setProyecto] = useState({});
    const params = useParams();
    useEffect(() => {
        let proyecto = works.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0]);
    }, []);

    return (
        <div className='page page-work'>
            <div className='mask'>
                <img src={"/images/" + proyecto.id + ".jpg"} ></img>
            </div>
            <h1 className='heading'>{proyecto.id}</h1>
            <h2>{proyecto.tecnologias}</h2>
            <p>{proyecto.descripcion}</p>

        </div>
    )
}
