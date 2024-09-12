import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './Layout/NavBar'
import Home from './Pages/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AddUser from './Users/AddUser'


function App() {
  
  return (
    <>
    <Router>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/adduser' element={<AddUser/>} />
    </Routes>
    
    </Router>
      
    </>
  )
}

export default App
