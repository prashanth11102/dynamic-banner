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
      .catch((error) => console.error('Error updating banner', error));
  };

  return (
    <div className="dashboard">
      <h2>Banner Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Banner Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Banner Link:
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
        </label>
        <label>
          Banner Timer (seconds):
          <input
            type="number"
            name="timer"
            value={formData.timer}
            onChange={handleChange}
          />
        </label>
        <div className="banner-visibility">
          <label htmlFor="isVisible">Banner Visibility</label>
          <input
            type="checkbox"
            name="isVisible"
            id="isVisible"
            checked={formData.isVisible}
            onChange={handleChange}
          />
          <span>{formData.isVisible ? 'Show' : 'Hide'}</span>
        </div>
        <button type="submit">Update Banner</button>
      </form>
    </div>
  );
};

export default Dashboard;
