import { useRef } from 'react';
import Section from './layout/Section';

import Emergence from './animations/Emergence';

import mobileImage from '../images/mobile.png';

import brain from '../images/brain.svg';
import seoIcon from '../images/seo-icon.svg';
import secureIcon from '../images/secure-icon.svg';
import skills from '../images/skills-icon.svg';

interface ListItem {
  text: string;
  icon: string;
}

const listItem: ListItem[] = [
  {
    text: 'Solve complex website problems with effective solutions. You have a problem? We have the solution!',
    icon: brain
  },
  {
    text: 'Create websites optimized for search engine optimization. Stay on top of the search engines!',
    icon: seoIcon
  },
  {
    text: 'Create secure, fast and user-friendly websites. Make the difference with the competition.',
    icon: secureIcon
  },
  {
    text: 'Acquire new skills quickly when you need them. We train you to use your new tool.',
    icon: skills
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
              Our web agency is involved in all our clients' websites as if they
              were our own projects. We aim to deliver high quality, efficient
              and sustainable websites. Together we will create your website by
              combining your ideas and needs with our experience and technical
              solutions.
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
