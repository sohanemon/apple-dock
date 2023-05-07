'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Dock() {
  const mouseX = useMotionValue(0);
  const width = useTransform(mouseX, [0, 300], [40, 100]);
  //   #note when mouseX = 0 then width = 40
  // and when mouseX = 300 then width = 100
  // #note don't forget to add React when you catch the type by hovering for typescript
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    mouseX.set(e.pageX);
  }

  return (
    <div
      onMouseMove={(e) => handleMouseMove(e)}
      //   #note items-end is !important here
      className='absolute bottom-0 flex items-end h-16 gap-5 px-4 py-3 mx-auto my-5 -translate-x-1/2 bg-neutral-600 w-max rounded-3xl left-1/2'
    >
      {[...Array(5).fill(0)].map((el, idx) => (
        <motion.div
          style={{ width }}
          className='w-10 bg-gray-300 rounded-full cursor-pointer aspect-square'
          key={idx}
        ></motion.div>
      ))}
    </div>
  );
}
