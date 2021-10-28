import logo from './logo.svg';
import './App.css';
import Header from './Header';
import React, {Component} from 'react';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {

    return (
      <>
      <Header />
      <Content />
      <Footer />
      </>
    )
  }
}

export default App;
