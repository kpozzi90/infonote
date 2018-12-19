import React from 'React';
import '../../styles/style.css';

class Projects extends React.Component  {
  constructor() {
    super();
    this.state = {
      project: 1,
    }
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  moveRight() {
    if (this.state.project === 3) {
      this.setState ({
        project: 1
      })
    } else {
      let newProject = this.state.project + 1;
      this.setState({
        project: newProject
      })
    }
  }

  moveLeft() {
    if (this.state.project === 1) {
      this.setState ({
        project: 3
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
          <img src = 'https://i.imgur.com/UZsYrDa.png'/>
        </button>
        {this.state.project === 1 ? 
        <div className = 'project'>project one</div> 
        :
        this.state.project === 2 ? 
        <div className = 'project'>project two</div>
        :
        <div className = 'project'>
          <img src = 'http://clipart-library.com/images/riLo855eT.png' />
          <div className = 'overlay'>fuck yeah baby</div>
        </div>}
        <button className = 'next-button' onClick = {() => this.moveRight()}>
            <img src = 'https://i.imgur.com/q0G8sDq.png'/>
        </button>
      </div>
    )
  }
}

module.exports.Projects = Projects;