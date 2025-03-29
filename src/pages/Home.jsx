import React from 'react';
import Banner from '../components/Banner/Banner';
import Movies from '../components/Movies/Movies';
import Showtimes from '../components/Showtimes/Showtimes';
function Home() {
  return (
    <div>
      <Banner />
      <Showtimes />
      <Movies />
    </div>
  );
}

export default Home;
