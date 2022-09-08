import React from 'react';
import './styles/App.scss';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <Box  m='auto' >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App;