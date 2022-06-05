import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { Home } from '../components/Home'
import { Service } from '../components/Service'
import { CV } from '../components/CV'
import { Portfolio } from '../components/Portfolio'
import { Contacto } from '../components/Contacto'
import { Footer } from '../components/Layout/Footer'
import { HeaderNav } from '../components/Layout/HeaderNav'
import { Proyecto } from '../components/Proyecto'





export const MyRoutes = () => {


  return (

    <BrowserRouter>
      <div className='all-page'>
      {/*Header y Navegacion*/}
      <HeaderNav></HeaderNav>

      {/*COntenido central*/}
      <section className='content'>

        <Routes>
          <Route path="/" element={<Navigate to="/Home"/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<h1 className='heading'> Error 404</h1>}/>
          <Route path="/project/:id" element={<Proyecto />} />
        </Routes>

      </section>

      {/*Footer*/}

      <Footer></Footer>
      </div>
    </BrowserRouter>
  )
}
