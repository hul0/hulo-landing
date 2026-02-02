'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedContent from '@/components/AnimatedContent';
import StarBorder from '@/components/StarBorder';
import Hyperspeed from '@/components/Hyperspeed';

export function Hero() {
  return (
    
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0a0a0c]">
       <div className="absolute inset-0 z-0">
         <Hyperspeed 
           effectOptions={{
             distortion: 'xyDistortion',
             length: 400,
             roadWidth: 9,
             islandWidth: 2,
             lanesPerRoad: 3,
             fov: 90,
             fovSpeedUp: 150,
             speedUp: 3,
             carLightsFade: 0.4,
             totalSideLightSticks: 50,
             lightPairsPerRoadWay: 30,
             shoulderLinesWidthPercentage: 0.05,
             brokenLinesWidthPercentage: 0.1,
             brokenLinesLengthPercentage: 0.5,
             lightStickWidth: [0.02, 0.05],
             lightStickHeight: [0.3, 0.7],
             movingAwaySpeed: [20, 50],
             movingCloserSpeed: [-150, -230],
             carLightsLength: [20, 80],
             carLightsRadius: [0.03, 0.08],
             carWidthPercentage: [0.1, 0.5],
             carShiftX: [-0.5, 0.5],
             carFloorSeparation: [0, 0.1],
             colors: {
               roadColor: 0x080808,
               islandColor: 0x0a0a0a,
               background: 0x000000,
               shoulderLines: 0x131318,
               brokenLines: 0x131318,
                leftCars: [0xD4F600, 0xa90519, 0xff1010],
               rightCars: [0xf1f1f1, 0xe6e6e6, 0xdfdfe0],
               sticks: 0xf1f1f1,
             }
           }}
         />
       </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          ease="back.out(1.2)"
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.1}
        >
          <div className="space-y-12">
            <div className="inline-block px-6 py-2 border border-white rounded-full bg-black">
              <span className="font-outfit text-xs uppercase tracking-[0.2em] text-white">
                Est. 2026 // Future Ready
              </span>
            </div>

            <h1 className="font-abril text-7xl md:text-9xl tracking-tight leading-[0.9] text-white">
              ALL ROADS LEAD TO <br />
              <span className="italic font-playfair pr-4 text-secondary">Mastery</span>
            </h1>
            
            <p className="font-outfit text-2xl md:text-3xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              We craft digital experiences with soul. 
              <span className="text-white block mt-2 font-syne text-lg tracking-wide">Web // Mobile // Brand</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10">
              <StarBorder as="button" speed="5s" color="white" className="rounded-full bg-black text-white hover:bg-zinc-900 transition-colors">
                 <span className="font-outfit uppercase px-8 py-4 text-sm tracking-widest">Start A Project</span>
              </StarBorder>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
