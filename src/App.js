import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Manifesto from './pages/Manifesto';
import Syslogs from './pages/Syslogs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/syslogs" element={<Syslogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
    
        <FooterNav />
      </div>
    </Router>
  );
}

function FooterNav() {
  const location = useLocation();

  // Hide footer on home page
  if (location.pathname === "/" || location.pathname === "/home") {
    return null;
  }

  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link
              to="/manifesto"
              className={location.pathname === "/manifesto" ? "active-link" : ""}
            >
              Manifesto
            </Link>
          </li>
          <li>
            <Link
              to="/syslogs"
              className={location.pathname === "/syslogs" ? "active-link" : ""}
            >
              Syslogs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active-link" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/privacy-policy"
              className={
                location.pathname === "/privacy-policy" ? "active-link" : ""
              }
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>
      <p style={{ fontSize: 10 }}>&copy; 2025 SYSTEM ERROR. All Rights Reserved.</p>
    </footer>
  );
}


export default App;
