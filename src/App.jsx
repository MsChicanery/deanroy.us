import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Platform from './pages/Platform';
import DonateRedirect from './pages/Donate';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/connect" element={<About />} />
          <Route path="/donate" element={<DonateRedirect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
