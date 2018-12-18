import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.css';
import {AboutMe} from './components/AboutMe.jsx';
import {Greeting} from './components/Greeting.jsx';

class App extends React.Component {
  render() {
    return (
    <div>
      <Greeting />
      <AboutMe />
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))