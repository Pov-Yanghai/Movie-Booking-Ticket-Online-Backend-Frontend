import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Loginpage from './pages/Loginpage';
import Moviespage from './pages/Moviespage';
import MovieDetail from './pages/MovieDetail';
import Booking from './pages/Booking';
import Contactpage from './pages/Contactpage';
import Signuppage from './pages/Signuppage'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Moviespage />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/signup" element={<Signuppage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
