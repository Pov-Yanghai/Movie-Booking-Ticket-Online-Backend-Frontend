import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingSeat.css';

const BookingSeat = () => {
  // Get the movie price from the location state
  const location = useLocation();
  const moviePrice = location.state?.moviePrice || 10; // Get price from state or default to $10
  
  const [selectedSeats, setSelectedSeats] = useState([]); // Track selected seats
  const [bookedSeats, setBookedSeats] = useState(['A1', 'B5']); 
  const [userInfo, setUserInfo] = useState({ name: '', phone: '' });
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const cols = Array.from({ length: 8 }, (_, i) => i + 1);
  
  const handleSeatClick = (seatId) => {
    if (bookedSeats.includes(seatId)) return;
    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking seats:', selectedSeats);
    console.log('User info:', userInfo);
    setBookedSeats([...bookedSeats, ...selectedSeats]);
    setSelectedSeats([]);
    alert('Booking successful!');
  };

  const totalPrice = selectedSeats.length * moviePrice;

  return (
    <div className="booking-container">
      <div className="screen">Choose You Seat Here</div>
      <div className="seat-grid">
        {rows.map(row => (
          <div key={row} className="seat-row">
            {cols.map(col => {
              const seatId = `${row}${col}`;
              const isBooked = bookedSeats.includes(seatId);
              const isSelected = selectedSeats.includes(seatId);
              
              return (
                <button
                  key={seatId}
                  className={`seat ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSeatClick(seatId)}
                  disabled={isBooked}
                >
                  {seatId}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="booking-summary">
        <h3>Selected Seats: {selectedSeats.join(', ')}</h3>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={userInfo.phone}
            onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
            required
          />
          <button type="submit" className="confirm-button">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingSeat;
