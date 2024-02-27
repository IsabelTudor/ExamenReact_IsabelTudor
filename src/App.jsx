import { useState } from 'react'

import './App.css'
import LogIn from './components/LogIn'
import NoLogIn from './components/NoLogIn'

function App() {
  const [isUsuario,setIsUsuario]=useState(null)

  return (
    <>
    <h1>Bienvenido a Gualapop</h1>
      {isUsuario?
      <LogIn isUsuario={isUsuario} setIsUsuario={setIsUsuario}/>:
      <NoLogIn  setIsUsuario={setIsUsuario}/>}
    </>
  )
}

export default App
