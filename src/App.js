import React, { useState } from 'react';
import './App.css';

function App() {
  const [view, setView] = useState('textToSpeech');
  const [theme, setTheme] = useState('light'); // Light theme by default

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Render content based on the selected view
  const renderContent = () => {
    switch (view) {
      case 'textToSpeech':
        return (
          <div className="main-content">
            <header className="header">
              <h1>LMNT Text-to-Speech</h1>
              <img
  src="https://img.freepik.com/free-photo/beautiful-shot-sea-with-mountain-distance-clear-sky_181624-2248.jpg"
  alt="Ocean"
  className="header-image"
/>

            </header>

            <div className="voice-buttons">
              <button>Morgan</button>
              <button>Zeke</button>
              <button>Amy</button>
              <button>Ava</button>
              <button>Caleb</button>
              <button>Other voices</button>
            </div>

            <div className="text-synthesizer">
              <p>Synthesize your own text</p>
              <textarea placeholder="Enter text to synthesize"></textarea>
              <button>Generate speech</button>
            </div>
          </div>
        );
      case 'voiceCloning':
        return (
          <div className="main-content voice-cloning">
            <h1>Create a Voice</h1>
            <div className="tab-buttons">
              <button>Record</button>
              <button>Upload</button>
              <button>Need a script to read?</button>
            </div>

            <div className="upload-section">
              <div className="upload-box">
                <p>Upload audio files...</p>
              </div>

              <div className="input-section">
                <input type="text" placeholder="Name (Optional)" />
                <input type="text" placeholder="Description (Optional)" />
                <select>
                  <option>Gender (Optional)</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <button className="create-voice-button">Log in to create voice</button>
            </div>

            <p className="tips-link">Tips on Optimizing Voice Clone Quality</p>
          </div>
        );
      case 'voiceLibrary':
        return (
          <div className="main-content voice-library">
            <h1>Your Voice Library</h1>
            <input type="text" placeholder="Search for a voice" className="search-input" />

            <div className="voice-list">
              <div className="voice-card">Morgan</div>
              <div className="voice-card">Zeke</div>
              <div className="voice-card">Amy</div>
              <div className="voice-card">Ava</div>
              <div className="voice-card">Caleb</div>
              <div className="voice-card">Chloe</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`app ${theme}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <button className="login-button">Login</button>
        <nav>
          <ul>
            <li onClick={() => setView('textToSpeech')}>Text to Speech</li>
            <li onClick={() => setView('voiceCloning')}>Voice Cloning</li>
            <li onClick={() => setView('voiceLibrary')}>Voice Library</li>
            <li>Clip Library</li>
          </ul>
        </nav>
        <div className="account-section">
          <p>Account</p>
          <p>Profile</p>
        </div>
        <div className="discord-section">
          <p>Join our Discord</p>
          <p>All the latest updates and support</p>
        </div>
        <button onClick={toggleTheme} className="toggle-theme">
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </aside>

      {/* Dynamic content */}
      {renderContent()}
    </div>
  );
}

export default App;
