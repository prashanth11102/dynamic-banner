import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../components/Banner';
import Dashboard from '../components/Dashboard';
import './Home.css'; // Ensure to create this CSS file for styling

const Home = () => {
  const [bannerData, setBannerData] = useState({
    description: '',
    link: '',
    timer: 10,
    isVisible: false,
  });

  useEffect(() => {
    axios.get('/api/banner')
      .then((response) => setBannerData(response.data))
      .catch((error) => console.error('Error fetching banner data', error));
  }, []);

  const handleBannerClose = () => {
    setBannerData({ ...bannerData, isVisible: false });
  };

  return (
    <div className="home-container">
      {bannerData.isVisible && (
        <Banner
          description={bannerData.description}
          link={bannerData.link}
          timer={bannerData.timer}
          onClose={handleBannerClose}
        />
      )}
      <Dashboard onUpdateBanner={setBannerData} />
    </div>
  );
};

export default Home;
