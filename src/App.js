import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  return (
    <WelcomePage />
  );
}

class WelcomePage extends React.Component {
  render() {
    return (
        <div id="top">
          <div className="bgded overlay padtop">
            <header id="header" className="clear">
              <div id="logo" className="fl_left">
                <h1><a href="/index.html">Celestial Bay</a></h1>
              </div>
              <nav id="mainav" className="fl_right">
                <ul className="clear">
                  <li className="active"><a href="/index.html">Home</a></li>
                  <li><a className="drop" href="#">Pages</a>
                    <ul>
                      <li><a href="/pages/gallery.html">Gallery</a></li>
                      <li><a href="/pages/full-width.html">Full Width</a></li>
                      <li><a href="/pages/sidebar-left.html">Sidebar Left</a></li>
                      <li><a href="/pages/sidebar-right.html">Sidebar Right</a></li>
                      <li><a href="/pages/basic-grid.html">Basic Grid</a></li>
                      <li><a href="/pages/font-icons.html">Font Icons</a></li>
                    </ul>
                  </li>
                  <li><a className>="drop" href="#">Dropdown</a>
                    <ul>
                      <li><a href="#">Level 2</a></li>
                      <li><a className="drop" href="#">Level 2 + Drop</a>
                        <ul>
                          <li><a href="#">Level 3</a></li>
                          <li><a href="#">Level 3</a></li>
                          <li><a href="#">Level 3</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Level 2</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Link Text</a></li>
                  <li><a href="#">Link Text</a></li>
                  <li><a href="#">Link Text</a></li>
                </ul>
              </nav>
            </header>
          </div>
        </div>
    )
  }
}

export default App;
