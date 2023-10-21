import React from 'react';
import BeejPatakhaImage from './image/BeejPatakha.jpg';
import './MainPage.css';

function MainPage() {
  return (
    <div>
      <div className='image-container'>
        <img src={BeejPatakhaImage} alt='Beej Image' className='resizable-image' />
        <div className='overlay'>
          <p className='overlay-text'>The choice is yours.<br/>Because they don't have one.</p>
          <button className='overlay-button'>QUICK VIEW</button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
