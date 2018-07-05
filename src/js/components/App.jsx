import React, { Component } from 'react';
// import './App.css';
import Header from './header';
import Work from './work';
import Footer from './footer';

class App extends Component {
  componentDidMount() {
    // dispatch to get stuff from server
  }

  render() {
    return (
      <div>
        <Header />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
