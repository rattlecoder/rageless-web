import { motion, type Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const footerFade: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={footerFade}
      className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 relative z-10"
    >
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black text-primary tracking-tighter mb-2 italic">
              RageLess
            </h2>

            <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">
              Mastering Emotional Intelligence
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">

            {/* X / Twitter */}
            <a
              href="https://x.com/shashank__says"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-gray-50 text-gray-500 hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/rattlecoder"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-gray-50 text-gray-500 hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shashankt9/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-gray-50 text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex justify-center items-center">
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2026 RageLess — Master Your Mind
          </p>
        </div>
      </div>
    </motion.footer>
  );
}