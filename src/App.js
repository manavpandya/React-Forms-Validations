import React, { Component } from 'react';
import './App.css';
import SimpleForm from './Forms/SimpleForm';
import RegistrationForm from './Forms/RegistrationForm';

class App extends Component {
  render() {
    return (
      <div className="App demoForm">
        <h1>React Form Validations</h1><hr style={{ borderTop: '3px solid purple' }} />
        <SimpleForm />
        {/* <RegistrationForm /> */}
      </div>
    );
  }
}

export default App;
