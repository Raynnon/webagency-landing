import { useEffect, useState } from 'react';
import logo from '../images/webs-go-logo.png';
import menuIcon from '../images/menu-icon.svg';

interface Props {
  sticky: boolean;
  presentationYposition: number;
}

interface MenuItem {
  name: string;
  link: string;
}

const menu: MenuItem[] = [
  { name: 'Home', link: '#' },
  { name: 'About', link: '#about' },
  { name: 'Features', link: '#features' },
  { name: 'Screenshots', link: '#screenshots' },
  { name: 'Team', link: '#team' },
  { name: 'Contact', link: '#contact' }
];

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header>
      <a className="logo-block" href="#home">
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
        <img
          className="menu-icon"
          src={menuIcon}
          alt="menu-icon"
          width="48"
          height="48"
          onClick={() => setMenuActive(!menuActive)}
        />

        <ul className={menuActive ? 'active' : ''}>
          {menu.map((item, index) => (
            <a key={index} href={item.link}>
              <li>{item.name}</li>
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
}
