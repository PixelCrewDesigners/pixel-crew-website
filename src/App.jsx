import { MessageCircle } from 'lucide-react';
import heroImg from './assets/images/hero.jpg'
import nfcImg from './assets/images/nfc.jpg'
import webImg from './assets/images/web.jpg'
import socialImg from './assets/images/social.jpg'
import printImg from './assets/images/printing.jpg'
import photoImg from './assets/images/photo.jpg'
import designImg from './assets/images/design.jpg'
import journeyImg from './assets/images/our-journey.jpg'
import tharushaImg from './assets/images/founders/tharusha.jpg'
import shehanImg from './assets/images/founders/shehan.jpg'
import nitharshanImg from './assets/images/founders/nitharshan.jpg'
import shenalImg from './assets/images/founders/shenal.jpg'
import afzalImg from './assets/images/founders/afzal.jpg'

// DESIGN GALLERY (10 photos)
import design1 from './assets/images/gallery/design/design1.jpg'
import design2 from './assets/images/gallery/design/design2.jpg'
import design3 from './assets/images/gallery/design/design3.jpg'
import design4 from './assets/images/gallery/design/design4.jpg'
import design5 from './assets/images/gallery/design/design5.jpg'
import design6 from './assets/images/gallery/design/design6.jpg'
import design7 from './assets/images/gallery/design/design7.jpg'
import design8 from './assets/images/gallery/design/design8.jpg'
import design9 from './assets/images/gallery/design/design9.jpg'
import design10 from './assets/images/gallery/design/design10.jpg'

// PHOTOGRAPHY GALLERY
import photo1 from './assets/images/gallery/photo/photo1.jpg'
import photo2 from './assets/images/gallery/photo/photo2.jpg'
import photo3 from './assets/images/gallery/photo/photo3.jpg'
import photo4 from './assets/images/gallery/photo/photo4.jpg'
import photo5 from './assets/images/gallery/photo/photo5.jpg'
import photo6 from './assets/images/gallery/photo/photo6.jpg'
import photo7 from './assets/images/gallery/photo/photo7.jpg'
import photo8 from './assets/images/gallery/photo/photo8.jpg'
import photo9 from './assets/images/gallery/photo/photo9.jpg'
import photo10 from './assets/images/gallery/photo/photo10.jpg'

// portfolio 
import pfNfc from './assets/images/portfolio/portfolio-nfc.jpg';
import pfDesign from './assets/images/portfolio/portfolio-design.jpg';
import pfPhoto from './assets/images/portfolio/portfolio-photo.jpg';
import pfWeb from './assets/images/portfolio/portfolio-web.jpg';
import pfSocial from './assets/images/portfolio/portfolio-social.jpg';
import pfPrint from './assets/images/portfolio/portfolio-printing.jpg';



import React, { useState, useEffect, useRef } from 'react';
import {
  Camera, Palette, Printer, TrendingUp, ChevronDown, Menu, X, ArrowRight,
  CheckCircle, Mail, Phone, MapPin, Search, Instagram, Twitter, Linkedin,
  Users, Target, Globe, Zap, Layers, Sparkles, CreditCard, Cloud, RefreshCw,
  Leaf, Settings, BarChart3, Smartphone, Briefcase, ExternalLink, Rocket, Heart,
  Award, ShieldCheck, Cpu, Box, Image as ImageIcon, Code, Share2, MousePointer2,
  ZapOff, UserCheck, Star, Shield, Zap as ZapIcon, Layout, ShoppingCart, Activity,
  MessageSquare, PieChart, PenTool, FileText, Aperture, Scissors, BookOpen, Loader2,
  Facebook, Github
} from 'lucide-react';
import emailjs from '@emailjs/browser';

/**
 * PIXEL CREW - EXTREME ADVANCED DIGITAL SOLUTIONS
 * Professional Agency Theme - High Fidelity Single File
 * Final Fix: Prevents mid-word splitting & fills empty hero space
 */

// --- Global Advanced Styles ---
const GlobalStyles = () => (
  <style>{`
    @keyframes infiniteScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
    @keyframes mesh { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
    @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes borderGlow { 0%, 100% { border-color: rgba(99, 102, 241, 0.2); } 50% { border-color: rgba(99, 102, 241, 0.8); } }
    @keyframes pulseGlow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.1); } }
    
    .animate-float { animation: float 6s ease-in-out infinite; }
    .bg-mesh {
      background: linear-gradient(-45deg, #050505, #080815, #0a0510, #050505);
      background-size: 400% 400%;
      animation: mesh 15s ease infinite;
    }
    .glass { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); }
    .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1); }
    .reveal.active { opacity: 1; transform: translateY(0); }
    .text-gradient { background: linear-gradient(to right, #818cf8, #c084fc, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-size: 200% auto; animation: mesh 5s linear infinite; }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    input:focus, textarea:focus, select:focus { animation: borderGlow 2s infinite; border-color: #6366f1 !important; outline: none; }
    .contact-hero-gradient { background: radial-gradient(circle at top right, #1e1b4b, #050505, #000000); }
    
    .infinite-slider { display: flex; width: 200%; animation: infiniteScroll 40s linear infinite; }
    .infinite-slider:hover { animation-play-state: paused; }
    
    /* Prevent title word splitting */
    .title-no-split {
      word-break: normal;
      overflow-wrap: normal;
      hyphens: none;
    }
  `}</style>
);

