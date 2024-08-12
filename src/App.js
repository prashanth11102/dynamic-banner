import React from 'react';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <p>Effortless Banner Control at Your Fingertips!</p>
        </div>
      </header>
      <main className="App-main">
        <Home />
      </main>
      <footer className="App-footer">
        <div className="footer-container">
          <p>&copy; 2024 Prashanth Reddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
