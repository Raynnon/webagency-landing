import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';
import background from '../images/gray-bg.jpg';
import mobileImage from '../images/mobile.png';
import icon from '../images/icon.png';

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

export default function About() {
  const [firstContentRef, firstContentInView] = useInView({
    triggerOnce: true,
    trackVisibility: true,
    delay: 400
  });

  const [descriptionRef, descriptionInView] = useInView({
    triggerOnce: true,
    trackVisibility: true,
    delay: 1000
  });

  const [listRef, listInView] = useInView({
    triggerOnce: true,
    trackVisibility: true,
    delay: 2500
  });

  return (
    <Parallax bgImage={background} strength={400} style={{ height: '850px' }}>
      <section id="about" className="about">
        <motion.div
          ref={firstContentRef}
          animate={{
            x: firstContentInView ? 0 : -100,
            opacity: firstContentInView ? 1 : 0
          }}
          transition={{ duration: 0.5 }}
        >
          <img src={mobileImage} className="mobile" alt="mobile" />
        </motion.div>
        <div className="text-column">
          <motion.h2
            ref={firstContentRef}
            animate={{
              opacity: firstContentInView ? 1 : 0
            }}
            transition={{ duration: 1 }}
          >
            Make Business Easy With Us
          </motion.h2>
          <motion.p
            ref={descriptionRef}
            animate={{
              opacity: descriptionInView ? 1 : 0
            }}
            transition={{ duration: 1 }}
          >
            Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor coli incidit labore lorem
          </motion.p>
          <motion.div
            className="about-list"
            ref={listRef}
            animate={{
              opacity: listInView ? 1 : 0
            }}
            transition={{ duration: 1.5 }}
          >
            {listItem.map((item) => (
              <div className="about-list__point">
                <img
                  className="about-list__point--icon"
                  src={item.icon}
                  alt="icon"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Parallax>
  );
}
