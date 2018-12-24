import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.css';
import AboutMe from './components/AboutMe.jsx';
import Greeting from './components/Greeting.jsx';
import Projects from './components/Projects.jsx';
import ContactMe from './components/ContactMe.jsx';

const App = () => {
  return (
    <div>
      <Greeting />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))