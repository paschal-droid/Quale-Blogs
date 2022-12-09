import React, {useState} from 'react'
import { Feed } from '../../components';
import './Dailyfeed.css'


const DailyFeed = () => {
  const filters = ["For you", "Following", "Popular", "New"];
  const [filter, setFilter] = useState('')

  return (
    <div className='feeds'>
      <div className="feeds-filters">
          {filters.map((item, i) => (
           <button key={i} className='filter-btn' onClick={(e) => {setFilter(e.target.innerText)}}>{item}</button>
          ))}
        </div>
      <div className="feeds-container">
        <Feed />
        <Feed />
        <Feed />
      </div>
    </div>
  )
}

export default DailyFeed