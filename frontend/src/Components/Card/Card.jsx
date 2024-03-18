import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'

function Card({image,title,subtitle,btntext}) {
  return (
    <div className='cards'  >
      <div className="left">
        <img src={image} alt="" srcset="" />
      </div>
      <div className="right">
        <h2>{title}</h2>
        <p>{subtitle}</p>
       <Link to={'/contact'}> <button>{btntext}</button></Link>
      </div>
    </div>
  )
}

export default Card