'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-[#0a0a0c] overflow-hidden">
       <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
             <h2 className="font-abril text-6xl md:text-8xl mb-8 text-white">Ready to <span className="italic font-playfair text-purple-400">Create?</span></h2>
             <p className="font-outfit text-lg md:text-xl text-zinc-400">
                Let&apos;s discuss your next breakthrough project.
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#121215] border border-white/10 text-white rounded-[50px] p-8 md:p-16 max-w-5xl mx-auto shadow-2xl relative overflow-hidden"
          >
             <div className="absolute -right-20 -top-20 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>

             <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-outfit text-xs uppercase tracking-widest font-bold text-zinc-500">Your Name</label>
                    <Input placeholder="John Doe" className="bg-transparent border-b border-zinc-800 border-t-0 border-x-0 rounded-none px-0 h-14 text-2xl font-syne focus-visible:ring-0 focus-visible:border-purple-500 placeholder:text-zinc-700 shadow-none" />
                  </div>
                  <div className="space-y-2">
                     <label className="font-outfit text-xs uppercase tracking-widest font-bold text-zinc-500">Email Address</label>
                     <Input type="email" placeholder="john@example.com" className="bg-transparent border-b border-zinc-800 border-t-0 border-x-0 rounded-none px-0 h-14 text-2xl font-syne focus-visible:ring-0 focus-visible:border-purple-500 placeholder:text-zinc-700 shadow-none" />
                  </div>
                </div>
                <div className="space-y-2">
                   <label className="font-outfit text-xs uppercase tracking-widest font-bold text-zinc-500">The Vision</label>
                   <Textarea placeholder="Tell us about the project..." className="bg-white/[0.02] border border-white/5 rounded-[30px] min-h-[200px] text-xl font-dm-serif p-6 focus-visible:ring-0 focus-visible:border-purple-500 resize-none placeholder:text-zinc-700 shadow-none" />
                </div>
                <div className="flex justify-end">
                   <Button className="bg-white text-black hover:bg-purple-500 hover:text-white rounded-full px-12 py-8 text-xl font-syne font-bold transition-all hover:px-14">
                     Send Proposal
                   </Button>
                </div>
             </form>
          </motion.div>
       </div>
    </section>
  );
}
