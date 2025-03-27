import React from 'react';

const Syslogs = () => {
  return (
    <div className="manifesto-container">
      <p className="log-item">
        WARNING These errors have been found in many parts of the city. Remember to stay alert, stay awake, and question everything.
      </p>

      <div className="log-item">
        <span>% SYSTEM LOG #2 [THE GUILT OF GOLD][2025-03-27] </span>
        <a className="warning" href="images/SE2.jpeg" target="_blank" rel="noopener noreferrer">(View Log)</a>
      </div>

      <div className="log-item">
        <span>% SYSTEM LOG #1 [EYES CLOSED][2025-03-26] </span>
        <a className="warning" href="images/SE1.jpeg" target="_blank" rel="noopener noreferrer">(View Log)</a>
      </div>

    </div>
  );
};

export default Syslogs;
