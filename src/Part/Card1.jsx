import React from 'react'
import { motion } from 'framer-motion'
import './Card1.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Card1({pic, text1, text2, text3, text4, text5}) {
  return (
    <div className='card1outer'>

    <div class="card-box">
        <div class="card">
            <div className="ccimf">
            <img class="card-img"
                src={pic}
                alt="" />
            <div class="card-body">
                <h4 className='profn'>{text1}</h4>
                <h4 className='profn'>{text2}</h4>
            </div>
            </div>
        </div>
        <div className="card-cont">
       {text3} <br /><br />
       <h5>Date: {text4}</h5>
       <h5>Time: {text5}</h5>
       <h5>Venue: LT-4</h5>


        </div>
      
    </div>
    </div>
  )
}

export default Card1