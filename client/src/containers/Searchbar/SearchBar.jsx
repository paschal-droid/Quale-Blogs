import React, {useState} from 'react'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {FiSearch} from 'react-icons/fi'
import './Searchbar.css'
import { Link } from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
   <div className="search-container">
     <div className='searchbar'>
      <form className="search">
        <FiSearch className='s-icon' />
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search...' type='text' />
      </form>
    </div>
    <div className="followers-shortcut">
        <Link to='#' title='followers'><HiOutlineUserGroup /></Link>
    </div>
   </div>
  )
}

export default SearchBar