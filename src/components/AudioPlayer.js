import React from 'react';

const AudioPlayer = () => {
  return (
    <div className="audio-player-container">
      <h2 className="section-title">Our Special Song</h2>
      <p className="message">Play "Beanie" by Chezile while you read my letter ❤️</p>
      <audio 
        id="love-song" 
        controls 
        style={{ 
          width: '100%', 
          maxWidth: '400px', 
          margin: '20px auto', 
          display: 'block' 
        }}
      >
        <source src={`${process.env.PUBLIC_URL}/audio/Chezile.mp3`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;