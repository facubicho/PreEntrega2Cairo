import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Zona from './components/Zona/Zona'
import Nosotros from './components/Nosotros/Nosotros'
import Error from './components/Error/Error'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {


  return (
    <>
    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
        <Route path='/Zona' element={<Zona/>}/>
        <Route path='/Sobre Nosotros' element={<Nosotros/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>

    </BrowserRouter>  
    </>    
  )
}

export default App
