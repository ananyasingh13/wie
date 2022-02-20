import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
        <video src="videos/video-2.mp4" autoPlay loop muted />
        <h1>THE FUTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='main-btns'>
            <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
            GET STARTED
            </Button>
            <Button 
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
            WATCH WORK <i className='far fa-play-circle'/>
            </Button>
            
        </div>
    </div>
  )
}

export default MainSection