import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Showtimes.css';

const Showtimes = ({ onDaySelect }) => {
  const navigate = useNavigate();

  const handleDayClick = (dayName) => {
    if (onDaySelect) {
      onDaySelect(dayName);
    } else {
      navigate('/movies', { state: { selectedDay: dayName } });
    }
  };

  const getDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 4; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      
      dates.push({
        label: i === 0 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' }),
        dayName: date.toLocaleDateString('en-US', { weekday: 'long' }),
        date: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' })
      });
    }
    
    return dates;
  };

  return (
    <section className="showtimes-section">
      <h2>Now Showing | Coming Soon</h2>
      <div className="day-grid">
        {getDates().map((day, index) => (
          <div 
            key={index} 
            className="day-column"
            onClick={() => handleDayClick(day.dayName)}
          >
            <div className="day-label">{day.label}</div>
            <div className="date-container">
              <span className="date-number">{day.date}</span>
              <span className="date-month">{day.month}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showtimes;