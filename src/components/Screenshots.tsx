import { motion } from 'framer-motion';

import Section from './layout/Section';
import Emergence from './animations/Emergence';

import mobileImage from '../images/mobile.png';

const screenshots: string[] = [
  mobileImage,
  mobileImage,
  mobileImage,
  mobileImage,
  mobileImage
];

export default function Screenshots() {
  return (
    <Section
      id="screenshots"
      title={['Awesome', 'Screenshots']}
      background="parallax"
    >
      <Emergence comingFrom="bottom">
        <motion.div
          className="screenshots-container"
          drag="x"
          dragMomentum={false}
          dragPropagation
          dragConstraints={{ right: 0, left: -2075 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        >
          {screenshots.map((image, index) => (
            <img key={index} src={image} alt="mobile" draggable="false" />
          ))}
        </motion.div>
      </Emergence>
    </Section>
  );
}
