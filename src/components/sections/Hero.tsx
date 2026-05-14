import { useRef, useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  ArrowRight, Activity, ShieldCheck, Brain, 
  Zap, HeartCrack, TrendingDown, BookOpen, 
  LineChart, Target, Briefcase, GraduationCap, Home, Scale, Timer, Compass, CheckCircle2,
  Dumbbell, Palette, ShieldAlert
} from 'lucide-react';

export default function Hero() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID; 

  useEffect(() => {
    const handleFocus = () => {
      emailInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      emailInputRef.current?.focus();
    };
    window.addEventListener('focus-waitlist', handleFocus);
    return () => window.removeEventListener('focus-waitlist', handleFocus);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!FORMSPREE_ID) return;

    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  const personas = [
    { title: "Engineer", desc: "Kill analysis paralysis. Reclaim cognitive energy for high-speed execution.", icon: <Target className="w-5 h-5 text-accent" />, tag: "Focus & Reclaim" },
    { title: "Founder", desc: "Eliminate reactive communication. Lead through chaotic pressure with clarity.", icon: <Briefcase className="w-5 h-5 text-accent" />, tag: "Lead with Logic" },
    { title: "Parent", desc: "Stop professional stress from spilling into home peace.", icon: <Home className="w-5 h-5 text-accent" />, tag: "Protect Peace" },
    { title: "Student", desc: "Navigate intense exams and competition without the debilitating anxiety cycle.", icon: <GraduationCap className="w-5 h-5 text-accent" />, tag: "Study & Thrive" },
    { title: "Athlete", desc: "Master the mental game. Stay stoic and calculated under high-stakes competition.", icon: <Dumbbell className="w-5 h-5 text-accent" />, tag: "Peak Performance" },
    { title: "Creative", desc: "Break through emotional blocks. Turn acute sensitivity into structured output.", icon: <Palette className="w-5 h-5 text-accent" />, tag: "Unblock Flow" },
    { title: "Executive", desc: "Manage high-level conflict and organizational crisis without losing composure.", icon: <ShieldAlert className="w-5 h-5 text-accent" />, tag: "Crisis Control" },
  ];

  // Doubling the array for a seamless infinite loop
  const marqueeContent = [...personas, ...personas];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  const scrollFade: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/20 selection:text-primary pb-24 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 rounded-full blur-[120px] opacity-60 pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="flex justify-center mb-8">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-sm font-medium text-primary shadow-sm border border-gray-100">
                <Activity className="w-4 h-4 text-accent" /> Join the exclusive waitlist
              </span>
            </motion.div>
            <motion.h1 variants={item} className="text-6xl md:text-8xl font-bold text-primary tracking-tighter mb-6 leading-[0.9]">
              Master your reaction. <br /><span className="text-accent">Take control of your mind.</span>
            </motion.h1>
            <motion.p variants={item} className="text-lg md:text-2xl text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              The AI-driven emotional analytics toolkit built for analytical minds. Identify triggers, track behavior, and build lasting resilience.
            </motion.p>
            <motion.p variants={item} className="text-primary font-black text-xl md:text-2xl mb-6 tracking-tight italic">
              Elite Emotional Intelligence for <span className="text-accent">High-Stakes Decision Making.</span>
            </motion.p>
            <motion.div variants={item} className="max-w-2xl mx-auto mb-16">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
                  <input ref={emailInputRef} type="email" name="email" placeholder="Enter your professional email..." required className="flex-[2] px-8 py-4 rounded-2xl border-2 border-gray-100 bg-white text-primary text-lg focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all shadow-sm outline-none" />
                  <button type="submit" className="flex-1 px-8 py-4 rounded-2xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-95 shadow-md">
                    Get Early Access <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-accent/10 border-2 border-accent/20 p-6 rounded-2xl flex items-center justify-center gap-3 text-accent font-bold text-xl">
                  <CheckCircle2 className="w-6 h-6" /> You're on the list!
                </motion.div>
              )}
            </motion.div>

            {/* CLINICAL METHODOLOGY BOX */}
            <motion.div variants={item} className="max-w-4xl mx-auto mb-12 p-10 bg-white/60 backdrop-blur-md rounded-[3rem] border border-gray-100 text-left shadow-sm">
              <div className="text-center mb-10"><h3 className="text-sm font-black uppercase tracking-[0.2em] text-accent flex items-center justify-center gap-3"><ShieldCheck className="w-5 h-5" /> Clinical Methodology: Emotional Control Framework</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                  <div className="bg-accent/10 p-3 rounded-2xl w-fit"><Scale className="w-6 h-6 text-accent" /></div>
                  <div><p className="font-black text-primary text-lg leading-tight mb-2">1. Trigger ID Protocol</p><p className="text-gray-500 text-sm leading-relaxed">Map cognitive distortions that catalyze reactive anger.</p></div>
                </div>
                <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left border-y md:border-y-0 md:border-x border-gray-100 py-8 md:py-0 md:px-10">
                  <div className="bg-accent/10 p-3 rounded-2xl w-fit"><Timer className="w-6 h-6 text-accent" /></div>
                  <div><p className="font-black text-primary text-lg leading-tight mb-2">2. The 90-Second Rule</p><p className="text-gray-500 text-sm leading-relaxed">Allow physiological stress compounds to dissipate before responding.</p></div>
                </div>
                <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                  <div className="bg-accent/10 p-3 rounded-2xl w-fit"><Compass className="w-6 h-6 text-accent" /></div>
                  <div><p className="font-black text-primary text-lg leading-tight mb-2">3. EMA/CBT Data Synthesis</p><p className="text-gray-500 text-sm leading-relaxed">Synthesize behavioral data with CBT for strategic choices.</p></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE PROBLEM SECTION */}
      <motion.section id="problem" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={scrollFade} className="px-6 py-24 relative z-10 scroll-mt-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tighter">The Cost of Reaction.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 transition-transform hover:-translate-y-2"><HeartCrack className="w-8 h-8 text-red-500 mb-6 mx-auto" /><h3 className="text-xl font-bold text-primary mb-4">Relationships</h3><p className="text-gray-500 text-sm leading-relaxed">Reacting blindly destroys trust with partners or family.</p></div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 transition-transform hover:-translate-y-2"><TrendingDown className="w-8 h-8 text-orange-500 mb-6 mx-auto" /><h3 className="text-xl font-bold text-primary mb-4">Performance</h3><p className="text-gray-500 text-sm leading-relaxed">Stress clouds logic, leading to mismanaged resources.</p></div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 transition-transform hover:-translate-y-2"><Zap className="w-8 h-8 text-purple-500 mb-6 mx-auto" /><h3 className="text-xl font-bold text-primary mb-4">Vitality</h3><p className="text-gray-500 text-sm leading-relaxed">Cortisol spikes ruin sleep and drain energy reserves.</p></div>
          </div>
        </div>
      </motion.section>

      {/* 3. THE METHODOLOGY SECTION */}
      <motion.section id="method" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={scrollFade} className="px-6 py-10 relative z-10 scroll-mt-24">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4 tracking-tight">Clinical Engineering.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl">We've digitized proven psychological frameworks into a high-performance system.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center group"><div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform"><Brain className="w-10 h-10 text-accent" /></div><h3 className="text-2xl font-bold text-primary mb-4">Real-Time CBT</h3><p className="text-gray-500 text-base leading-relaxed">Catch negative thought patterns before they dictate your behavior.</p></div>
          <div className="text-center group"><div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform"><LineChart className="w-10 h-10 text-accent" /></div><h3 className="text-2xl font-bold text-primary mb-4">Mood Analytics</h3><p className="text-gray-500 text-base leading-relaxed">Map triggers over time to gain objective data on your energy drains.</p></div>
          <div className="text-center group"><div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform"><BookOpen className="w-10 h-10 text-accent" /></div><h3 className="text-2xl font-bold text-primary mb-4">Digital Release</h3><p className="text-gray-500 text-base leading-relaxed">Guided prompts to process emotions and return to rational decision-making.</p></div>
        </div>
      </motion.section>

      {/* 4. MOVING TRAIN PERSONA SECTION */}
      <motion.section id="impact" initial="hidden" whileInView="show" viewport={{ once: true }} variants={scrollFade} className="py-24 relative z-10 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Built for your mind.</h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto font-medium">A system for analytical minds, not just a pep talk.</p>
        </div>

        {/* Marquee Container */}
        <div className="flex relative">
          <motion.div 
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: [0, -3200] }} // Adjust speed based on content width (W x person.length)
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {marqueeContent.map((persona, idx) => (
              <div 
                key={idx} 
                // Flat/Landscape Dimensions: W[480px] H[260px]
                className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 flex flex-col justify-between w-[480px] min-h-[260px] whitespace-normal"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center border border-white/5">
                    {persona.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{persona.title}</h3>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {persona.desc}
                </p>
                
                <div className="flex justify-end">
                  <div className="text-accent font-black text-xs uppercase tracking-widest bg-accent/15 py-3 px-4 rounded-xl text-center border border-accent/20">
                    {persona.tag}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
}