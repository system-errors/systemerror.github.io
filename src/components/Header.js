import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles.css";

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-CA", { hour12: false });
  };

  const formatDate = (date) => {
    return date.toISOString().slice(0, 10).replace(/-/g, "/");
  };

  return (
    <header className="header">
      <Link to="/" className="header-home">
        <img src="/images/comp.webp" alt="Old computer flashing errors" width="150" />
        <h1>SYSTEM ERROR</h1>
      </Link>
      <div className="header-info">
        <span className="date">{formatDate(time)} </span>
        <span className="clock">{formatTime(time)} </span>
        <span>OTT</span>
      </div>
    </header>
  );
};

export default Header;
