import React from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
