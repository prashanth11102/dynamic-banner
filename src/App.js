import React from 'react';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <p>Your banner, your way: customize descriptions, countdowns, and links with ease!</p>
        </div>
      </header>
      <main className="App-main">
        <Home />
      </main>
      <footer className="App-footer">
        <div className="footer-container">
          <p>&copy; 2024 Yochana Lam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
