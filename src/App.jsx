import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Navbar from './Components/Navbar'
import Visual_Communication from './Pages/studio/Visual_Communication'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/studio'>
          <Route path='/visual_Communication' element={<Visual_Communication />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App