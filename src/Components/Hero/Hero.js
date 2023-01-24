import React from 'react'
import './Hero.css'
import img from '../../images/heroImg.jpg'
import {useHistory} from "react-router-dom"
const Hero = () => {
  const navigate = useHistory()
  const goToSell = () => {
     navigate.push('/create')
  }
  return (
    <div className='hero'>
      
        <div className='left-section'>
          <div className="upper-btn" onClick={goToSell}>Sell</div>
          <div className="lower-btn">See More</div>
        </div>
        <div className='right-section'>
          <img className="hero-image" src={img}/>
        </div>
    </div>
  )
}

export default Hero