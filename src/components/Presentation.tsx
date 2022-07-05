import Emergence from './animations/Emergence';
import icon from '../images/icon.png';

interface CardItem {
  title: string;
  text: string;
  icon: string;
}

const cards: CardItem[] = [
  {
    title: 'Creative Design',
    text: 'Proactively syndicate open-source e-markets after low-risk high-yield synergy.',
    icon
  },
  {
    title: 'Creative Design',
    text: 'Proactively syndicate open-source e-markets after low-risk high-yield synergy.',
    icon
  },
  {
    title: 'Creative Design',
    text: 'Proactively syndicate open-source e-markets after low-risk high-yield synergy.',
    icon
  }
];

export default function Presentation() {
  return (
    <section id="presentation">
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
    </section>
  );
}
