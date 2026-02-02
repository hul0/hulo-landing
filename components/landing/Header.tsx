'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';

import { motion } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-cinzel text-3xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          HULO<span className="text-purple-500">.</span>
        </Link>

        <div className="hidden md:block">
           <NavigationMenu>
            <NavigationMenuList className="gap-8">
              {['Services', 'Work', 'Clients', 'Contact'].map((item, i) => (
                <NavigationMenuItem key={item}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                  >
                    <Link href={`#${item.toLowerCase()}`} legacyBehavior passHref>
                      <NavigationMenuLink className="font-outfit text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors cursor-pointer relative group">
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                      </NavigationMenuLink>
                    </Link>
                  </motion.div>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Button className="font-outfit bg-white text-black hover:bg-zinc-200 rounded-full px-8 py-6 text-sm font-bold border-2 border-transparent transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Let&apos;s Talk
            </Button>
          </motion.div>
        </div>

        <div className="md:hidden">
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <span className="sr-only">Menu</span>
                <div className="space-y-2 cursor-pointer">
                  <div className="w-8 h-0.5 bg-white"></div>
                  <div className="w-8 h-0.5 bg-white"></div>
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#0a0a0c] border-zinc-800 text-white">
              <div className="flex flex-col gap-8 mt-20 font-cinzel text-4xl">
                {['Services', 'Work', 'Clients', 'Contact'].map((item) => (
                  <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-500 transition-colors">
                    {item}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
