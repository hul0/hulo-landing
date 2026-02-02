'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedContent from '@/components/AnimatedContent';
import StarBorder from '@/components/StarBorder';

export function Hero() {
  return (
    
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-[#0a0a0c] to-[#0a0a0c]">
       {/* Abstract Background Imagery */}
       <motion.div 
         animate={{ y: [0, -20, 0], rotate: [6, 8, 6] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-20 right-10 w-[300px] h-[400px] opacity-20 mix-blend-screen pointer-events-none"
       >
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover rounded-[50px]" alt="Abstract" />
       </motion.div>
       <motion.div 
         animate={{ y: [0, 30, 0], rotate: [-12, -10, -12] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         className="absolute bottom-20 left-10 w-[250px] h-[350px] opacity-20 mix-blend-screen pointer-events-none"
       >
          <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover rounded-[100px]" alt="Retro Tech" />
       </motion.div>

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
              DIGITAL <br />
              <span className="italic font-playfair pr-4 text-purple-200">Mastery</span>
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
