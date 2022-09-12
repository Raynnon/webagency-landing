import { useEffect, useState } from 'react';
import logo from '../images/webs-go-logo.png';

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

export default function Header({
  sticky,
  presentationYposition
}: Partial<Props>) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    if (sticky) {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [sticky]);

  return (
    <header
      style={{
        position: `${sticky ? 'sticky' : 'absolute'}`,
        top: `${sticky ? 0 : null}`,
        opacity: `${
          presentationYposition
            ? sticky && scrollPosition >= presentationYposition
              ? 1
              : sticky
              ? 0
              : 1
            : 1
        }`
      }}
    >
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
        <ul>
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
