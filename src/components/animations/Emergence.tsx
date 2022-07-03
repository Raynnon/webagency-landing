import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
  comingFrom?: 'left' | 'right' | 'top' | 'bottom';
  delay?: number;
  children: JSX.Element;
};

export default function Emergence({ comingFrom, delay, children }: Props) {
  const [xMotion, setXMotion] = useState(0);
  const [yMotion, setYMotion] = useState(0);

  const [ref, refInView] = useInView({
    triggerOnce: true,
    trackVisibility: true,
    delay: delay ? delay : 400
  });

  useEffect(() => {
    if (comingFrom === 'left') {
      setXMotion(-100);
    } else if (comingFrom === 'right') {
      setXMotion(100);
    } else if (comingFrom === 'bottom') {
      setYMotion(100);
    } else if (comingFrom === 'top') {
      setYMotion(-100);
    }
  }, [comingFrom]);

  return (
    <motion.div
      ref={ref}
      animate={{
        x: refInView ? 0 : xMotion,
        y: refInView ? 0 : yMotion,
        opacity: refInView ? 1 : 0
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
