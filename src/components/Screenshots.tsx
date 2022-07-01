import { Parallax } from 'react-parallax';
import { motion, PanInfo, useAnimation } from 'framer-motion';
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
  const controls = useAnimation();

  const horizontalScroll = (
    e: MouseEvent | TouchEvent | PointerEvent,
    pointInfo: PanInfo
  ) => {
    console.log(pointInfo.offset.x);
    controls.start({ translateX: pointInfo.offset.x });
  };

  return (
    <Parallax bgImage={background} strength={400}>
      <section id="screenshots">
        <h2>
          Awesome <span>Screenshots</span>
        </h2>
        <motion.div
          className="screenshots-container"
          animate={controls}
          dragConstraints={{ left: 300, right: 300 }}
        >
          <motion.div
            className="scrollable"
            onPan={(
              e: MouseEvent | TouchEvent | PointerEvent,
              pointInfo: PanInfo
            ) => horizontalScroll(e, pointInfo)}
          ></motion.div>
          {screenshots.map((image, index) => (
            <img key={index} src={image} className="mobile" alt="mobile" />
          ))}
        </motion.div>
      </section>
    </Parallax>
  );
}
