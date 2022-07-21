import { CountUp } from 'use-count-up';
import { InView } from 'react-intersection-observer';

import Emergence from './animations/Emergence';

import icon from '../images/icon.png';

interface Figures {
  figure: number;
  text: string;
  icon: string;
}

const figures: Figures[] = [
  {
    figure: 12000,
    text: 'Coffee Cups',
    icon
  },
  {
    figure: 2000000,
    text: 'Line Code',
    icon
  },
  {
    figure: 30,
    text: 'Clients',
    icon
  },
  {
    figure: 512,
    text: 'Shere',
    icon
  }
];

export default function FunFacts() {
  return (
    <section id="fun-facts">
      <Emergence>
        <h2>
          Fun <span className="colored-text">Facts</span>
        </h2>
      </Emergence>

      <Emergence delay={800}>
        <p className="subtitle">
          Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor coli incidit labore lorem ipsum amet madolor sit amet.
        </p>
      </Emergence>

      <Emergence comingFrom={'bottom'} delay={400}>
        <div className="figures-container">
          {figures.map((item, index) => (
            <div className="figures" key={index}>
              <img src={item.icon} alt="icon" />
              <InView>
                {({ inView, ref, entry }) => (
                  <p ref={ref} className="figure">
                    {inView ? (
                      <CountUp isCounting end={item.figure} duration={1.5} />
                    ) : null}
                  </p>
                )}
              </InView>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Emergence>
    </section>
  );
}
