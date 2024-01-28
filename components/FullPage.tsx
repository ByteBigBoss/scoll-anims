"use client"

import Image from 'next/image'
import React, { useRef } from 'react'
import styled from 'styled-components';

import { motion, useScroll, useTransform } from "framer-motion";


const FullPage = () => {


  const secRef = useRef<HTMLDivElement>(null);

  // ScrollYProgress is a value between 0 and 1
  const { scrollYProgress } = useScroll({
    // target is the element that we want to track
    target: secRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, 1]
  );

  const xTransform = useTransform(
    scrollYProgress,
    [1, 0.5, 0.1, 0],
    [-1000, 0, 0, 0]
  );


  return (
    <FullPageStyled ref={secRef}>
      <motion.div className="image" style={{
        scale: scale,
        x: xTransform,
      }}>
        <Image
          src="/images/rover.jpg"
          alt='monkey'
          fill={true}
          style={{
            objectFit: "cover",
            objectPosition: "center",

          }} />
      </motion.div>
    </FullPageStyled>
  )
}

const FullPageStyled = styled.div`
/* display: flex;
justify-content: center; */
.image{
  width: calc(100% - 10rem);
  height: 1000px;

  position: relative;
  border-radius: 1rem;

  border: 1px solid var(--color-border);
  transition: border 0.3s ease-in-out;

  img{
    padding: 1.5rem;
  }
  &:hover{
    border: 1px solid #f2994a;
  }
}
`;

export default FullPage