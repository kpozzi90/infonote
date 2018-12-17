import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.css'

class App extends React.Component {
  render() {
    return (
    <div>
      <img className = 'profile-pic' src = 'https://i.imgur.com/G0cMy8e.png'/>
      <div className = 'tester'>This is react</div>
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))