import React from 'react'
import Card from './Card'
import pic from '../src/assets/pic.jpeg'
import pic3 from '../src/assets/pic3.jpeg'
import blue from '../src/assets/blue.jpeg'


function Home() {
    const data = [
        {
          id: 1,
          name: "example",
          image:blue,
          price: 3000

        },
        {
          id: 2,
          name: "example",
          image:blue,
          price: 4000
        },
        {
          id: 3,
          name: "example",
          image:blue,
          price: 5000
        },
        {
          id: 4,
          name: "example",
          image:blue,
          price: 6000
        }
       
      ]
  return (
    <div>
         {
      data.map((i) => (
       <Card
       image={i.image}
       name={i.name}
       price={i.price}
       />
      ))
    }

    </div>
  )
}

export default Home