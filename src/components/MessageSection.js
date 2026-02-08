import React from 'react';

const MessageSection = () => {
  return (
    <section id="message" className="section">
      <div className="message-container">
        <p className="message">
          My dearest Shekha, from the moment I saw you, I knew my heart had found its home. 
          This Valentine's Day, I want to remind you how incredibly special you are to me and 
          how grateful I am for every moment we share together.
        </p>
        <p className="message">
          You are the most beautiful person I know, inside and out. Your smile lights up my world, 
          your laughter is my favorite melody, and your love is the greatest gift I've ever received.
        </p>
        <div className="proposal-link">
          <p>Remember when I asked you to be mine forever? <a href="https://from-ken-to-shekha.netlify.app/" target="_blank" rel="noopener noreferrer">Relive our proposal story here</a></p>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;