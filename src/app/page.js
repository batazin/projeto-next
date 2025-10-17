'use client';

import Image from "next/image";
import { Inter } from "next/font/google";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

// Configurar a fonte Inter
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // 300 = Light
  variable: '--font-inter',
});

export default function Home() {
  const headerRef = useRef(null);
  const heroLeftRef = useRef(null);
  const heroRightRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const heroLeftInView = useInView(heroLeftRef, { once: true, amount: 0.3 });
  const heroRightInView = useInView(heroRightRef, { once: true, amount: 0.3 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={`${inter.className} container max-w-[1440px] mx-auto px-4 mt-1.5 mb-4 lg:mb-12 md:px-16 lg:px-24 pt-7`}>
      {/* Header */}
      <motion.div 
        ref={headerRef}
        initial={{ opacity: 0, y: -50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 gap-6 mb-5 lg:mb-18 py-4 pl-[25px] pr-[10px] backdrop-blur-lg relative"
        style={{
          backgroundColor: 'rgba(225, 225, 225, 0.1)', 
          borderRadius: '10px'
        }}
      >
        <nav className="w-full rounded-lg flex justify-between items-center" 
          style={{ 
            color:'#fff' 
          }}
        >
          <div className="hidden lg:flex items-center gap-x-8">
            <a href="/" className="text-[16px] hover:-translate-y-1 hover:text-blue-400 transition font-light duration-300">
              INICIO
            </a>
            <a href="/" className="text-[16px] hover:-translate-y-1 hover:text-blue-400 transition font-light duration-300">
              HOME
            </a>
            <a href="/" className="text-[16px] hover:-translate-y-1 hover:text-blue-400 transition font-light duration-300">
              ABOUT
            </a>
          </div>

          <div className="hidden lg:flex gap-4">
            <a 
              href="/" 
              style={{borderColor: 'rgba(255, 255, 255, 0.3)'}}
              className="text-[16px] hover:bg-white hover:bg-opacity-10 hover:scale-105 transition font-light border border-white px-3 py-2 rounded-lg"
            >
              HISTORICO
              <Image 
                src="/ic-dictionary.png"
                alt="icone dicionario" 
                width={14} 
                height={15} 
                className="inline-block ml-2 mb-1"
              />
            </a>
            <a 
              href="/" 
              className="text-[16px] hover:bg-opacity-90 hover:scale-105 transition font-normal border border-white px-3.5 py-2 rounded-lg bg-white text-black"
            >
              PROFILE
              <Image 
                src="/ic-human.png"
                alt="icone humano" 
                width={14} 
                height={15} 
                className="inline-block ml-2 mb-1"
              />
            </a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 z-50 ml-auto"
            aria-label="Menu"
          >
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-7 h-0.5 bg-white transition-all"
            />
            <motion.span 
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-7 h-0.5 bg-white transition-all"
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-7 h-0.5 bg-white transition-all"
            />
          </button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-4 px-4">
                
                <a 
                  href="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[16px] hover:text-blue-400 transition font-light py-2 border-b border-white border-opacity-20"
                >
                  INICIO
                </a>
                <a 
                  href="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[16px] hover:text-blue-400 transition font-light py-2 border-b border-white border-opacity-20"
                >
                  HOME
                </a>
                <a 
                  href="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[16px] hover:text-blue-400 transition font-light py-2 border-b border-white border-opacity-20"
                >
                  ABOUT
                </a>

                <a 
                  href="/" 
                  onClick={() => setIsMenuOpen(false)}
                  style={{borderColor: 'rgba(255, 255, 255, 0.3)'}}
                  className="text-[16px] text-center hover:bg-white hover:bg-opacity-10 transition font-light border border-white px-3 py-2 rounded-lg mt-4"
                >
                  HISTORICO
                  <Image 
                    src="/ic-dictionary.png"
                    alt="icone dicionario" 
                    width={14} 
                    height={15} 
                    className="inline-block ml-2 mb-1"
                  />
                </a>
                <a 
                  href="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[16px] text-center hover:bg-opacity-90 transition font-normal border border-white px-3.5 py-2 rounded-lg bg-white text-black"
                >
                  PROFILE
                  <Image 
                    src="/ic-human.png"
                    alt="icone humano" 
                    width={14} 
                    height={15} 
                    className="inline-block ml-2 mb-1"
                  />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="grid grid-cols-12 gap-6 mb-12 py-2.5 ">
        <motion.div 
          ref={heroLeftRef}
          initial={{ opacity: 0, x: -50 }}
          animate={heroLeftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="col-span-12 lg:col-span-6 mt-0 lg:mt-47 text-center lg:text-left"
        >
          <a 
            href="/" 
            className="text-[18px] hover:-translate-y-1 transition font-extralight"
            style={{ 
              color: '#E2E2E2'}}>
            empor incididunt ut labore
            <Image 
              src="/ic-notification.png"
              alt="icone notificação" 
              width={14} 
              height={14} 
              className="inline-block ml-2 mb-1"
            />
          </a>
          <h2 className="text-[34px] lg:text-[64px] text-4xl font-bold mb-6 mt-6" style={{ color: '#fff' }}>
            Voluptate velit esse cillum dolore 
          </h2>
          <p className="text-[20px]  mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute i
          </p>
          <a 
            className="text-[20px] bg-[rgba(255,255,255,0.2)] py-1.5 pl-[20px] pr-[10px] rounded-lg transition hover:-translate-y-1 hover:bg-[rgba(230,230,230,0.5)] font-medium inline-block hover:-translate-y-1 transition duration-300"
            href="/"
          >
            GARANTIR VAGA
            <Image
              src="/ic-right.png"
              alt="icone seta"
              width={16}
              height={16}
              className="inline-block ml-4 mb-1"
            />
          </a>
        </motion.div>
        <motion.div 
          className="col-span-12 lg:col-span-6"
          ref={heroRightRef}
          initial={{ opacity: 0, x: 50 }}
          animate={heroRightInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Image 
            src="/laptop.png" 
            alt="Example" 
            width={644} 
            height={742} 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}