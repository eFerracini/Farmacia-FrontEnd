import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <div className='min-h-[80vh]'>
    <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      </div>
    <Footer/>
    </>
);
}
export default App;