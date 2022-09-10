import React, { useState } from 'react';
import './styles/App.scss';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Profile from './pages/Profile';

const axios = require('axios').default;

axios.defaults.baseURL = 'http://localhost:8000';

function App() {
  const [user, setUser] = useState('')
  const [workout, setWorkout] = useState([]);

  return (
    <Box  m='auto' >
      <Navbar 
        user={user}
        setUser={setUser}
        workout={workout}
        setWorkout={setWorkout}
      />
      <Routes>
        <Route path='/' element={<Home user={user} />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App;