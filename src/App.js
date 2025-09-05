import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import GameViewer from './components/gameviewer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/game/:id" element={<GameViewer />} />

      {/* fallback để tránh lỗi No routes matched */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
