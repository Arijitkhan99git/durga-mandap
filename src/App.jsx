import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './components/home/HomePage'
import AboutUs from './components/about/AboutUs'
import Schedule from './components/schedule/Schedule'
import Tithi from './components/tithi/Tithi'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout></Layout>}>
          <Route index path='' element={<HomePage></HomePage>}/>
          <Route index path='/tithi' element={<Tithi></Tithi>}/>
          <Route index path='/schedule' element={<Schedule></Schedule>}/>
          <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        </Route>
      </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
