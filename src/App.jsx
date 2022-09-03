import React from 'react';
import './styles/App.scss';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Box width='400px' sx={{ width: {xl: '1', fontFamily: 'Calibre', backgroundColor: 'white' }}} m='auto' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;