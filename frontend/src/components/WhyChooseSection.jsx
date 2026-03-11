import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseFeatures } from '../mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckCircle2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-amber-50/40 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Why Choose <span className="text-amber-600">Buzzmarcom</span>?
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            An independent, all‑in‑one partner blending research, strategy, tech and talent under one roof.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {whyChooseFeatures.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="relative overflow-hidden border border-amber-100 bg-white/90 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                {/* subtle yellow/orange wash on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <CardHeader className="relative px-5 pt-5 pb-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-400 flex items-center justify-center shadow-md">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative px-5 pb-5 pt-0">
                  <CardDescription className="text-sm text-gray-700 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
