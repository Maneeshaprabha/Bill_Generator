import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Home is in src/pages/
import Login from './components/Login'; 
import Register from './components/Register';
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register/>} />
        <Route path='/test' element={<Test/>}/>
      </Routes>
    </div>
  );
}

export default App;