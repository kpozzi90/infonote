import React from 'react';
import '../../styles/style.css';
import axios from 'axios';

class ContactMe extends React.Component{
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    axios.post('/kevinpozzi/email', {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    })
    .then((res) => {
      this.setState({
        name: '',
        email: '',
        message: ''
      })
    })
    .catch((err) => {
      console.log(err);
    })
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Contact Me!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder = 'Your Name'/>
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} placeholder = 'Your Email'/>
          <input type="text" value={this.state.message} onChange={this.handleMessageChange} placeholder = 'Your Message'/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ContactMe;