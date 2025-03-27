import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("campaign");

    const sourceMessages = {
      "gold_teeth_one": "Gold weighs them down and so does their guilt. Do we really need to chase wealth?",
      "logoff": "The screen in our hands keeps us unaware. What if fresh air became a premium subscription?",
      "election": "A billionaire's algorithm is affecting our election right now. Have you forgotten how to choose? How to think?",
    };

    if (source && sourceMessages.hasOwnProperty(source)) {
      setMessage(sourceMessages[source]);
    }
  }, []);

  return (
    <div>
      <p style={{"padding": "20px"}}>{message || ''}</p>
    
      <nav>
        <ul>
          <li><Link to="/manifesto">Manifesto</Link></li>
          <li><Link to="/syslogs">Syslogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        </ul>
      </nav>

      <footer style={{ 'margin-top': '25em', 'font-size': '10px' }}>
        <p>&copy; 2025 SYSTEM ERROR. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
