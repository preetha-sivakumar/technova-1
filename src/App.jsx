import React from 'react'
import {Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Prod from './Pages/Prod/Prod'
 import Serv from './Pages/Service/Services'
 import Abou from './Pages/About/About'
import Fire1 from './Pages/Fire/FireSystem'


const App = () => {
  return (
   

   
    <Routes>
     
      <Route path ="/" element ={<Home />} />
       <Route path ="/Prod" element ={<Prod />} />
      <Route path ="/Service" element ={<Serv />} />
    <Route path ="/Service/Fire" element ={<Fire1 />} />
      <Route path ="/About" element ={<Abou />} />  
      
   
   
    </Routes>
    
     
  )
}

export default App