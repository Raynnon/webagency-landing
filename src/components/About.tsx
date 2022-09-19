import { useRef } from 'react';
import Section from './layout/Section';

import Emergence from './animations/Emergence';

import mobileImage from '../images/mobile.png';
import icon from '../images/icon.png';

interface ListItem {
  text: string;
  icon: string;
}

const listItem: ListItem[] = [
  {
    text: 'Solve complex website problems with effective solutions',
    icon
  },
  {
    text: 'Creating SEO optimised websites',
    icon
  },
  {
    text: 'Create secure, fast and user-friendly websites',
    icon
  },
  {
    text: 'Learn new skills quickly when you need them',
    icon
  }
];

export default function About() {
  const sectionRef = useRef() as React.MutableRefObject<HTMLImageElement>;

  return (
    <Section id="about" background="parallax">
      <div className="container" ref={sectionRef}>
        <Emergence comingFrom="left">
          <img src={mobileImage} className="mobile" alt="mobile" />
        </Emergence>

        <div className="text-column">
          <Emergence delay={1000}>
            <h2>The know-how of our agency</h2>
          </Emergence>

          <Emergence>
            <p>
            Optimised design and comprehensive service
            </p>
          </Emergence>

          <Emergence delay={1000}>
            <div className="about-list">
              {listItem.map((item, index) => (
                <div key={index} className="about-list__point">
                  <img
                    className="about-list__point--icon"
                    src={item.icon}
                    alt="icon"
                  />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </Emergence>
        </div>
      </div>
    </Section>
  );
}
