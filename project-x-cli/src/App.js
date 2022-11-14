import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Forlover from '../src/pages/Lover/Forlover'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
  <>
  <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home />} />
	  <Route path='/forlover/:name' element={<Forlover />} />
    </Routes>
  </>
  )
}