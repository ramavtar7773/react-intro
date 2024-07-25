// import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Slider from './Slider'
import Footer from './Footer'
import './App.css'
import Card from './Card'
import pic from '../src/assets/pic.jpeg'
import pic3 from '../src/assets/pic3.jpeg'


function App() {
  // const [count, setCount] = useState(0)

   const data = [
    {
      id: 1,
      name: "example",
      image:pic,
      price: 3000
    },
    {
      id: 2,
      name: "example",
      image:pic,
      price: 4000
    },
    {
      id: 3,
      name: "example",
      image:pic,
      price: 5000
    },
    {
      id: 4,
      name: "example",
      image:pic,
      price: 6000
    }
   
  ]

  return (
    <>
    
    <Header/>
    {/* <Slider/> */}
    {/* <Card
    image={pic}
    name={'weather'}
    price={400}
    /> */}

{/* <Card
    image={pic3}
    name={'jodhpur'}
    price={300}
    />


<Card
    image={pic}
    name={'close'}
    price={500}
    />


<Card
    image={pic}
    name={'open'}
    price={100}
    /> */}

    {
      data.map((i) => (
       <Card
       image={i.image}
       name={i.name}
       price={i.price}
       />
      ))
    }
    <Footer/>

  
    </>
  )
}

export default App
