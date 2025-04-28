// import React from 'react'
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
import Login from './components/page/login/login'
import Welcome from './components/page/welcome/welcome';
import Track from './components/page/track/Track'
import Tra from './components/page/track/tra/tra';
import Che from './components/page/che/che'
import Check from './components/page/check/Check'
import Billing from './components/page/Billing/Billing'
import Conf from './components/page/conf/conf'
import Confirm from './components/page/confirm/confirm'
import Konf from './components/page/Konf/Konf'
import Contact from './components/contact/Contact'
import Cont from './components/cont/Cont'
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
          <Route path='/page/login' element={<><Login/><Welcome/></>}/>
          <Route path='/page/track' element={<><Tra/><Track/></>}/>
          <Route path='/page/check' element={<><Che/><Check/><Billing/></>}/>
          <Route path='/page/confirm' element={<><Conf/><Confirm/><Konf/></>}/>
          <Route path='/Contact' element={<><Contact/><Cont/></>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
