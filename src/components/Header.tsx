import React, { Component } from 'react';
import logo from '../images/webs-go-logo.png';

type Props = {};

type State = {};

export default class Header extends Component<Props, State> {
  state = {};

  render() {
    return (
      <header>
        <div className="logo">
          <img src={logo} alt="logo-web-s-go" width={40} height={40} />
          <p>Web's Go</p>
        </div>

        <nav>
          <ul>
            <li>menu</li>
            <li>menu</li>
            <li>menu</li>
            <li>menu</li>
          </ul>
        </nav>
      </header>
    );
  }
}
