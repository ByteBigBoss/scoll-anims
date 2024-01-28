"use client"
import React, { useEffect, useState } from "react"

export default function Hover3d (refObj: any, {x = 0, y= 0, z =0}) {

  const [coords, setCoords] = useState({x:0, y:0});
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e?:any)=>{
    const {offsetHeight: height, offsetWidth: width} = refObj.current;
    const {clientX, clientY} = e;

    const x = (clientX - width / 2) / width;
    const y = (clientY - height / 2) / height;

    setCoords({x, y});

  };

  const s = removeEventListener

  const handleMouseEnter = ()=>{
    setIsHovering(true);
  };

  const handleMouseLeave = ()=>{
    setIsHovering(false);
  };

  useEffect(()=>{
      const {current} = refObj;

      current.addEventListener("mousemove", handleMouseMove);
      current.addEventListener("mouseenter", handleMouseEnter);
      current.addEventListener("mouseleave", handleMouseLeave);

      return ()=>{
        current.removeEventListener("mousemove", handleMouseMove);
        current.removeEventListener("mouseenter", handleMouseEnter);
        current.removeEventListener("mouseleave", handleMouseLeave);
      }

  },[refObj]);

  const {x: xCoord, y: yCoord} = coords;

  const xTransform = isHovering ? xCoord * x:0;
  const yTransform = isHovering? yCoord * y:0;
  const zTransform = isHovering?  z:0;

  const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${-xTransform}deg) translateZ(${zTransform}px)`;
  const transition = isHovering?"none":"all 0.5s ease";

  return {transform, transition};


}