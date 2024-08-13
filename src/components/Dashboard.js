import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = ({ onUpdateBanner }) => {
  const [formData, setFormData] = useState({
    description: '',
    link: '',
    timer: 10,
    isVisible: false,
  });

  const { description, link, timer, isVisible } = formData;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put('/api/banner', formData)
      .then(() => {
        onUpdateBanner(formData);
        alert('Banner updated successfully!');
      })
      .catch((error) => alert('Error updating banner', error));
  };

  return (
    <div className="dashboard">
      <h2>Banner Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Banner Description:
          <textarea
            className="banner-description"
            name="description"
            placeholder="Enter banner description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <label>
          Banner Link:
          <input
            type="text"
            className="banner-link"
            name="link"
            placeholder="Enter banner link"
            value={link}
            onChange={handleChange}
          />
        </label>
        <label>
          Banner Timer (seconds):
          <input
            type="number"
            className="banner-timer"
            name="timer"
            min="1"
            placeholder="Enter timer in seconds"
            value={timer}
            onChange={handleChange}
          />
        </label>
        <div className="banner-visibility">
          <label htmlFor="isVisible">Banner Visibility</label>
          <input
            type="checkbox"
            name="isVisible"
            id="isVisible"
            checked={isVisible}
            onChange={handleChange}
          />
          <span>{isVisible ? 'Show' : 'Hide'}</span>
        </div>
        <button type="submit">Update Banner</button>
      </form>
    </div>
  );
};

export default Dashboard;
