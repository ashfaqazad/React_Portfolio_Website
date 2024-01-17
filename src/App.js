import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Services from './Component/Services';
import './index.css';
import Footer from './Component/Footer';
import Items from './Component/Items';


const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/services' element={<Services />} />
            <Route exact path='/items' element={<Items />} />
          </Routes>
        </div>
        <Footer/>
        </Router>
    </>
  );
};

export default App;
