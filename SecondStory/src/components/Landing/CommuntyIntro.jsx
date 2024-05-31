import React from 'react'
import community from '../../assets/community.jpg';
import './CommunityIntro.css';

export default function CommuntyIntro() {
  return (
    <div className='commBase'>
        <div className="lhs">
            <img src={community} alt="community img" />
        </div>
      <div className="rhs">
        <h3>Get in touch with people</h3>
        <p>Explore our community section, where you can share your thoughts, see what others are thinking, and engage with fellow book lovers.</p>
        <div className="btn">Community</div>
      </div>
    </div>
  )
}
