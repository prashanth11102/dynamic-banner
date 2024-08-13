import React from 'react';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App" lang="en">
      <header className="App-header" role="banner">
        <div className="header-container">
          <p>Effortless Banner Control at Your Fingertips!</p>
        </div>
      </header>
      <main className="App-main" role="main">
        <Home />
      </main>
      <footer className="App-footer" role="contentinfo">
        <div className="footer-container">
          <p>&copy; 2024 Prashanth Reddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
