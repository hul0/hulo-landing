'use client';

import React from 'react';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-black text-zinc-500 border-t border-white/5"
    >
       <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
             <div>
                <h3 className="font-cinzel text-5xl text-white mb-2">HULO.</h3>
                <p className="font-outfit text-sm">© 2026. All Rights Reserved.</p>
             </div>
             <div className="flex gap-8">
                {['Instagram', 'Twitter', 'LinkedIn', 'Dribbble'].map(social => (
                   <a key={social} href="#" className="font-syne text-lg hover:text-purple-400 transition-colors underline decoration-1 underline-offset-4">{social}</a>
                ))}
             </div>
          </div>
       </div>
    </motion.footer>
  );
}
