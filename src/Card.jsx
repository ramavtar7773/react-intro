import React from 'react'
import './App.css'
import pic from '../src/assets/pic.jpeg'
import pic3 from '../src/assets/pic3.jpeg'

function Card({image, name, price}) {
    return (
        <>
            <div className='main'>
                <div className='image'>
                    <img src={image} alt="" />
                </div>
                <div className='content'>
                    <h3>name : {name}</h3>
                    <h3>price : {price}</h3>

                </div>
            </div>

        </>
    )
}

export default Card