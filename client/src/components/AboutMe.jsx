import React from 'React';
import '../../styles/style.css';
import {Skills} from './Skills.jsx';

const AboutMe = () => {
  return (
    <div className = 'about-me'>
        <div className = 'aboutme-header'>About Me</div>
        <div className = 'aboutme-text'>I am on a constant mission to learn and evolve. After graduating from Northern Arizona University, I first worked in finance giving advice to my clients and placing brokerage orders. I knew I enjoyed finding solutions and problem solving, and decided to turn my focus to business operations. I worked as an analyst at a publicly traded REIT where I further developed both my technical and project management skills by building logic in Excel and overseeing a team of software developers as we took projects from inception to completion. Once introduced to software development I was hooked, and have been honing my engineering skills ever since. Here are a list of technologies I am familiar with.</div>
        <Skills />
    </div>
  )
}

module.exports.AboutMe = AboutMe;