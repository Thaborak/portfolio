import React, { Component } from 'react';
// import './App.css';
import Header from './header';
import Work from './work';
import Footer from './footer';
import AboutMe from './aboutme';

class App extends Component {
  componentDidMount() {
    // dispatch to get stuff from server
  }

  render() {
    return (
      <div>
        <Header />
        {/* <AboutMe /> */}
        <Work />
        <Footer /> 
      </div>
    );
  }
}

export default App;
