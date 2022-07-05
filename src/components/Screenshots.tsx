import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';

import Emergence from './animations/Emergence';

import background from '../images/gray-bg.jpg';
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
    <Parallax bgImage={background} strength={400}>
      <section id="screenshots">
        <Emergence>
          <h2>
            Awesome <span>Screenshots</span>
          </h2>
        </Emergence>

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
      </section>
    </Parallax>
  );
}
