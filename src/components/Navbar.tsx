import { motion } from 'framer-motion';
import logo from '../assets/rageless-logo.png';

export default function Navbar() {
  const triggerFocus = () => {
    // Dispatch custom event for Hero focus logic
    window.dispatchEvent(new Event('focus-waitlist'));
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-gray-100/50"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        <a href="#" className="flex items-center gap-5 cursor-pointer group">
          <img 
            src={logo} 
            alt="RageLess Logo" 
            className="h-14 w-14 object-cover rounded-full border-2 border-gray-200 shadow-sm group-hover:scale-105 transition-transform"
          />
          <span className="text-4xl font-black text-primary tracking-tighter">
            Rage<span className="text-gray-400 font-medium">Less</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10 text-xs font-black text-gray-500 uppercase tracking-[0.2em]">
          <a href="#problem" className="hover:text-primary transition-colors">The Problem</a>
          <a href="#method" className="hover:text-primary transition-colors">The Method</a>
          <a href="#impact" className="hover:text-primary transition-colors">Impact</a>
        </div>

        <button 
          onClick={triggerFocus}
          className="px-10 py-4 rounded-full bg-white text-primary text-sm font-black border-2 border-gray-100 shadow-sm hover:border-accent hover:text-accent hover:shadow-md transition-all active:scale-95"
        >
          Join Waitlist
        </button>
      </div>
    </motion.nav>
  );
}