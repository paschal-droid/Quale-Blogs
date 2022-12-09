import React from 'react'
import './Sidebar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import {FiEdit} from 'react-icons/fi'
import {VscHome} from 'react-icons/vsc'
import  {AiOutlineAppstore, AiOutlineBell} from 'react-icons/ai'
import  {BsBookmarks} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="sidebar-list">
        <Link title='Go to Home' to='/'><button className='sidebar-button'><VscHome /></button></Link>
        <Link title='Nofications' to='/'> <button className='sidebar-button'><AiOutlineBell /></button> </Link>
        <Link title='Explore' to='/'> <button className='sidebar-button'><AiOutlineAppstore/></button> </Link>
        <Link title='Visit Saved Aricles' to='/'> <button className='sidebar-button'><BsBookmarks /></button></Link>
        <Link title='Write' to='/blog/create'><button className='sidebar-button'><FiEdit /></button></Link>
      </div>
    </div>
  )
}

export default Sidebar