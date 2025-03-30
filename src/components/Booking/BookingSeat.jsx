import React, { useState } from 'react';
import './BookingSeat.css';

const BookingSeat = ({ moviePrice = 10 }) => { // Default moviePrice if not passed
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState(['A1', 'B5']);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  // Generate seat layout
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
    // Add your booking logic here
    console.log('Booking seats:', selectedSeats);
    console.log('User info:', userInfo);
    setBookedSeats([...bookedSeats, ...selectedSeats]);
    setSelectedSeats([]);
    alert('Booking successful!');
  };

  // Calculate total price
  const totalPrice = selectedSeats.length * moviePrice;

  return (
    <div className="booking-container">
      <div className="screen">Screen</div>
      
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
            type="email"
            placeholder="Your Email"
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
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
