import React, { useState, useEffect } from 'react';
import "../../scss/footer.scss";

const Footer = () => {
    const [localTime, setLocalTime] = useState('');
    const [istDate, setISTDate] = useState('');
  
    // Function to update local time
    const updateLocalTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      setLocalTime(formattedTime);
    }
  
    // Function to get IST date
    const getISTDate = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      const formattedDate = now.toLocaleDateString('en-IN', options);
      setISTDate(formattedDate);
    }
  
    useEffect(() => {
      // Update time and date every second
      const interval = setInterval(() => {
        updateLocalTime();
        getISTDate();
      }, 1000);
  
      // Clean up interval
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="aboutFooter">
        {/* Existing content here */}
        <footer className="footer">
          <p>&copy; 2024 BitzTech Dev. All rights reserved.</p>
          <div className="time-date">
            <p>Local Time: <span>{localTime}</span></p>
            <p>IST Date: <span>{istDate}</span></p>
          </div>
        </footer>
      </div>
    );
  }


export default Footer ;