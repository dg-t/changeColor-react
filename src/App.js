import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './myComponent';

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {/* Edit <code>src/App.js</code> and save to reload.*/}
        Hello {this.props.MyName}
        </p>
        <MyComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
