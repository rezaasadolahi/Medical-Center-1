import React from 'react'
import { Routes, Route } from 'react-router-dom'
//* Components
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'





function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}


export default App