import mobileImage from '../images/mobile.png';
import icon from '../images/icon.png';

interface ListItem {
  title: string;
  text: string;
  icon: string;
}

const listItem: ListItem[] = [
  {
    title: 'Lorem ipsum',
    text: 'Our system is a comprehensive system of applied creativity',
    icon
  },
  {
    title: 'Lorem ipsum',
    text: 'For more than 5 years, we’ve been passionate about achieving better.',
    icon
  },
  {
    title: 'Lorem ipsum',
    text: 'Our system is a comprehensive system of applied creativity.',
    icon
  },
  {
    title: 'Lorem ipsum',
    text: 'Our system is a comprehensive system of applied creativity.',
    icon
  },
  {
    title: 'Lorem ipsum',
    text: 'For more than 5 years, we’ve been passionate about achieving better.',
    icon
  },
  {
    title: 'Lorem ipsum',
    text: 'For more than 5 years, we’ve been passionate about achieving better.',
    icon
  }
];

export default function Features() {
  return (
    <section id="features">
      <h2>
        Main <span>Features</span>
      </h2>
      <p className="subtitle">
        Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor coli incidit labore lorem ipsum amet madolor sit amet.
      </p>
      <div className="phone-block">
        <div className="phone-block__left">
          {listItem.slice(0, 3).map((item, index) => (
            <div key={index} className="phone-block__left--point">
              <div className="title-icon-left">
                <h3>{item.title}</h3>
                <img src={item.icon} className="icon" alt="icon" />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div>
          <img src={mobileImage} alt="mobile" />
        </div>
        <div className="phone-block__right">
          {listItem.slice(3, 6).map((item, index) => (
            <div key={index} className="phone-block__right--point">
              <div className="title-icon-right">
                <img src={item.icon} className="icon" alt="icon" />
                <h3>{item.title}</h3>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="circle"></div>
    </section>
  );
}
