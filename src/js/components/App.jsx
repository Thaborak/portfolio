import React, { Component } from 'react';
import Header from './header';
import Work from './work';
import Footer from './footer';

class App extends Component {

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
