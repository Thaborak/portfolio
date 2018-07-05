import React, { PropTypes } from 'react';
import Header from './header';
import Work from './work';
import Footer from './footer';

class PageContainer extends React.Component {
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

module.exports = PageContainer;
