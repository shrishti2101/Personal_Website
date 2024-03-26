// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About'
import Project from './components/Project'
import Navigation from './Navigation';
import Contact from './components/Contact'
function App() {


  return (
    <>
      <Router>
        <Navigation/>
        <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
       
      </Router>
      
    </>
  )
}

export default App
