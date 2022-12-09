import React from 'react'
import sample from '../../assets/sample.jpg'
import profile from '../../assets/profile.jpg'
import {BsBookmark} from 'react-icons/bs'
import '../../containers/Trending/Trending.css'
import { truncate } from '../../hooks/truncateText'


const TrendCard = () => {
  
    return (
    <div className='trends-card'>
        <div className="trend-card-img">
            <img src={sample} alt="topic-idea" />
        </div>
        <div className="trend-card-content">
            <h3>How to do your own research</h3>
            <p>{truncate('A beginner guide to good data sources in crypto you may often use to create content', 60)}</p>
            <div className="profile">
                <div className="profile-img"><img src={profile} alt="profile" /></div>
                <p>{truncate('Charlie Estrolomger', 15)}</p>
            </div>
            <div className="timepost">
                <p>1hr ago</p>
                <BsBookmark className='save-icon' />
            </div>
        </div>
    </div>
  )
}

export default TrendCard