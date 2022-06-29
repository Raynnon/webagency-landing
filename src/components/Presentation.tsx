import icon from '../images/icon.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    trackVisibility: true,
    delay: 400
  });

  return (
    <section className="presentation">
      <div className="cards">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            ref={cardRef}
            className="presentation__card"
            animate={{
              y: cardInView ? 0 : 100,
              opacity: cardInView ? 1 : 0
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={item.icon}
              alt="logo"
              className="presentation__card--icon"
            />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
