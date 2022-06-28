import logo from '../images/webs-go-logo.png';

interface MenuItem {
  name: string;
  link: string;
}

const menu: MenuItem[] = [
  { name: 'Home', link: '#' },
  { name: 'About', link: '#about' },
  { name: 'Features', link: '#features' },
  { name: 'Screenshots', link: '#' },
  { name: 'Team', link: '#' },
  { name: 'Contact', link: '#' }
];

export default function Header() {
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
          {menu.map((item) => (
            <a href={item.link}>
              <li>{item.name}</li>
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
}
