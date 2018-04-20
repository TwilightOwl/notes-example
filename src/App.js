import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './components/login-form';

class App extends Component {
  render() {
    return <LoginForm 
      fields={[
        { name: 'login', title: 'Login' },
        { name: 'password', title: 'Password', isSecret: true },
        { name: 'confirm', title: 'Confirm', isSecret: true }
      ]}
      buttonTitle="Register"
      onSubmit={console.log}
      validate={(login, password, confirm) => password.length && password === confirm}
    />

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
