import React from 'react';
import '../../containers/DailyFeed/Dailyfeed.css'
import sample from '../../assets/sample.jpg'
import profile from '../../assets/profile.jpg'
import {BsArrowRight, BsBookmark} from 'react-icons/bs'
import {truncate} from '../../hooks/truncateText'

const Feed = () => {
  return (
    <div className='feeds-card'>
        <div className="feeds-card-img">
            <img src={sample} alt="topic-idea" />
        </div>
        <div className="feeds-card-content">
            <div className="feeds-title">
                <h3>How to do your own research</h3>
                <span className="feed-post-time">Nov 16th</span>
            </div>
            <p>{truncate('Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio rem provident voluptatum similique omnis ipsam hic tempore alias nemo, eligendi ad quas suscipit ducimus pariatur unde neque maiores. Nemo iusto officia sit. Officia similique aut cumque eaque distinctio. Corporis incidunt doloribus aspernatur autem enim vero laboriosam. Quae, quisquam distinctio', 170)}</p>
            <div className="feeds-profile">
                <div className="author">
                    <div className="feeds-author-profile-img"><img src={profile} alt="profile" /></div>
                    <p>{truncate('Charlie Estrolomger', 15)}</p>
                </div>
                <p className="duration">5 mins read</p>
            </div>
            <div className="feeds-cta">
                <div className="save">
                    <BsBookmark className='save-icon' />
                    <p>Save For later</p>
                </div>
                <div className="feed-details">
                    <p>Read More</p>
                    <BsArrowRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feed