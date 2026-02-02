'use client';

import React from 'react';
import MagicBento, { BentoCardProps } from '@/components/MagicBento';
import { Globe, Smartphone, Cpu, Palette, Sparkles, Cloud } from 'lucide-react';



import { motion } from 'framer-motion';
import ModelViewer from '../ModelViewer';
import TextType from '../TextType';

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0c] border-t border-white/5 relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-16 lg:mb-24 gap-8 lg:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl text-center lg:text-left pt-8"
          >
             <h2 className="font-cinzel text-5xl md:text-7xl mb-6 text-white tracking-tight">
               Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Craft</span>
             </h2>
             <div className="h-1.5 w-24 bg-[#D4F600] mb-8 mx-auto lg:mx-0 rounded-full"></div>
             
             <TextType
               text="We blend artistic vision with technical excellence to create digital experiences that leave a lasting impact. Explore our core services designed to scale with your ambition."
               typingSpeed={200}
               deletingSpeed={400}
               pauseDuration={2000}
               loop={true}
               showCursor={true}
               hideCursorWhileTyping={false}
               cursorCharacter="|"
               cursorClassName="ml-1 inline-block opacity-100"
               cursorBlinkDuration={0.5}
               textColors={['#D4F600', '#D4F600']}
               variableSpeed={{ min: 200, max: 4000 }}
               startOnVisible={true}
               reverseMode={false}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="w-full lg:w-1/3 h-[300px] md:h-[400px] relative lg:-mt-12 scale-110 lg:scale-125 pointer-events-none lg:pointer-events-auto"
          >
            <ModelViewer
              url="/models/laptop.glb"
              width="100%"
              height="100%"
              modelXOffset={0}
              modelYOffset={0}
              enableMouseParallax
              enableHoverRotation
              environmentPreset="sunset"
              fadeIn
              autoRotate
              autoRotateSpeed={0.5}
              showScreenshotButton={false}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center w-full"
        >
          <MagicBento 
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            spotlightRadius={300}
            glowColor="rgba(212, 246, 0, 0.5)"
          />
        </motion.div>
      </div>
    </section>
  );
}

