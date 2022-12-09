import React from 'react'
import './Trending.css'
import {TrendCard} from '../../components'


const Trending = () => {
  return (
    <div className='trend-dashboard'>
      <TrendCard />
      <TrendCard />
      <TrendCard />
    </div>
  )
}

export default Trending