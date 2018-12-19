import React from 'React';
import '../../styles/style.css';

const Skills = () => {
  return (
    <div className = 'skills'>
      <div className = 'front-end-skills'>
        <div className = 'front-end-skills-header'>Front End</div>
        <ul className = 'front-end-skills-list'>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
        </ul>
      </div>
      <div className = 'back-end-skills'>
        <div className = 'back-end-skills-header'>Back End</div>
        <ul className = 'back-end-skills-list'>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>SQL Databases</li>
          <li>AWS</li>
          <li>Docker</li>
        </ul>
      </div>
    </div>
  )
}

module.exports.Skills = Skills;