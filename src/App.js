import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <>
        <div style={{ backgroundColor: 'rgba(1, 95, 117, 0.37)' }}>
          <Navbar />
          <News />
        </div>
      </>
    );
  }
}
