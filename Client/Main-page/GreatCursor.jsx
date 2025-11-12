"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Bricolage_Grotesque, } from "next/font/google";

// import "./loaders/loaderCss.css"
import { motion } from "framer-motion"
const geistSans = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const GreatCursor = ({ children, lang }) => {
  const [rotateVal, setrotateVal] = useState(0)

  const [pos, setPos] = useState({ x: 0, y: 0 });



  const HanleMouseMoveWindow = e => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const [isMouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const TImeOut = setTimeout(() => {
      setMouseDown(false);
    }, 600);
    return () => {
      clearTimeout(TImeOut);
    }
  }, [isMouseDown])

  return (
    <>
      <body
        // style={{ cursor: 'none' }}
        onMouseMove={HanleMouseMoveWindow}
        onMouseDown={() => setMouseDown(!isMouseDown)}
        className={`${geistSans.className} relative h-lvh w-lvw bg-sidebar-foreground selection:bg-chart-1  selection:text-background`}      >
        <div
          style={{
            left: pos.x,
            top: pos.y,
            transform: "translate(-15% , -15%)",
            transition: "transform .1s"
          }}

          className="absolute loader   z-[-2] "
        >
        </div>

        <div className="flex justify-center absolute left-0 top-0 overflow-auto max-h-lvh w-lvw ">
          {children}
        </div>




      </body>
    </>
  )
}

export default GreatCursor
