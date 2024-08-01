//import React from 'react'
// import { useState } from 'react'
// import Header from './Header'
// import Slider from './Slider'
// import Footer from './Footer'
// import './App.css'
// import Card from './Card'

// import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Count from './Count'



// function App() {
  // const [count, setCount] = useState(0)



  // return (
  //   <>
/* 
    
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
       <Route path='/count' element={<Count/>}></Route> 


    </Routes>
    <Footer/>
    </BrowserRouter>
    
     <Header/>
     <Slider/>  */

/*      
     <Card
    image={pic}
    name={'weather'}
    price={400}
    /> 

<Card
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
    />  */

   
//     </>
//   )
// }

// export default App



import './App.css'
import Header from './Header'
import './Header.css'
import Footer from './Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About'


function App(){

  return (

    <>
    <BrowserRouter>
    <Header />
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
    </Routes>
    <Footer /> 
    </BrowserRouter>

    </>
  )
}

export default App
