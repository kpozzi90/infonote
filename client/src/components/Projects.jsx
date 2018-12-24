import React from 'React';
import '../../styles/style.css';
import {projectData} from '../../projectData';

class Projects extends React.Component  {
  constructor() {
    super();
    this.state = {
      project: 0,
    }
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  moveRight() {
    if (this.state.project === projectData.length - 1) {
      this.setState ({
        project: 0
      })
    } else {
      let newProject = this.state.project + 1;
      this.setState({
        project: newProject
      })
    }
  }

  moveLeft() {
    if (this.state.project === 0) {
      this.setState ({
        project: projectData.length - 1,
      })
    } else {
      let newProject = this.state.project - 1;
      this.setState({
        project: newProject
      })
    }
  }

  render() {
    return (
      <div className = 'projects'>
        <button className = 'back-button' onClick = {() => this.moveLeft()}>
          <img src = 'https://i.imgur.com/t0EX42q.png?1'/>
        </button>
        <div className = 'project'>
          <img src = {projectData[this.state.project].image} />
          <div className = 'overlay'>{projectData[this.state.project].description}</div>
        </div>
        <button className = 'next-button' onClick = {() => this.moveRight()}>
            <img src = 'https://i.imgur.com/LezWzql.png'/>
        </button>
      </div>
    )
  }
}

module.exports.Projects = Projects;