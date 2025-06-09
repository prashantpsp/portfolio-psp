import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='flex min-h-screen'>
      <Sidebar/>
      <div className='flex-1 p-6 bg-gray-100'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
