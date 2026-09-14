import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BarraImmagine from './components/BarraImmagine'
import NavIcone from './components/NavIcone'
import Footer from './components/Footer'
import BarraFooter from './components/BarraFooter'

function App() {


  return (
    <>
     <Navbar/>
     <BarraImmagine/>
     <NavIcone/>
     <Footer/>
     <BarraFooter/>
    </>
  )
}

export default App
