import React, { useState } from 'react'
import { FaBook, FaBriefcase, FaChevronCircleLeft, FaChevronCircleRight, FaEnvelope, FaHome, FaUser } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import img1 from  '../assets/img1.jpg'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    {name: 'Home', icon: <FaHome/>, path:'/'},
    {name: 'About', icon: <FaUser/>, path:'/about'},
    {name: 'Education', icon: <FaBook/>, path:'/education'},
    {name: 'Work', icon: <FaBriefcase/>, path:'/work'},
    {name: 'Contact', icon: <FaEnvelope/>, path:'/contact'},
  ];

  return (
   <div className={`${isOpen ? 'w-64' : 'w-16' } bg-gray-800 text-white h-screen flex flex-col transition-all duration-300`}>
    <div className='flex items-center justify-between p-4'>
      <div className='flex items-center space-x-2'>
        {isOpen && 
          <div className='flex flex-col items-center p-2'>
              <img
              src={img1}
              alt="profile"
              className={`rounded-full ${isOpen ? 'w-20 h-20' : 'w-8 h-8 mx-auto'}`}
            />
              <span className="text-lg font-semibold">Prashant Pal</span>
          </div>
        }

      </div>
      <button onClick={toggleSidebar} className='focus:outline-none cursor-pointer' aria-label='Toggle sidebar'>
        {isOpen ? <FaChevronCircleLeft/> : <FaChevronCircleRight/>}
      </button>
    </div>

    <nav className='flex-1'>
      {
        navItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            className={({isActive}) => `flex items-center p-4 hover:bg-gray-700 transition-colors ${isActive ? 'bg-gray-700' : ''} `}
          >
            <span className='text-xl'>{item.icon}</span>
            {isOpen && <span className='ml-4'>{item.name}</span> }
          </NavLink>
        ))
      }
    </nav>
    <div className='flex justify-center mb-3'>
      {!isOpen && <img src={img1} alt="profile" className='rounded-full h-8 w-8' /> }
    </div>
   </div>
  )
}

export default Sidebar