import React, { useState } from 'react';

const InteractiveCards = ({ onReasonsClick, onSurpriseClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);

  const handleMusicClick = () => {
    setShowAudioPlayer(true);
    const audioPlayer = document.getElementById('song-player');
    if (audioPlayer) {
      if (isPlaying) {
        audioPlayer.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioPlayer.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
          }).catch(error => {
            alert("Click the play button in the audio player to listen to 'Beanie' by Chezile");
          });
        }
      }
    }
  };

  return (
    <div className="interactive-section">
      <div className="card">
        <i className="fas fa-heart"></i>
        <h3>Reasons I Love You</h3>
        <p>Click to discover some of the countless reasons why I love you more each day.</p>
        <button className="button" onClick={onReasonsClick}>Show Reasons</button>
      </div>
      
      <div className="card">
        <i className="fas fa-gift"></i>
        <h3>Special Surprise</h3>
        <p>I have a little surprise for you, my love. Click to reveal my Valentine's wish for us.</p>
        <button className="button" onClick={onSurpriseClick}>Reveal Surprise</button>
      </div>
      
      <div className="card">
        <i className="fas fa-music"></i>
        <h3>Our Song</h3>
        <p>A melody that always reminds me of you. Click to play "Beanie" by Chezile.</p>
        <button className="button" onClick={handleMusicClick}>
          {isPlaying ? 'Pause Our Song' : 'Play Our Song'}
        </button>
        <audio 
          id="song-player" 
          controls 
          style={{ 
            display: showAudioPlayer ? 'block' : 'none', 
            width: '100%', 
            marginTop: '20px' 
          }}
          onEnded={() => setIsPlaying(false)}
        >
          <source src="audio/Chezile.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default InteractiveCards;