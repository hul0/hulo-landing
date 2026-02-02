'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TiltedCard from '@/components/TiltedCard';

const portfolio = [
  { 
    title: "FinTech Dashboard", 
    category: "Web App", 
    image: "https://images.unsplash.com/photo-1642132652859-3ef5a92906a3?q=80&w=800&auto=format&fit=crop", // Dark UI
    description: "Real-time analytics for crypto markets."
  },
  { 
    title: "E-Commerce", 
    category: "Mobile App", 
    image: "https://images.unsplash.com/photo-1607677686474-922dbc3df5f5?q=80&w=800&auto=format&fit=crop", // Shopping abstract
    description: "Seamless shopping experience."
  },
  { 
    title: "HealthTech", 
    category: "Platform", 
    image: "https://images.unsplash.com/photo-1576091160550-217358c7e618?q=80&w=800&auto=format&fit=crop", // Medical UI
    description: "Connecting patients and doctors."
  },
  { 
    title: "Creative Studio", 
    category: "Website", 
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop", // Minimalist
    description: "Showcasing world-class art."
  },
];

export function Portfolio() {
  return (
    <section id="work" className="py-32 bg-[#050505] overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6">
         <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
         >
            <div>
              <h2 className="font-syne text-5xl md:text-7xl font-bold uppercase text-white">Selected<br/>Works</h2>
            </div>
            <div className="hidden md:block">
               <span className="font-outfit text-xs border border-white/20 text-zinc-400 rounded-full px-4 py-2">HOVER TO REVEAL</span>
            </div>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex justify-center"
              >
                 <TiltedCard
                    imageSrc={item.image}
                    altText={item.title}
                    captionText={item.category}
                    containerHeight="400px"
                    containerWidth="100%"
                    imageHeight="400px"
                    imageWidth="100%"
                    rotateAmplitude={10}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                    overlayContent={
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                             <span className="font-outfit text-purple-400 text-xs uppercase tracking-widest mb-2 border border-purple-500/30 w-fit px-3 py-1 rounded-full backdrop-blur-md bg-black/50">{item.category}</span>
                             <h3 className="font-cinzel text-3xl text-white mb-2">{item.title}</h3>
                             <p className="font-outfit text-zinc-400 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.description}</p>
                        </div>
                    }
                 />
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}
