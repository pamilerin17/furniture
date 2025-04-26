import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Category from './components/Category/Category'
import Awesome from './components/Awesome/Awesome'
import Weekly from './components/Weekly/Weekly'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer';
import Kategory from './components/shop/Kategory/Kategory'; 
import Single from './components/Single/Single'
import Details from './components/shop/Details/Details'
import Comments from './components/shop/comments/Comments'
import './App.css'


function App() {



  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<><Home/><Category/><Awesome/><Weekly/><Subscribe/></>}/>
          <Route path='/shop/Kategory' element={<><Kategory/><Category/></>}/>
          <Route path='/shop/Details' element={<><Single/><Details/><Comments/><Awesome/></>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
