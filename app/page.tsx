"use client"
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import FullPage from "@/components/FullPage";
import Header from "@/components/Header/Header";
import HorizontalWrapper from "@/components/HorizontalWrapper";
import SectionLayout from "@/components/SectionLayout";
import TextSection from "@/components/TextSection";
import ZoomSection from "@/components/ZoomSection";
import { Cards } from "@/utils/Cards";
import Image from "next/image";
import styled from "styled-components";
import {motion, useScroll, useTransform} from "framer-motion";
import React, { useRef } from "react";

export default function Home() {

  const videoRef = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
    target: videoRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6, 0.8, 0.9],[1, 0.8, 0.8, 0]);

  return (
    <>
      <Header />
      <MainStyled>

        <SectionLayout>
          <HorizontalWrapper direction={-1400} height="40rem">
            <div className="cards">
              {Cards.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} image={card.image} />
              ))}
            </div>
          </HorizontalWrapper>
        </SectionLayout>
        <FullPage />

        <SectionLayout>
          <HorizontalWrapper direction={1400} height="40rem">
            <div className="cards" style={{right:0}}>
              {Cards.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} image={card.image} />
              ))}
            </div>
          </HorizontalWrapper>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <SectionLayout>
          <motion.div className="video" ref={videoRef} style={{
            opacity, //opacity: opacity
            scale, //scale: scale
          }}>
            <iframe
              src="https://www.youtube.com/embed/OuaUjkZhfqQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            >

            </iframe>
          </motion.div>
        </SectionLayout>

        <SectionLayout>
          <ZoomSection />
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <Footer />
      </MainStyled>
    </>
  );
}


const MainStyled = styled.main`
min-height: 100vh;
width: 100%;

.cards{
  display: grid;
  grid-template-columns: repeat(5, 30rem);
  gap: 4rem;
  position: absolute;
}

.video{
  padding: 2rem;
  background-color: #161616;
  border-radius: 1rem;
  iframe{
    border: none;
    width: 100%;
    height: 52rem;
  }
}

`;
