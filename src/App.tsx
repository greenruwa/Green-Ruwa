/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, 
  Palette, 
  Printer, 
  Music, 
  ArrowUpRight,
  ArrowUp,
  Menu,
  PenTool,
  Layers,
  Contact,
  Disc,
  MessageSquare,
  User,
  Phone,
  Facebook
} from "lucide-react";
import React, { useState, useEffect } from "react";

const InteractiveChar = ({ char, baseColor = "" }: { char: string, baseColor?: string, key?: React.Key }) => {
  if (char === " ") return <span>&nbsp;</span>;
  return (
    <span className={`hero-char inline-block select-none ${baseColor}`}>
      {char}
    </span>
  );
};

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="cursor-follower"
      style={{
        transform: `translate3d(${mousePosition.x - 15}px, ${mousePosition.y - 15}px, 0)`
      }}
    />
  );
};

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scroll to top button visibility
      setShowScrollTop(currentScrollY > 400);

      // Navbar visibility on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setNavVisible(false); // Scrolling down
      } else {
        setNavVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen w-full bg-cyan overflow-x-hidden flex flex-col font-sans selection:bg-orange selection:text-white">
      {/* 1. Background Blur Blobs (Multimedia depth) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 40, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-purple-600/30 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-violet-600/20 rounded-full blur-[100px]"
        />
      </div>

      {/* Hero Image Overlay (40% Opacity) */}
      <div className="absolute top-0 left-0 w-full h-[700px] z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070&auto=format&fit=crop" 
          alt="Keyboard Hero" 
          className="w-full h-full object-cover opacity-30 brightness-50 contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/50 to-cyan"></div>
      </div>

      {/* 2. Overhauled Navigation Bar */}
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ 
          y: navVisible ? 0 : -100,
          opacity: navVisible ? 1 : 0,
          backdropFilter: navVisible ? "blur(12px)" : "blur(0px)"
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-navy border-b border-white/10 shadow-xl"
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="text-xl font-black tracking-tighter uppercase font-display text-white">
              GREEN RUWA
            </div>
            <motion.a 
              href="https://wa.me/254795665443"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(245, 130, 31, 1)" }}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-orange to-amber-500 px-3 py-1 rounded-full animate-blink shadow-[0_0_15px_rgba(245,130,31,0.5)] cursor-pointer transition-shadow"
            >
              <span className="text-[10px] font-black text-white tracking-widest">0795665443</span>
              <Phone size={12} className="text-white fill-white" strokeWidth={3} />
            </motion.a>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-12 text-[10px] font-bold tracking-[0.3em] uppercase">
            <a href="#work" className="text-white hover:text-orange transition-colors relative group">
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-orange to-amber-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-white hover:text-orange transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-orange to-amber-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-white hover:text-orange transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-orange to-amber-400 transition-all group-hover:w-full"></span>
            </a>
            
            <motion.a
              href="#quotation"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 25px rgba(245, 130, 31, 0.6)",
              }}
              style={{ background: 'linear-gradient(to right, #F5821F, #FF9D4D)' }}
              className="px-6 py-2 rounded-sm cursor-pointer inline-flex items-center gap-2 group transition-all"
            >
              <span className="text-white font-black tracking-widest text-[9px]">HIRE ME</span>
            </motion.a>
          </div>

          <div className="md:hidden">
            <Menu 
              className="text-white cursor-pointer" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-navy border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4 text-[10px] font-bold tracking-[0.3em] uppercase">
                <a href="#work" className="text-white hover:text-orange transition-colors" onClick={() => setIsMenuOpen(false)}>Work</a>
                <a href="#services" className="text-white hover:text-orange transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#about" className="text-white hover:text-orange transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
                <a
                  href="#quotation"
                  className="text-cyan font-black border-2 border-cyan p-4 text-center rounded-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HIRE ME
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>


      <main className="relative z-10 flex-grow flex flex-col items-center w-full pt-16">
        
        {/* 3. Refined Hero Section & Card Section */}
        <section className="w-full relative flex flex-col items-center pt-20 px-6 md:px-12 overflow-hidden">
          {/* Hero Snow Zones (Framing the action) */}
          <div className="hero-snow-frame left-frame">
              <div className="snowflake" style={{ left: '20%', animationDuration: '7s' }}></div>
              <div className="snowflake orange-star" style={{ left: '50%', animationDuration: '12s' }}></div>
              <div className="snowflake" style={{ left: '80%', animationDuration: '9s', opacity: 0.3 }}></div>
          </div>

          <div className="hero-snow-frame right-frame">
              <div className="snowflake orange-star" style={{ left: '30%', animationDuration: '10s' }}></div>
              <div className="snowflake" style={{ left: '60%', animationDuration: '15s' }}></div>
              <div className="snowflake orange-star" style={{ left: '10%', animationDuration: '8s', opacity: 0.4 }}></div>
          </div>

          <header className="text-center mb-10 w-full relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title text-5xl sm:text-8xl md:text-9xl lg:text-[140px] font-black tracking-tight uppercase leading-[1.0] font-display mb-10 text-white cursor-default select-none"
            >
              <InteractiveChar char="I" />&nbsp;
              <span className="text-orange" style={{ lineHeight: '1.2' }}>
                {"DESIGN".split("").map((c, i) => (
                  <InteractiveChar key={`d-${i}`} char={c} />
                ))}
              </span><br />
              <span className="opacity-90">
                {"WITH PASSION".split("").map((c, i) => (
                  <InteractiveChar key={`p-${i}`} char={c} />
                ))}
              </span>
            </motion.h1>

            {/* Services Ticker (Visible on all devices) */}
            <div className="w-full overflow-hidden py-8 sm:py-16">
              <motion.div 
                animate={{ x: ["-50%", "0%"] }} // Left to Right as requested for mobile vibe
                transition={{ 
                  duration: window.innerWidth < 768 ? 20 : 40, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="flex whitespace-nowrap items-center gap-6 md:gap-10"
                style={{ width: "200%" }}
              >
                {[...Array(2)].map((_, idx) => (
                  <div key={idx} className="flex items-center gap-6 md:gap-10">
                    {[
                      "FLYERS", "BUSINESS CARDS", "RECEIPTS & INVOICES", 
                      "EULOGIES & FUNERAL PROGRAMS", "CLUB & EVENT POSTERS", 
                      "YOUTUBE THUMBNAILS", "STICKERS & LABEL DESIGNS", 
                      "SOCIAL MEDIA ADS", "LOGO BRANDING KITS", "PROFESSIONAL CVs"
                    ].map((service, i) => (
                      <div key={i} className="flex items-center gap-6 md:gap-10">
                        <span className={`text-[1.1rem] md:text-7xl font-black font-display uppercase tracking-tight md:tracking-tighter ${i % 2 === 0 ? 'text-navy' : 'text-white'}`}>
                          {service}
                        </span>
                        <span className="text-orange text-2xl md:text-7xl">•</span>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Minimal Contact Box */}
            <div className="sm:hidden mt-6 flex flex-col items-center gap-3">
              <motion.a
                href="https://wa.me/254795665443"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange px-6 py-3 rounded-xl flex flex-col items-center gap-2 animate-blink border-2 border-white ring-2 ring-orange shadow-none"
              >
                <span className="text-white font-black text-xl tracking-wider">0795665443</span>
              </motion.a>
              <div className="animate-wiggle">
                <Phone size={24} className="text-orange fill-orange" />
              </div>
              <p className="text-white/40 text-[10px] uppercase font-black tracking-[0.2em]">WhatsApp Me</p>
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16 h-[4px] bg-orange mx-auto shadow-[0_0_15px_rgba(245,130,31,0.6)]"
            />
          </header>
        </section>

        {/* UNIFIED INTERSTELLAR CONTENT SECTION (Seamless Dark Purple) */}
        <section className="w-full relative bg-[#0B1736] overflow-visible border-none">
          {/* Top Wave (Meeting Hero Section) */}
          <div className="absolute top-0 left-0 w-full -translate-y-[99%] h-32 pointer-events-none z-20">
            <svg className="w-full h-full block" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              {/* Secondary Glow Wave */}
              <path 
                d="M0 120L0 60C240 100 480 20 720 60C960 100 1200 20 1440 60L1440 120H0Z" 
                fill="rgba(245, 130, 31, 0.2)" 
              />
              {/* Primary Navy Wave */}
              <path 
                d="M0 120L0 40C240 80 480 0 720 40C960 80 1200 0 1440 40L1440 120H0Z" 
                fill="#0B1736" 
              />
            </svg>
          </div>

          <Snowfall />

          {/* Carousel / Showcase Section (Orange Service Cards) */}
          <section id="work" className="relative w-full py-32 overflow-hidden bg-transparent border-none">
            {/* Infinite Scrolling Pattern */}
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-center overflow-hidden">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap"
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-20 px-10">
                  <span className="text-[120px] font-display font-black text-white uppercase tracking-tighter">MULTIMEDIA</span>
                  <span className="text-[120px] font-display font-black text-orange uppercase tracking-tighter">STORYTELLING</span>
                  <span className="text-[120px] font-display font-black text-white uppercase tracking-tighter">DESIGN</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-orange font-black text-[16px] sm:text-[20px] tracking-[0.6em] uppercase mb-4">GENERAL CATEGORIES</h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full text-center">
              <Card 
                icon={<Disc className="w-14 h-14 text-white drop-shadow-lg" />}
                title="VIDEO EDITING"
                category="Multimedia Storytelling"
                delay={0.2}
                href="https://vimeo.com/1072070534?fl=pl&fe=sh"
              />
              <Card 
                icon={<Layers className="w-18 h-18 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />}
                title="GRAPHIC DESIGN"
                category="Visual Identity"
                active
                delay={0.4}
                href="https://www.behance.net/greenieruwa"
              />
              <Card 
                icon={<Palette className="w-14 h-14 text-white drop-shadow-lg" />}
                title="VOICE OVERS"
                category="Corporate Design"
                delay={0.6}
                href="https://vimeo.com/1186774214?share=copy&fl=sv&fe=ci"
              />
            </div>
          </div>
        </section>

          {/* 4. Categorizing with Symbols (Seamless Flow) */}
          <section id="services" className="w-full bg-transparent py-32 border-none">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
            {/* Anchored Group (Structural Alignment) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full flex flex-col items-center"
            >
              <div className="text-center mb-20">
                <h2 className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em] mb-4">What I Do</h2>
                <p className="text-white text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Technical Creative Services</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full mb-24 items-start">
                <a href="https://www.behance.net/greenieruwa" target="_blank" rel="noopener noreferrer" className="block">
                  <SkillItem 
                    icon={<PenTool size={24} />}
                    number="01" 
                    label="LOGOS & IDENTITY" 
                  />
                </a>
                <a href="https://www.behance.net/greenieruwa" target="_blank" rel="noopener noreferrer" className="block">
                  <SkillItem 
                    icon={<Layers size={24} />}
                    number="02" 
                    label="FLYERS & POSTERS" 
                  />
                </a>
                <a href="https://www.behance.net/greenieruwa" target="_blank" rel="noopener noreferrer" className="block">
                  <SkillItem 
                    icon={<Contact size={24} />}
                    number="03" 
                    label="BUSINESS CARDS" 
                  />
                </a>
                <a href="https://www.behance.net/greenieruwa" target="_blank" rel="noopener noreferrer" className="block">
                  <SkillItem 
                    icon={<Disc size={24} />}
                    number="04" 
                    label="MUSIC COVERS" 
                  />
                </a>
              </div>

              {/* WhatsApp CTA Anchor */}
              <div className="text-center">
                <motion.h2 
                  whileHover={{ scale: 1.02 }}
                  className="text-white font-black text-3xl md:text-6xl uppercase tracking-tighter mb-4 leading-none font-display cursor-default"
                >
                  AVAILABLE FOR WORK.
                </motion.h2>
                <p className="text-orange font-black text-[12px] tracking-[0.6em] uppercase">Multimedia Storytelling Expert</p>
              </div>
            </motion.div>
          </div>
        </section>

          {/* Testimonials & Footer CTA Wrap */}
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col items-center">
            {/* 5. The Testimonial Section - 2x2 Grid */}
            <section id="about" className="relative z-10 w-full py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  name: "CEO, Nairobi Creatives", 
                  quote: "Green's multimedia storytelling absolutely unlocked our brand’s potential." 
                },
                { 
                  name: "Founder, Studio 254", 
                  quote: "The logo and flyers brought a cinematic quality we never had before." 
                },
                { 
                  name: "Tech Startup Founder", 
                  quote: "Technical services were flawless. Our conversions doubled post-launch." 
                },
                { 
                  name: "Musician, Mombasa", 
                  quote: "Finally, visuals that actually match the sound. Pure passion." 
                }
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white p-10 rounded-[2.5rem] flex flex-col gap-6 shadow-2xl relative group transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 bg-navy border border-orange/20 rounded-full flex items-center justify-center text-white shadow-lg">
                      <User size={28} />
                    </div>
                    <span className="text-orange text-8xl font-serif leading-none select-none opacity-90 h-12">"</span>
                  </div>
                  
                  <p className="text-navy text-lg md:text-xl font-display font-bold leading-relaxed pr-8 italic">
                    {t.quote}
                  </p>
                  
                  <div className="mt-4">
                    <p className="text-navy/60 font-black uppercase tracking-[0.3em] text-[10px]">
                      {t.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

            {/* 6. Contact & WhatsApp Footer */}
            <section id="quotation" className="w-full text-center pb-40 px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white font-black text-4xl md:text-7xl uppercase tracking-tighter mb-12 leading-[0.9] font-display">
                CLICK TO GET QUOTATION.
              </h2>
              
              <motion.a
                href="https://wa.me/254795665443"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 25px 50px -12px rgba(37, 211, 102, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-6 rounded-2xl border-4 border-[#F5821F] font-black uppercase tracking-[0.2em] text-sm shadow-[0_20px_40px_rgba(37,211,102,0.2)] group transition-all"
              >
                <Phone size={20} fill="currentColor" />
                <span>WHATSAPP ME NOW: 0795665443</span>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>
            </section>
          </div>
        </section>
      </main>

      <footer className="relative w-full bg-navy py-24 px-6 md:px-12 overflow-visible border-none">
        {/* Interstellar Gradient Transition */}
        <div className="absolute top-0 left-0 w-full -translate-y-1/2 h-[200px] pointer-events-none z-0">
          <div className="w-full h-full bg-gradient-to-t from-[#0B1736] to-[#00ffff] blur-[40px] opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <h2 className="text-white font-black uppercase tracking-[0.5em] mb-12">CONNECT WITH ME</h2>
          
          <div className="flex gap-6 items-center justify-center">
            {/* Facebook */}
            <motion.a
              href="https://www.facebook.com/share/17CRKGQsij/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.1,
                y: -5
              }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#00ffff]/20 text-[#00ffff] hover:text-orange hover:border-orange hover:shadow-[0_0_20px_rgba(245,130,31,0.3)] transition-all duration-300"
              title="Facebook"
            >
              <Facebook size={24} strokeWidth={2.5} />
            </motion.a>

            {/* TikTok */}
            <motion.a
              href="https://www.tiktok.com/@green.ruwa?_r=1&_t=ZS-95rmL5JLQAM"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.1,
                y: -5
              }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#00ffff]/20 text-[#00ffff] hover:text-orange hover:border-orange hover:shadow-[0_0_20px_rgba(245,130,31,0.3)] transition-all duration-300"
              title="TikTok"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="24" 
                height="24" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
              </svg>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/254795665443"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.1,
                y: -5
              }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#00ffff]/20 text-[#00ffff] hover:text-orange hover:border-orange hover:shadow-[0_0_20px_rgba(245,130,31,0.3)] transition-all duration-300"
              title="WhatsApp"
            >
              <Phone size={24} strokeWidth={2.5} />
            </motion.a>
          </div>

          <div className="mt-20 text-[10px] text-white uppercase tracking-[0.4em] font-black leading-relaxed">
            © 2026 VIBE CODED BY GREEN RUWA • ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>

      {/* 7. Back To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-orange text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white hover:translate-y-[-5px] transition-transform"
          >
            <ArrowUp size={24} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>
      <CursorFollower />
    </div>
  );
}

function Snowfall() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(40)].map((_, i) => {
        const isOrange = Math.random() > 0.7;
        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = -Math.random() * 20;
        const opacity = Math.random() * 0.6 + 0.1;

        return (
          <div
            key={i}
            className="absolute top-0 star-fall"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: isOrange ? 'rgba(245, 130, 31, 0.5)' : 'rgba(255, 255, 255, 0.6)',
              borderRadius: '50%',
              boxShadow: isOrange ? '0 0 12px #F5821F' : 'none',
              filter: !isOrange ? 'blur(1px)' : 'none',
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity: opacity,
            }}
          />
        );
      })}
    </div>
  );
}

function Card({ icon, title, category, active = false, delay = 0, href = "#" }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -15, scale: active ? 1.05 : 1.02, boxShadow: "0 50px 100px rgba(245, 130, 31, 0.4)" }}
      className={`
        w-full md:w-80 h-[420px] rounded-[2.5rem] p-10 flex flex-col justify-between transition-all duration-500 cursor-pointer
        bg-orange border-2 border-white shadow-[0_30px_60px_rgba(245,130,31,0.2)]
        ${active ? 'z-20 scale-105' : 'opacity-90'}
      `}
    >
      <div className="w-full h-48 rounded-3xl flex items-center justify-center bg-white/10 shadow-inner">
        <motion.div
           animate={active ? { rotate: [0, 5, -5, 0] } : {}}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
      </div>
      <div>
        <p className="text-white text-[11px] font-black uppercase tracking-[0.4em] mb-3 opacity-80">
          {category}
        </p>
        <h3 className="text-2xl font-display font-black text-white tracking-tighter uppercase">{title}</h3>
      </div>
    </motion.a>
  );
}

function SkillItem({ number, label, icon }) {
  return (
    <div className="relative p-[5px] rounded-[2.2rem] overflow-hidden group shadow-[0_0_25px_rgba(245,130,31,0.4)]">
      {/* Rotating Border Effect */}
      <div className="absolute inset-[-100%] bg-[conic-gradient(transparent,#F5821F_20deg,transparent_120deg)] animate-spin-slow z-0" />
      
      {/* Inner Card Content */}
      <motion.div 
        whileHover={{ scale: 0.98 }}
        className="relative z-10 bg-[#00FFFF] rounded-[2rem] p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300"
      >
        <div className="mb-8 w-16 h-16 rounded-2xl bg-[#0B1736]/10 flex items-center justify-center transition-all duration-500">
          {React.cloneElement(icon as React.ReactElement, { 
            className: "text-[#0B1736]", 
            strokeWidth: 3 
          })}
        </div>
        <div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[10px] font-black text-[#0B1736]">{number}</span>
            <div className="h-[1px] w-4 bg-[#0B1736]/30" />
          </div>
          <p className="text-sm font-black uppercase tracking-[0.2em] leading-tight text-[#0B1736]">{label}</p>
        </div>
      </motion.div>
    </div>
  );
}
