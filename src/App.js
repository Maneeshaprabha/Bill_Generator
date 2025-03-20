import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Home is in src/pages/
import Login from './components/Login'; 
import Register from './components/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<div>Dashboard Placeholder</div>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;