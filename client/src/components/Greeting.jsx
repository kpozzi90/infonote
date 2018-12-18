import React from 'React';
import '../../styles/style.css';

const Greeting = () => {
  return (
    <div className = 'greeting'>
      <img className = 'profile-pic' src = 'https://i.imgur.com/G0cMy8e.png'/>
      <div className = 'greeting-text'>Hi there! I'm a full stack software engineer who enjoys building intuitive front end interfaces with clean and scalable back end systems. I am a problem solver before anything else, and love diving into the weeds in order to create comprehensive solutions to all types of problems.</div>
    </div>
  )
}

module.exports.Greeting = Greeting;