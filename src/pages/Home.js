import React, { useState } from 'react';
import Banner from '../components/Banner';
import Dashboard from '../components/Dashboard';
import './Home.css';

const Home = () => {
  const [bannerData, setBannerData] = useState({
    description: 'Welcome to our site!',
    link: '',
    timer: 10,
    isVisible: true,
  });

  const handleBannerUpdate = (newBannerData) => {
    setBannerData(newBannerData);
  };

  return (
    <div className="home">
      <Banner
        description={bannerData.description}
        link={bannerData.link}
        timer={bannerData.timer}
        isVisible={bannerData.isVisible}
        onClose={() => setBannerData({ ...bannerData, isVisible: false })}
      />
      <Dashboard onUpdateBanner={handleBannerUpdate} />
    </div>
  );
};

export default Home;
