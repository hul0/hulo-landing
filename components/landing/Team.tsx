'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '@/components/ProfileCard';

const teamMembers = [
  {
    name: "Alex Rivera",
    title: "Full-stack Developer",
    handle: "arivera",
    status: "Building the future",
    avatarUrl: "/team/alex.png",
    innerGradient: "linear-gradient(145deg, #1e1b4b 0%, #312e81 100%)",
    behindGlowColor: "rgba(99, 102, 241, 0.4)"
  },
  {
    name: "Sarah Chen",
    title: "UI/UX Engineer",
    handle: "schen_dev",
    status: "Designing experiences",
    avatarUrl: "/team/sarah.png",
    innerGradient: "linear-gradient(145deg, #4c0519 0%, #881337 100%)",
    behindGlowColor: "rgba(225, 29, 72, 0.4)"
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-black border-t border-white/5 relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16 lg:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cinzel text-5xl md:text-7xl mb-6 text-white tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Team</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#D4F600] mb-8 mx-auto rounded-full"></div>
            <p className="max-w-2xl text-gray-400 text-lg md:text-xl">
              Meet the visionaries and engineers behind our most ambitious projects. Technical excellence met with creative brilliance.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.handle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex justify-center"
            >
              <ProfileCard
                name={member.name}
                title={member.title}
                handle={member.handle}
                status={member.status}
                avatarUrl={member.avatarUrl}
                innerGradient={member.innerGradient}
                behindGlowColor={member.behindGlowColor}
                className="w-full max-w-[320px]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
