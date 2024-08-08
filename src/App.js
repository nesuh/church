import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import ContactUs from './components/Contact.js';
import './App.css';

const Mexico = React.lazy(() => import('./components/Body/Mexico.js'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/mexico" element={<Mexico />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
