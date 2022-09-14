import { useEffect, useRef } from 'react';
import Section from './layout/Section';

import Emergence from './animations/Emergence';

import mobileImage from '../images/mobile.png';
import icon from '../images/icon.png';

interface Props {
  onYChange: any;
}

interface ListItem {
  text: string;
  icon: string;
}

const listItem: ListItem[] = [
  {
    text: 'Intrinsically aggregate cutting-edge internal or "organic" sources through pandemic.',
    icon
  },
  {
    text: 'Intrinsically aggregate cutting-edge internal or "organic" sources through pandemic.',
    icon
  },
  {
    text: 'Intrinsically aggregate cutting-edge internal or "organic" sources through pandemic.',
    icon
  },
  {
    text: 'Intrinsically aggregate cutting-edge internal or "organic" sources through pandemic.',
    icon
  }
];

export default function About({ onYChange }: Props) {
  const sectionRef = useRef() as React.MutableRefObject<HTMLImageElement>;

  useEffect(() => {
    const getPosition = () => {
      const y: number = sectionRef.current.getBoundingClientRect().top;
      onYChange(y);
    };

    getPosition();
  }, [onYChange]);

  return (
    <Section id="about" background="parallax">
      <div className="container" ref={sectionRef}>
        <Emergence comingFrom="left">
          <img src={mobileImage} className="mobile" alt="mobile" />
        </Emergence>

        <div className="text-column">
          <Emergence delay={1000}>
            <h2>Make Business Easy With Us</h2>
          </Emergence>

          <Emergence>
            <p>
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incidit labore lorem
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
