import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 overflow-hidden">
      {/* Soft glow circles */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-10 w-56 h-56 rounded-full bg-amber-500/20 blur-3xl"
          animate={{ x: [-10, 20, -10], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-24 -right-10 w-64 h-64 rounded-full bg-yellow-400/15 blur-3xl"
          animate={{ x: [10, -20, 10], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Dotted pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-300 mb-4"
        >
          Let’s get started
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-3xl md:text-4xl font-extrabold text-white mb-4"
        >
          Ready to Transform Your Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Let’s discuss how we can help you achieve your goals with our integrated research,
          strategy and technology solutions.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-block group relative"
        >
          {/* glow */}
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 opacity-60 blur-lg group-hover:opacity-90 transition-opacity duration-300" />

          <Button
            size="lg"
            onClick={() => window.open("/contact", "_blank")}
            className="relative bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-gray-900 font-bold px-9 py-5 text-base md:text-lg rounded-xl shadow-xl border-none flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">Get Started Today</span>

            <motion.span
              className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gray-900/10"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.25 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>

            {/* shine effect */}
            <motion.span
              className="pointer-events-none absolute inset-0 bg-white/20"
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: ['-120%', '120%'], opacity: [0, 1, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 3 }}
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;