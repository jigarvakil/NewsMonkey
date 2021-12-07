import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div style={{ backgroundColor: 'rgba(1, 95, 117, 0.37)' }}>
            <Navbar />
          </div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News key="home" pageSize={5} country="in" category="" />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={5}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={5}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={5}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={5}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={5}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={5}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News key="" pageSize={5} country="in" category="business" />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
