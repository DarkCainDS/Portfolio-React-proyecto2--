import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>

      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='mailto:Diego.romero.s@hotmail.com'>
        <input type="text" placeholder='Nombre'/><br/>
        <input type="text" placeholder='apellido'/><br/>
        <input type="text" placeholder='Email'/><br/>
        <textarea placeholder="Reason to Contact"/><br/>
        <input type="submit" placeholder='Send'/>
      </form>
      
    </div>
  )
}
