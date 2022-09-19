import Emergence from './animations/Emergence';
import Section from "./layout/Section"

import iconPuzzle from '../images/puzzle.svg';
import iconBulb from '../images/bulb.svg';
import iconTriangle from '../images/triangle.svg';

interface CardItem {
  title: string;
  text: string;
  icon: string;
}

const cards: CardItem[] = [
  {
    title: 'Reliability',
    text: 'We will never run out of answers or technical solutions for your project needs.',
    icon: iconPuzzle
  },
  {
    title: 'Ideas',
    text: 'From our experience we can suggest improvements and relevant ideas.',
    icon: iconBulb
  },
  {
    title: 'Details',
    text: 'Our websites come with optimisations for SEO, security and display speed.',
    icon: iconTriangle
  }
];

export default function Presentation() {
  return (
    <Section id="presentation" background='light'>
      <div className="cards">
        {cards.map((item, index) => (
          <Emergence key={index} comingFrom="bottom">
            <div className="presentation__card">
              <img
                src={item.icon}
                alt="logo"
                className="presentation__card--icon"
              />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </Emergence>
        ))}
      </div>
    </Section>
  );
}