// --- Custom Visual Asset Component ---

const VisualAsset = ({ type, src, className = "" }) => {
  const configs = {
    nfc: { color: "from-blue-600 to-indigo-900", icon: CreditCard, pattern: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)" },
    web: { color: "from-emerald-600 to-teal-900", icon: Code, pattern: "linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%)" },
    social: { color: "from-pink-600 to-rose-900", icon: Share2, pattern: "radial-gradient(circle, rgba(255,255,255,0.05) 10%, transparent 10%)" },
    printing: { color: "from-orange-600 to-red-900", icon: Printer, pattern: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)" },
    photography: { color: "from-purple-600 to-indigo-900", icon: Camera, pattern: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)" },
    design: { color: "from-cyan-600 to-blue-900", icon: Palette, pattern: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)" },
    story: { color: "from-indigo-600 via-purple-600 to-pink-600", icon: Rocket, pattern: "none" },
    hero: { color: "from-indigo-950 via-black to-black", icon: ZapIcon, pattern: "none" }
  };

  const config = configs[type] || configs.nfc;

  return (
    <div className={`relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br ${config.color} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={type}
          className={`w-full h-full ${type === 'design' ? 'object-contain bg-black' : 'object-cover'}`}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      ) : (
        <>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: config.pattern, backgroundSize: '30px 30px' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <config.icon size={80} className="text-white/10 animate-float md:size-32" />
          </div>
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 pointer-events-none" />
    </div>
  );
};

// --- Core UI Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.3)]',
    outline: 'border-2 border-white/20 text-white hover:bg-white/10',
    cta: 'bg-emerald-500 text-white hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]',
    ghost: 'text-white/70 hover:text-white',
  };
  return (
    <button className={`px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition-all duration-500 flex items-center gap-3 transform hover:scale-105 active:scale-95 ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const useReveal = (dep) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [dep]);
};

const SectionTitle = ({ subtitle, title, centered = false }) => (
  <div className={`mb-12 md:mb-16 reveal ${centered ? 'text-center' : ''}`}>
    <span className="text-indigo-500 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4 block uppercase">{subtitle}</span>
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase break-normal title-no-split">{title}</h2>
  </div>
);

// --- Page Components ---

const HomePage = ({ setPage, setViewService }) => {
  const [activeEcosystem, setActiveEcosystem] = useState(0);

  const ecosystems = [
    { id: 'nfc', title: "NFC Technology", icon: CreditCard, type: 'nfc', img: nfcImg },
    { id: 'design', title: "Graphic Design", icon: Palette, type: 'design', img: designImg },
    { id: 'photo', title: "Photography", icon: Camera, type: 'photography', img: photoImg },
    { id: 'printing', title: "Printing Solutions", icon: Printer, type: 'printing', img: printImg }
  ];

  useEffect(() => {
    const interval = setInterval(() => setActiveEcosystem((prev) => (prev + 1) % ecosystems.length), 4500);
    return () => clearInterval(interval);
  }, []);

  useReveal('home');

  return (
    <div className="text-white">
      {/* Hero Section - UPDATED: Larger visual to fill space */}
      <section className="relative min-h-screen flex items-center pt-28 md:pt-20 overflow-hidden">
        {/* Fill the right-side background */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] animate-pulseGlow" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="reveal">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] md:leading-[0.9] mb-6 md:mb-8 tracking-tighter uppercase text-white break-normal title-no-split">
                WE ENGINEER <br />
                <span className="text-gradient uppercase">Digital Solutions.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-xl leading-relaxed uppercase">
                StepUp your business with Pixel Crew. We combine professional studio aesthetics with
                modern web technology and extreme marketing strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <Button onClick={() => setPage('services')}>Explore Capabilities</Button>
                <Button variant="outline" onClick={() => setPage('contact')}>Start Your Brief</Button>
              </div>
            </div>

            <div className="reveal hidden lg:flex justify-end relative">
              <div className="w-full max-w-[600px] aspect-square relative group">
                <VisualAsset
                  type="hero"
                  src={heroImg}
                  className="w-full h-full shadow-[0_0_120px_rgba(99,102,241,0.2)]"
                />

                <div className="absolute -inset-6 border border-white/5 rounded-[4rem] pointer-events-none group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 md:py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="reveal order-2 lg:order-1">
              <span className="text-indigo-500 font-bold tracking-widest uppercase text-xs mb-4 block uppercase">The Capability</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 uppercase text-white break-normal title-no-split">Unified Creative Ecosystem</h2>
              <div className="space-y-4 md:space-y-6">
                {ecosystems.map((eco, i) => (
                  <div
                    key={i}
                    className={`p-4 md:p-6 rounded-2xl transition-all duration-500 flex gap-4 md:gap-6 items-center cursor-pointer ${activeEcosystem === i ? 'glass bg-white/5 border-indigo-500/30 translate-x-2 md:translate-x-4' : 'opacity-40'}`}
                    onClick={() => setActiveEcosystem(i)}
                  >
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${activeEcosystem === i ? 'bg-indigo-600 text-white' : 'bg-white/10 text-gray-400'}`}>
                      <eco.icon size={20} />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold uppercase">{eco.title}</h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal relative flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-square max-w-[400px] md:max-w-none">
                <VisualAsset type={ecosystems[activeEcosystem].type} src={ecosystems[activeEcosystem].img} className="w-full h-full shadow-2xl shadow-indigo-500/20" />
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 p-6 md:p-10 glass rounded-3xl text-center backdrop-blur-xl">
                  <Button className="scale-90 md:scale-100" variant="cta" onClick={() => { setViewService(ecosystems[activeEcosystem].id); setPage('service-detail'); }}>Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  useReveal('about');
  const values = [
    { icon: Zap, title: "Innovation", desc: "Pushing technological boundaries in every pixel." },
    { icon: Leaf, title: "Sustainability", desc: "Eco-friendly NFC solutions and zero-carbon printing." },
    { icon: Award, title: "Quality", desc: "Studio-grade precision that scales with your growth." }
  ];

  const founders = [
    { name: "Tharusha Bimsara", role: "Managing Director", img: tharushaImg },
    { name: "Shehan Viraj", role: "Executive Director – Technology", img: shehanImg },
    { name: "V Nitharshan", role: "Executive Director – Finance", img: nitharshanImg },
    { name: "Shenal Sachin", role: "Executive Director – Marketing", img: shenalImg },
    { name: "Afzal Ruzly", role: "Executive Director – Creative & Media", img: afzalImg }
  ];



  return (
    <div className="pt-32 md:pt-40 pb-20 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32 items-center">
          <div className="reveal">
            <span className="text-indigo-500 font-bold tracking-widest uppercase text-xs mb-4 block uppercase text-white">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase text-white uppercase break-normal title-no-split">The Pixel Crew <span className="text-gradient">Story</span></h2>
            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed uppercase">
              <p>Pixel Crew was founded in 2025 with a mission to bring creativity and technology together. What started as a small idea quickly grew into a full-service digital and creative studio.</p>
              <p>We specialize in graphic design, printing, branding, web development, photography, and systems development.</p>
              <div className="flex gap-4 font-black text-indigo-500 tracking-tighter uppercase text-white"><span>#ThinkDigital</span><span>#PixelCrew</span></div>
            </div>
          </div>
          <div className="reveal">
            <VisualAsset
              type="story"
              src={journeyImg}
              className="aspect-square animate-float shadow-2xl shadow-indigo-500/10"
            />

          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-32">
          <div className="reveal glass p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border-indigo-500/20 bg-indigo-600/5">
            <Target className="text-indigo-500 mb-6" size={40} />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase text-white break-normal title-no-split">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed uppercase text-sm md:text-base">To become Sri Lanka’s most trusted and innovative creative technology brand, leading the transformation of businesses into the digital future.</p>
          </div>
          <div className="reveal glass p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border-emerald-500/20 bg-emerald-600/5">
            <Zap className="text-emerald-500 mb-6" size={40} />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase text-white break-normal title-no-split">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed uppercase text-sm md:text-base">To deliver creative, innovative, and technology-driven solutions that help businesses grow. We focus on sustainability and customer satisfaction.</p>
          </div>
        </div>

        <div className="mb-20 md:mb-32">
          <SectionTitle subtitle="Philosophy" title="Our Core Values" centered />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {values.map((v, i) => (
              <div key={i} className="reveal glass p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] text-center hover:bg-white/[0.05] transition-all">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-indigo-600/20 text-indigo-500 rounded-2xl flex items-center justify-center mb-6 mx-auto"><v.icon size={28} /></div>
                <h4 className="text-lg md:text-xl font-bold mb-3 uppercase text-white">{v.title}</h4>
                <p className="text-gray-500 text-xs md:text-sm uppercase">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 md:mb-20">
          <SectionTitle subtitle="Leadership" title="The Founders" centered />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8">
            {founders.map((f, i) => (
              <div key={i} className="reveal text-center group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="aspect-[4/5] glass rounded-2xl md:rounded-3xl mb-4 md:mb-6 relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-full h-full object-cover rounded-3xl grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                  />
                </div>

                <h4 className="text-sm md:text-lg font-bold text-white mb-1 uppercase">{f.name}</h4>
                <p className="text-indigo-400 text-[10px] md:text-xs font-bold uppercase tracking-widest uppercase">{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = ({ setPage, setViewService }) => {
  useReveal('services');
  const items = [
    { title: "NFC Digital Cards", type: 'nfc', id: 'nfc', img: nfcImg },
    { title: "Web Development", type: 'web', id: 'web', img: webImg },
    { title: "Social Media Hub", type: 'social', id: 'social', img: socialImg },
    { title: "Printing Solutions", type: 'printing', id: 'printing', img: printImg },
    { title: "Photography", type: 'photography', id: 'photo', img: photoImg },
    { title: "Graphic Design", type: 'design', id: 'design', img: designImg }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-20 text-white">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Solutions" title="StepUp Your Business" centered />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, i) => (
            <div key={i} className="reveal glass p-3 md:p-4 rounded-[2rem] md:rounded-[3rem] hover:bg-white/[0.05] transition-all group cursor-pointer" onClick={() => { setViewService(item.id); setPage('service-detail'); }}>
              <VisualAsset
                type={item.type}
                src={item.img}
                className="h-48 md:h-64 mb-4 md:mb-6"
              />

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 flex justify-between items-center group-hover:text-indigo-400 transition-colors uppercase text-white break-normal title-no-split">
                  {item.title} <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-all" />
                </h3>
                <p className="text-gray-400 text-xs md:text-sm uppercase">Tap to explore our advanced strategies.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InfiniteGallery = ({ type }) => {
  const galleries = {
    design: [
      design1, design2, design3, design4, design5,
      design6, design7, design8, design9, design10
    ],
    photography: [
      photo1, photo2, photo3, photo4, photo5,
      photo6, photo7, photo8, photo9, photo10
    ]
  };

  const images = galleries[type] || [];

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="infinite-slider gap-6 md:gap-12">
        {[...images, ...images].map((img, idx) => (
          <div key={idx} className="w-[300px] md:w-[550px] shrink-0 group">
            <div className="relative h-[220px] md:h-[350px] w-full rounded-3xl overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-700">

              {/* Blurred background */}
              <img
                src={img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-50"
                aria-hidden="true"
              />

              {/* Main image (FULL, not cut) */}
              <img
                src={img}
                alt={`gallery-${idx}`}
                className="relative z-10 w-full h-full object-contain"
              />

              {/* Dark overlay for polish */}
              <div className="absolute inset-0 bg-black/30" />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};


const ServiceDetailPage = ({ serviceId, setPage }) => {
  useReveal(serviceId);

  const contentMap = {
    nfc: {
      title: "NFC Technology Cards", tag: "The Digital Handshake", type: 'nfc', img: nfcImg,
      desc: "Upgrade your networking experience with our smart NFC Digital Business Cards — a modern, eco-friendly alternative to traditional paper cards.",
      subDesc: "With just a simple tap on a smartphone, your contact details and business info appear instantly.",
      howItWorks: "Our NFC-enabled card uses advanced Near Field Communication technology. When tapped against a compatible smartphone, it automatically shares your digital profile.",
      benefits: [
        { title: "Instant Contact Save", icon: ZapIcon }, { title: "No App Required", icon: ZapOff },
        { title: "Editable Info", icon: RefreshCw }, { title: "Eco-Friendly", icon: Leaf },
        { title: "Professional", icon: Star }, { title: "Lifetime Use", icon: ShieldCheck }
      ],
      perfectFor: "Entrepreneurs, business owners, and sales teams who want to stand out with smart technology.",
      finalNote: "At Pixel Crew, we combine innovative technology with premium design to deliver NFC cards that are future-ready."
    },
    web: {
      title: "Web Development", tag: "Digital Headquarters", type: 'web', img: webImg,
      desc: "Build a powerful digital presence with Pixel Crew’s modern and responsive web development solutions.",
      subDesc: "We design websites that are fast, secure, mobile-friendly, and built to grow your business.",
      offers: [
        { title: "Corporate Sites", icon: Globe, desc: "Sleek, professional identities." },
        { title: "E-commerce", icon: ShoppingCart, desc: "High-conversion online stores." },
        { title: "Portfolio Hubs", icon: ImageIcon, desc: "Showcase your work cinematically." },
        { title: "Booking Systems", icon: BarChart3, desc: "Streamlined service platforms." },
        { title: "Custom Web Apps", icon: Code, desc: "Bespoke systems for unique logic." },
        { title: "Maintenance", icon: Settings, desc: "Ongoing updates and security." }
      ],
      whyChoose: ["Mobile Responsive Design", "SEO-Friendly Structure", "Fast Loading Speed", "Secure & Reliable Systems", "Modern UI/UX Design"],
      finalNote: "We build websites that not only look stunning but also deliver real business results."
    },
    social: {
      title: "Social Media Hub", tag: "Engagement Engine", type: 'social', img: socialImg,
      desc: "Grow your brand, engage your audience, and increase your presence with professional management.",
      subDesc: "Strategic content that helps your business stand out across social platforms.",
      offers: [
        { title: "Content Creation", icon: Palette, desc: "Bespoke graphic design." },
        { title: "Post Scheduling", icon: Activity, desc: "Automated peak engagement." },
        { title: "Page Optmization", icon: Settings, desc: "Max discoverability." },
        { title: "Hashtag Strategy", icon: Layers, desc: "Designed to trend." },
        { title: "Audience Engagement", icon: Users, desc: "Community building." },
        { title: "Analytics", icon: BarChart3, desc: "Monitoring for growth." }
      ],
      whyChoose: ["Creative Designs", "Consistent Identity", "Data-Driven Strategy", "Increased Reach", "Professional Service"],
      finalNote: "We don’t just post content — we build digital communities."
    },
    printing: {
      title: "Printing Solutions", tag: "Industrial Fidelity", type: 'printing', img: printImg,
      desc: "Bring your ideas to life with Pixel Crew’s high-quality and professional printing services.",
      subDesc: "Vibrant, precise printing for businesses, events, and personal needs from small jobs to bulk production.",
      offers: [
        { title: "Business Cards", icon: CreditCard, desc: "Elite first impressions." },
        { title: "Marketing Kits", icon: Layers, desc: "Vibrant flyers and brochures." },
        { title: "Large Format", icon: ImageIcon, desc: "Posters and banners." },
        { title: "Stickers", icon: Palette, desc: "Custom shapes for branding." },
        { title: "ID Cards", icon: ShieldCheck, desc: "High-security solutions." },
        { title: "Stationery", icon: Briefcase, desc: "Professional letterheads." }
      ],
      whyChoose: ["High-Resolution Print", "Premium Materials", "Fast Turnaround", "Affordable Pricing", "Professional Finishing"],
      finalNote: "Quality printing technology that makes your brand stand out.",
      techMatrix: true
    },
    photo: {
      title: "Photography", tag: "Visual Storytelling", type: 'photography', img: photoImg,
      desc: "Capture perfection with high-quality, creatively styled photography that enhances your brand image.",
      subDesc: "Business, branding, or personal use — our studio setup ensures sharp details and balanced lighting.",
      offers: [
        { title: "Products", icon: Box, desc: "High-impact shots for e-commerce." },
        { title: "Portraits", icon: UserCheck, desc: "Artistic personal imagery." },
        { title: "Corporate", icon: Users, desc: "Authority-building profiles." },
        { title: "Promotions", icon: Sparkles, desc: "Creative marketing content." },
        { title: "Social Content", icon: Share2, desc: "Designed for engagement." }
      ],
      whyChoose: ["Professional Lighting", "High-Resolution", "Creative Styling", "Modern Setup", "Fast Delivery"],
      finalNote: "We turn every shot into a powerful visual story.",
      gallery: true
    },
    design: {
      title: "Graphic Design", tag: "Visual Language", type: 'design', img: designImg,
      desc: "Transform ideas into powerful visuals that strengthen brand identity and communicate clearly.",
      subDesc: "Modern, eye-catching designs from startups to established businesses.",
      offers: [
        { title: "Logo & Branding", icon: PenTool, desc: "Memorable icons." },
        { title: "Social Graphics", icon: Share2, desc: "Optimized for engagement." },
        { title: "Print Assets", icon: ImageIcon, desc: "Posters and flyers." },
        { title: "Catalogues", icon: BookOpen, desc: "Professional storytelling." },
        { title: "Packaging", icon: Box, desc: "Bespoke structures." },
        { title: "Custom Art", icon: Scissors, desc: "Unique tailored concepts." }
      ],
      whyChoose: ["Original Concepts", "Trend-Focused", "Brand Consistency", "Fast Turnaround", "Professional Quality"],
      finalNote: "Crafted with strategy and attention to detail — every pixel matters.",
      gallery: true
    }
  };

  const current = contentMap[serviceId] || contentMap['nfc'];

  return (
    <div className="pt-32 md:pt-40 pb-20 text-white min-h-screen">
      <div className="container mx-auto px-6">
        {/* Title Column - Fixed Font Sizes & break-normal to stop splitting words */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32 items-center">
          <div className="reveal relative z-10 text-white">
            <span className="text-indigo-500 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4 md:mb-6 block uppercase">{current.tag}</span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter uppercase text-white break-normal title-no-split">
              {current.title}
            </h2>
            <div className="max-w-lg space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed uppercase">{current.desc}</p>
              {current.subDesc && <p className="text-sm md:text-lg text-gray-500 leading-relaxed uppercase">{current.subDesc}</p>}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-12">
              <Button variant="cta" onClick={() => setPage('contact')}>Start Project</Button>
              <Button variant="outline" onClick={() => setPage('services')}>Back to Base</Button>
            </div>
          </div>

          <div className="reveal relative flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] lg:max-w-[600px] aspect-video sm:aspect-square relative">
              <VisualAsset type={current.type} src={current.img} className="w-full h-full shadow-2xl shadow-indigo-500/10" />
              <div className="absolute -inset-10 bg-indigo-600/10 blur-[100px] rounded-full -z-10 animate-pulse" />
            </div>
          </div>
        </div>

        {(serviceId === 'web' || serviceId === 'social' || serviceId === 'printing' || serviceId === 'photo' || serviceId === 'design') && (
          <div className="space-y-20 md:space-y-32 mb-20 md:mb-24">
            <div>
              <SectionTitle subtitle="Capabilities" title="What We Offer" centered />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {current.offers.map((offer, i) => (
                  <div key={i} className="reveal glass p-8 md:p-10 rounded-[2rem] border-white/5 flex flex-col items-center text-center group hover:bg-white/[0.05] transition-all">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-600/10 text-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <offer.icon size={28} />
                    </div>
                    <h4 className="text-base md:text-xl font-bold mb-2 uppercase text-white title-no-split">{offer.title}</h4>
                    <p className="text-gray-500 text-xs md:text-sm uppercase">{offer.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal glass p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden bg-indigo-600/5">
              <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-8 uppercase text-white title-no-split">Why Choose Pixel Crew?</h3>
                  <div className="space-y-4 md:space-y-6">
                    {current.whyChoose.map((point, i) => (
                      <div key={i} className="flex items-center gap-3 md:gap-4 text-sm md:text-xl font-bold text-gray-300 uppercase title-no-split">
                        <CheckCircle className="text-emerald-500 shrink-0" size={20} />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:flex justify-center">
                  <ZapIcon size={120} className="text-indigo-500/20 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="reveal glass p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] text-center border-indigo-500/20 max-w-4xl mx-auto">
              <p className="text-lg md:text-2xl text-white font-bold italic leading-relaxed uppercase">"{current.finalNote}"</p>
            </div>
          </div>
        )}

        {serviceId === 'nfc' && (
          <div className="space-y-20 md:space-y-32 mb-20 md:mb-24">
            <div className="reveal glass p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] relative overflow-hidden">
              <h3 className="text-2xl md:text-3xl font-black mb-6 border-l-4 border-indigo-600 pl-4 md:pl-6 uppercase text-white title-no-split">How It Works</h3>
              <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-4xl uppercase">{current.howItWorks}</p>
            </div>
            <div>
              <SectionTitle subtitle="Excellence" title="Key Benefits" centered />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {current.benefits.map((benefit, i) => (
                  <div key={i} className="reveal glass p-8 md:p-10 rounded-[2rem] border-white/5 flex flex-col items-center text-center group hover:bg-white/[0.05] transition-all">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-600/10 text-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <benefit.icon size={28} />
                    </div>
                    <p className="text-base md:text-xl font-bold uppercase text-white title-no-split">{benefit.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              <div className="reveal glass p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-indigo-600/5">
                <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-4 md:mb-6 flex items-center gap-2 uppercase"><UserCheck size={18} /> Perfect For</h4>
                <p className="text-lg md:text-2xl text-white font-bold leading-relaxed uppercase">{current.perfectFor}</p>
              </div>
              <div className="reveal glass p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] flex items-center justify-center text-center">
                <p className="text-base md:text-lg text-gray-400 italic leading-relaxed uppercase">{current.finalNote}</p>
              </div>
            </div>
          </div>
        )}

        {current.gallery && (
          <div className="reveal mb-20 md:mb-24">
            <SectionTitle subtitle="Motion Preview" title="Visual Showcase" centered />
            <InfiniteGallery type={current.type} />
          </div>
        )}
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  useReveal('portfolio');
  const items = [
    { type: 'nfc', label: 'NFC Tech', img: pfNfc },
    { type: 'design', label: 'Graphic Design', img: pfDesign },
    { type: 'photography', label: 'Photography', img: pfPhoto },
    { type: 'web', label: 'Web Development', img: pfWeb },
    { type: 'social', label: 'Social Media', img: pfSocial },
    { type: 'Logo', label: 'logo', img: pfPrint }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-20 text-white min-h-screen">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Archive" title="Selected Works" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, i) => (
            <div key={i} className="reveal group relative glass rounded-[2rem] overflow-hidden aspect-[4/3]">
              <VisualAsset
                type={it.type}
                src={it.img}
                className="w-full h-full group-hover:scale-110 transition-transform duration-1000"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-6 md:p-10">
                <span className="text-[10px] md:text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 uppercase text-white">{it.label}</span>
                <h4 className="text-xl md:text-2xl font-black uppercase text-white">Solution Archive #{i + 1}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formState, setFormState] = useState('idle');
  const formRef = useRef();
  useReveal('contact');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = 'service_ntb3nq9';
    const TEMPLATE_ID = 'template_mml8ngq';
    const PUBLIC_KEY = 'VG6NvJpx-6DclB_HJ';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setFormState('success');
      }, (error) => {
        console.log(error.text);
        setFormState('error'); // You might want to handle error state visibly
        alert("Failed to send message. Please try again.");
        setFormState('idle');
      });
  };

  return (
    <div className="contact-hero-gradient min-h-screen pt-32 md:pt-40 pb-20 text-white relative">
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-none uppercase text-white uppercase title-no-split">LET'S <br /><span className="text-gradient uppercase">Connect.</span></h2>
            <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 max-w-lg leading-relaxed uppercase text-white/80">Brief us on your project and see how Pixel Crew scales your brand identity.</p>
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-4 md:gap-6 items-center group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-500 shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-all"><Phone size={20} /></div>
                <div><p className="text-[10px] md:text-xs font-bold uppercase text-gray-500 tracking-widest uppercase text-white/50">Global Hotline</p><p className="text-lg md:text-2xl font-black uppercase text-white uppercase">+94 72 033 5383</p></div>
              </div>
              <div className="flex gap-4 md:gap-6 items-center group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-500 shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-all"><Mail size={20} /></div>
                <div><p className="text-[10px] md:text-xs font-bold uppercase text-gray-500 tracking-widest uppercase text-white/50">Briefing Hub</p><p className="text-base md:text-2xl font-black text-white uppercase">pixelcrew.design@gmail.com</p></div>
              </div>
            </div>
          </div>

          <div className="reveal glass p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] bg-white/[0.01] border-white/5 relative overflow-hidden">
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center h-[300px] md:h-[400px] text-center animate-slideUp">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6"><CheckCircle size={32} /></div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase text-white title-no-split">Brief Received!</h3>
                <p className="text-gray-400 mb-8 text-sm md:text-base text-white/70 uppercase">The Crew is analyzing your project. We will contact you shortly.</p>
                <Button onClick={() => setFormState('idle')}>Send Another</Button>
              </div>
            ) : (
              <form ref={formRef} className="space-y-4 md:space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <input type="text" name="from_name" required placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 outline-none transition-all uppercase text-white text-sm md:text-base" />
                  <input type="email" name="from_email" required placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 outline-none transition-all uppercase text-white text-sm md:text-base" />
                </div>
                <div className="relative">
                  <select name="service_type" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 appearance-none text-white/50 outline-none uppercase text-sm md:text-base">
                    <option className="text-black" value="" disabled selected>Select Service Type</option>
                    <option className="text-black">NFC Technology</option>
                    <option className="text-black">Printing Solutions</option>
                    <option className="text-black">Photography & Design</option>
                    <option className="text-black">Web Systems</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
                <textarea name="message" rows="4" required placeholder="Project Brief" className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 outline-none transition-all uppercase text-white text-sm md:text-base"></textarea>
                <Button disabled={formState === 'submitting'} className="w-full py-4 md:py-6 justify-center text-lg md:text-xl tracking-tighter uppercase uppercase text-white font-black">
                  {formState === 'submitting' ? <Loader2 size={24} className="animate-spin" /> : 'LAUNCH BRIEF'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [page, setPage] = useState('home');
  const [viewService, setViewService] = useState('nfc');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [page]);

  const navLinks = [{ name: 'Home', id: 'home' }, { name: 'About', id: 'about' }, { name: 'Services', id: 'services' }, { name: 'Portfolio', id: 'portfolio' }, { name: 'Contact', id: 'contact' }];

  return (
    <div className="bg-mesh min-h-screen selection:bg-indigo-500/30 overflow-x-hidden">
      <GlobalStyles />
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-8'}`}>
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center transition-all duration-700">
          <div onClick={() => setPage('home')} className="flex items-center gap-2 cursor-pointer glass px-4 py-2 md:px-6 md:py-3 rounded-full group">
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-black group-hover:rotate-12 transition-transform uppercase">P</div>
            <span className="text-lg md:text-xl font-black text-white uppercase tracking-tighter sm:block">Pixel Crew</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 glass px-2 py-2 rounded-full">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => setPage(link.id)} className={`px-6 py-2 rounded-full font-bold text-sm transition-all uppercase ${page === link.id ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white'}`}>{link.name}</button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="cta" onClick={() => setPage('contact')} className="hidden sm:flex !px-4 md:!px-6 h-10 md:h-12 text-xs md:text-sm uppercase text-white font-black">Call Today!</Button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden glass p-3 rounded-full text-white"><Menu size={20} /></button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`lg:hidden fixed inset-0 bg-black/98 backdrop-blur-2xl transition-all duration-700 z-50 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <div className="p-10 flex flex-col h-full">
            <div className="flex justify-end mb-16"><button onClick={() => setIsMenuOpen(false)} className="glass p-4 rounded-full text-white"><X /></button></div>
            <div className="flex flex-col gap-6">
              {navLinks.map(link => (
                <button key={link.id} onClick={() => { setPage(link.id); setIsMenuOpen(false); }} className="text-4xl font-black text-white text-left tracking-tighter hover:text-indigo-500 transition-colors uppercase">{link.name}</button>
              ))}
              <Button variant="cta" onClick={() => { setPage('contact'); setIsMenuOpen(false); }} className="mt-8 py-5 uppercase text-white font-black">Call Today!</Button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {page === 'home' && <HomePage setPage={setPage} setViewService={setViewService} />}
        {page === 'about' && <AboutPage />}
        {page === 'services' && <ServicesPage setPage={setPage} setViewService={setViewService} />}
        {page === 'service-detail' && <ServiceDetailPage serviceId={viewService} setPage={setPage} />}
        {page === 'portfolio' && <PortfolioPage />}
        {page === 'contact' && <ContactPage />}
      </main>

      {/* Footer - Updated Spacing & Vertical Alignment */}
      <footer className="pt-20 md:pt-32 pb-12 border-t border-white/5 bg-black/60 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-6 md:mb-8">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-black uppercase">P</div>
                <span className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase">Pixel Crew</span>
              </div>
              <p className="text-gray-400 mb-8 max-w-xs text-xs md:text-sm leading-relaxed uppercase">Transforming professional networking through smart, sustainable, and technology-powered solutions.</p>
              <div className="flex gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1bGGyaMzdP/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass border-white/10 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-all text-white"
                >
                  <Facebook size={18} />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/pixelcrew.lk?igsh=MXhsd3dsY2c2MHU3aw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass border-white/10 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-all text-white"
                >
                  <Instagram size={18} />
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/94720335383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass border-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all text-white"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-black text-lg md:text-xl mb-6 md:mb-8 uppercase title-no-split">Services</h4>
              <ul className="space-y-3 md:space-y-4 text-gray-400 text-xs md:text-sm font-bold uppercase">
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => { setViewService('nfc'); setPage('service-detail'); }}>NFC Digital Cards</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => { setViewService('web'); setPage('service-detail'); }}>Website Development</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => { setViewService('social'); setPage('service-detail'); }}>Social Media Hub</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => { setViewService('printing'); setPage('service-detail'); }}>Printing Solutions</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => { setViewService('photo'); setPage('service-detail'); }}>Photography</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => { setViewService('design'); setPage('service-detail'); }}>Graphic Design</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-lg md:text-xl mb-6 md:mb-8 uppercase title-no-split">Company</h4>
              <ul className="space-y-3 md:space-y-4 text-gray-400 text-xs md:text-sm font-bold uppercase">
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => setPage('about')}>About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => setPage('portfolio')}>Portfolio</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => setPage('contact')}>Contact</li>

              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-lg md:text-xl mb-6 md:mb-8 uppercase title-no-split">Contact</h4>
              <ul className="space-y-4 md:space-y-6 text-gray-400 text-xs md:text-sm font-bold uppercase">
                <li className="flex items-start gap-4 text-white uppercase"><MapPin className="text-indigo-600 shrink-0" size={16} /> Colombo, Sri Lanka</li>
                <li className="flex items-start gap-4 text-white uppercase"><Mail className="text-indigo-600 shrink-0" size={16} /> pixelcrew.design@gmail.com</li>
                <li className="flex items-start gap-4 text-white uppercase font-bold"><Phone className="text-indigo-600 shrink-0" size={16} /> +94 72 033 5383</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest gap-6 text-center text-white/40 uppercase">
            <p>&copy; {new Date().getFullYear()} PIXEL CREW. ALL RIGHTS RESERVED.</p>
            <p className="uppercase">Building a better tomorrow through smart, digital solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
