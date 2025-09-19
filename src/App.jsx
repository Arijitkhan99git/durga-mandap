import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './components/home/HomePage'
import AboutUs from './components/about/AboutUs'
import Schedule from './components/schedule/Schedule'
import Tithi from './components/tithi/Tithi'
import Gallery from './components/gallery/Gallery'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout></Layout>}>
          <Route index path='' element={<HomePage></HomePage>}/>
          <Route path='/tithi' element={<Tithi></Tithi>}/>
          <Route path='/schedule' element={<Schedule></Schedule>}/>
          <Route path='/gallery' element={<Gallery></Gallery>}/>
          <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        </Route>
      </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
