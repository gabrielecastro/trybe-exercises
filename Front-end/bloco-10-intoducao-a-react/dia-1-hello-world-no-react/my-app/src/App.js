import logo from './logo.svg';
import './App.css';
import Header from './Header';
import React, {Component} from 'react';
import Content from './Content';

class App extends Component {
  render() {

    return (
      <>
      <Header />
      <Content />
      </>
    )
  }
}

export default App;
