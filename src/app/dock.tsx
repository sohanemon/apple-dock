'use client';

import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

export default function Dock() {
  const mouseX = useMotionValue(Infinity);
  //   #note when mouseX = 0 then width = 40
  // and when mouseX = 300 then width = 100
  // #note don't forget to add React when you catch the type by hovering for typescript
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    mouseX.set(e.pageX);
  }

  return (
    <motion.div
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={(e) => mouseX.set(Infinity)}
      //   #note items-end is !important here
      className='absolute bottom-0 flex items-end h-16 gap-5 px-4 py-3 mx-auto my-5 -translate-x-1/2 bg-neutral-600 w-max rounded-3xl left-1/2'
    >
      {[...Array(5).fill(0)].map((el, idx) => (
        <Icon key={idx} mouseX={mouseX} />
      ))}
    </motion.div>
  );
}
function Icon({ mouseX }: { mouseX: MotionValue<number> }) {
  const iconRef = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val) => {
    let bounds = iconRef.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  let widthSync = useTransform(distance, [-100, 0, 100], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 100, damping: 10 });

  return (
    <motion.div
      ref={iconRef}
      style={{ width }}
      className='w-10 bg-gray-300 rounded-full cursor-pointer aspect-square'
    ></motion.div>
  );
}
