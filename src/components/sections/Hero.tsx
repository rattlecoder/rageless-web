import { useRef, useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  ArrowRight, Activity, ShieldCheck, Brain, 
  Zap, HeartCrack, TrendingDown, BookOpen, 
  LineChart, Target, Briefcase, GraduationCap, Home, Scale, Timer, Compass, CheckCircle2
} from 'lucide-react';

export default function Hero() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);

  // Pulls the ID from your .env file
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

    // If .env is missing, we stop here to prevent a broken request
    if (!FORMSPREE_ID) {
      console.error("Formspree ID is missing from .env file");
      return;
    }

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

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 300, damping: 24 } 
    },
  };

  const scrollFade: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/20 selection:text-primary pb-24 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 rounded-full blur-[120px] opacity-60 pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div variants={container} initial="hidden" animate="show">
            
            <motion.div variants={item} className="flex justify-center mb-8">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-sm font-medium text-primary shadow-[0_8px_30px_rgb(27,36,64,0.04)] border border-gray-100">
                <Activity className="w-4 h-4 text-accent" />
                Join the exclusive waitlist
              </span>
            </motion.div>

            <motion.h1 variants={item} className="text-6xl md:text-8xl font-bold text-primary tracking-tighter mb-6 leading-[0.9]">
              Master your reaction. <br />
              <span className="text-accent">Take control of your mind.</span>
            </motion.h1>

            <motion.p variants={item} className="text-lg md:text-2xl text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              The AI-driven emotional analytics toolkit built for analytical minds. Identify triggers, track behavior, and build lasting resilience.
            </motion.p>

            <motion.p variants={item} className="text-primary font-black text-xl md:text-2xl mb-6 tracking-tight italic">
              Elite Emotional Intelligence for <span className="text-accent">High-Stakes Decision Making.</span>
            </motion.p>

            <motion.div variants={item} className="max-w-2xl mx-auto mb-16">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    ref={emailInputRef}
                    type="email"
                    name="email"
                    placeholder="Enter your professional email..."
                    required
                    className="flex-[2] px-8 py-5 rounded-2xl border-2 border-gray-100 bg-white text-primary text-lg focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all shadow-sm outline-none"
                  />
                  <button
                    type="submit"
                    className="flex-1 px-8 py-5 rounded-2xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-95 shadow-md"
                  >
                    Get Early Access
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-accent/10 border-2 border-accent/20 p-6 rounded-2xl flex items-center justify-center gap-3 text-accent font-bold text-xl"
                >
                  <CheckCircle2 className="w-6 h-6" />
                  You're on the list! We'll be in touch soon.
                </motion.div>
              )}
            </motion.div>

            {/* CLINICAL METHODOLOGY RULES BOX */}
            <motion.div 
              variants={item}
              className="max-w-4xl mx-auto mb-12 p-10 bg-white/60 backdrop-blur-md rounded-[3rem] border border-gray-100 text-left shadow-sm"
            >
              <div className="text-center mb-10">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-accent flex items-center justify-center gap-3">
                  <ShieldCheck className="w-5 h-5" /> Clinical Methodology: Emotional Control Framework
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                  <div className="bg-accent/10 p-3 rounded-2xl h-fit w-fit"><Scale className="w-6 h-6 text-accent" /></div>
                  <div>
                    <p className="font-black text-primary text-lg leading-tight mb-2">1. Trigger ID Protocol</p>
                    <p className="text-gray-500 text-sm leading-relaxed">Map cognitive distortions that catalyze reactive anger via restructuring.</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left border-y md:border-y-0 md:border-x border-gray-100 py-8 md:py-0 md:px-10">
                  <div className="bg-accent/10 p-3 rounded-2xl h-fit w-fit"><Timer className="w-6 h-6 text-accent" /></div>
                  <div>
                    <p className="font-black text-primary text-lg leading-tight mb-2">2. The 90-Second Rule</p>
                    <p className="text-gray-500 text-sm leading-relaxed">Biologically allow physiological stress compounds to dissipate before responding.</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                  <div className="bg-accent/10 p-3 rounded-2xl h-fit w-fit"><Compass className="w-6 h-6 text-accent" /></div>
                  <div>
                    <p className="font-black text-primary text-lg leading-tight mb-2">3. EMA/CBT Data Synthesis</p>
                    <p className="text-gray-500 text-sm leading-relaxed">Synthesize behavioral data with CBT for strategic, non-reactive choices.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent/50" />
                Clinical Frameworks
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent/50" />
                Privacy Focused
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE PROBLEM SECTION */}
      <motion.section 
        id="problem"
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={scrollFade}
        className="px-6 py-24 relative z-10 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tighter">The Cost of Reaction.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl mb-16">Reactive anger doesn't just feel bad—it's expensive for your health and career.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 transition-transform hover:-translate-y-2">
              <HeartCrack className="w-8 h-8 text-red-500 mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-primary mb-4">Relationships</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">A single outburst can set back months of trust-building with partners or family.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 transition-transform hover:-translate-y-2">
              <TrendingDown className="w-8 h-8 text-orange-500 mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-primary mb-4">Performance</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">Stress clouds logic, leading to mismanaged resources and reactive choices.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 transition-transform hover:-translate-y-2">
              <Zap className="w-8 h-8 text-purple-500 mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-primary mb-4">Vitality</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">Cortisol spikes ruin sleep architecture and drain your physical energy reserves.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. THE METHODOLOGY SECTION */}
      <motion.section 
        id="method"
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={scrollFade}
        className="px-6 py-10 relative z-10 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4 tracking-tight">Clinical Engineering.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl">We've digitized proven psychological frameworks into a high-performance system.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center group">
            <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
              <Brain className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Real-Time CBT</h3>
            <p className="text-gray-500 text-base leading-relaxed">Catch negative thought patterns before they dictate your behavior.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
              <LineChart className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Mood Analytics</h3>
            <p className="text-gray-500 text-base leading-relaxed">Map triggers over time to gain objective data on your energy drains.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
              <BookOpen className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Digital Release</h3>
            <p className="text-gray-500 text-base leading-relaxed">Guided prompts to process emotions and return to rational decision-making.</p>
          </div>
        </div>
      </motion.section>

      {/* 4. TARGET PERSONAS SECTION */}
      <motion.section 
        id="impact"
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={scrollFade}
        className="px-6 py-24 relative z-10 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto bg-primary rounded-[3.5rem] p-12 md:p-24 shadow-2xl text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] opacity-40 pointer-events-none" />

          <div className="text-center mb-20 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Built for your mind.</h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">Designed for analytical minds that require a system, not a pep talk.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 flex flex-col h-full">
              <Target className="w-8 h-8 text-accent mb-6" />
              <h3 className="text-xl font-bold mb-4">Engineer</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">Kill analysis paralysis. Reclaim cognitive energy for execution over over-engineering.</p>
              <div className="text-accent font-black text-xs uppercase tracking-widest bg-accent/10 py-3 px-4 rounded-xl text-center">Focus & Reclaim</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 flex flex-col h-full">
              <Briefcase className="w-8 h-8 text-accent mb-6" />
              <h3 className="text-xl font-bold mb-4">Founder</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">Eliminate reactive communication. Lead through pressure with clinical clarity.</p>
              <div className="text-accent font-black text-xs uppercase tracking-widest bg-accent/10 py-3 px-4 rounded-xl text-center">Lead with Logic</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 flex flex-col h-full">
              <Home className="w-8 h-8 text-accent mb-6" />
              <h3 className="text-xl font-bold mb-4">Parent</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">Stop the spillover. Prevent professional stress from damaging your home peace.</p>
              <div className="text-accent font-black text-xs uppercase tracking-widest bg-accent/10 py-3 px-4 rounded-xl text-center">Protect Peace</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 flex flex-col h-full">
              <GraduationCap className="w-8 h-8 text-accent mb-6" />
              <h3 className="text-xl font-bold mb-4">Student</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">Navigate competition and exams without the debilitating anxiety cycle.</p>
              <div className="text-accent font-black text-xs uppercase tracking-widest bg-accent/10 py-3 px-4 rounded-xl text-center">Study & Thrive</div>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}