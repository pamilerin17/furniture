import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Category from './components/Category/Category'
import Awesome from './components/Awesome/Awesome'

import './App.css'


function App() {



  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<><Home/><Category/><Awesome/></>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
