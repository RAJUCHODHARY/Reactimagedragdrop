import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDragStart = (e) => {
    setSelectedImage(e.target);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropLeft = (e) => {
    e.preventDefault();
    e.target.appendChild(selectedImage);
    setSelectedImage(null);
  };

  const handleDropRight = (e) => {
    e.preventDefault();
    e.target.appendChild(selectedImage);
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <div id="box">
        <div id="left" onDragOver={handleDragOver} onDrop={handleDropLeft}>
          <img
            src="https://cdn.pixabay.com/photo/2024/02/21/11/34/ai-generated-8587505_640.png"
            alt=""
            className="img"
            draggable="true"
            onDragStart={handleDragStart}
          />
          <img
            src="https://cdn.pixabay.com/photo/2023/07/04/09/36/baby-8105822_640.jpg"
            alt=""
            className="img"
            draggable="true"
            onDragStart={handleDragStart}
          />
        </div>
        <div id="right" onDragOver={handleDragOver} onDrop={handleDropRight}></div>
      </div>
    </div>
  );
}

export default App;
