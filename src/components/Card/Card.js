import React from 'react'
import "./Card.css"

export default function Card() {
    return (
        <div className="card-container">
            <div  className="banner-line card_banner-line">
                <div className="card-img_container">
                    <img className="card-img" src="https://picsum.photos/50/50" alt="" />
                </div>
            </div>
      
            <div className="main-container">
                <p className="card-heading">My name is</p>
                <p className="card-sub-heading">İsmail Aslan</p>
            </div>
            
            
        </div>
    )
}
