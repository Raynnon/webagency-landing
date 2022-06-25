import { Component } from 'react';
import logo from '../images/webs-go-logo.png';

type Props = {};

type State = {};

interface MenuItem {
  name: string;
  link: string;
}

const menu: MenuItem[] = [
  { name: 'Home', link: '#' },
  { name: 'About', link: '#' },
  { name: 'Features', link: '#' },
  { name: 'Screenshots', link: '#' },
  { name: 'Team', link: '#' },
  { name: 'Contact', link: '#' }
];

export default class Header extends Component<Props, State> {
  state = {};

  render() {
    return (
      <header>
        <a className="logo-block" href="#">
          <img
            className="logo"
            src={logo}
            alt="logo-web-s-go"
            width={40}
            height={40}
          />
          <p>Web's Go</p>
        </a>

        <nav className="menu">
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Features</li>
            </a>
            <a href="#">
              <li>Screenshots</li>
            </a>
            <a href="#">
              <li>Team</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </header>
    );
  }
}
