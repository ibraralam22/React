import React from 'react';
import { Instagram, YouTube, Twitter, Facebook, LinkedIn } from '@mui/icons-material';
import './Footer.css'; // Import your footer's CSS file

const Footer = () => {
  return (
    <footer className='footer-container'>
      <h4>Follow us on</h4>
      <div className='social-icons'>
        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
          <Instagram className='social-icon' />
        </a>
        <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
          <YouTube className='social-icon' />
        </a>
        <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
          <Twitter className='social-icon' />
        </a>
        <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
          <Facebook className='social-icon' />
        </a>
        <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
          <LinkedIn className='social-icon' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
