import React from 'react';
import { motion } from 'framer-motion';
import { aboutFeatures } from '../mockData';
import { Lightbulb, Target, Megaphone, Cog, Shield, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const iconMap = {
  Research: Lightbulb,
  Strategy: Target,
  Visibility: Megaphone,
  Operations: Cog,
  'Risk-Mitigated': Shield,
  Scalable: TrendingUp,
};

const listContainer = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.12, duration: 0.6 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-amber-50/25 to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.1fr,1.2fr] items-start">
          {/* Left: main story */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-amber-600">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              About Buzzmarcom
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Buzzmarcom <span className="text-amber-600">Solutions LLP</span>
            </h2>

            <p className="text-base md:text-lg text-amber-700 font-semibold">
              Your independent, all‑in‑one growth partner.
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              We bridge the gap between product owners and service providers by combining
              social research, market insights, business strategy, branding, technology and
              manpower support under one roof.
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Instead of juggling multiple vendors, you work with a single team that
              understands your product, your market and your compliance needs end‑to‑end.
            </p>

            {/* highlight strip */}
            <div className="mt-4 rounded-2xl border border-amber-100 bg-amber-50/70 px-4 py-3 text-xs md:text-sm text-amber-800 shadow-sm">
              We focus on de‑risked, scalable growth — from research and strategy to
              execution and manpower on the ground.
            </div>
          </motion.div>

          {/* Right: animated feature cards */}
          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {aboutFeatures.map((feature, index) => {
              const Icon = iconMap[feature.title];
              return (
                <motion.div key={feature.title} variants={listItem}>
                  <Card className="relative h-full overflow-hidden border border-amber-100 bg-white/95 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group">
                    {/* diagonal hover wash */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <CardHeader className="relative px-4 pt-4 pb-2">
                      <div className="flex items-start gap-3">
                        <motion.div
                          className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100"
                          whileHover={{ rotate: 4, scale: 1.06 }}
                          transition={{ duration: 0.22 }}
                        >
                          {Icon && <Icon className="h-5 w-5 text-amber-600" />}
                        </motion.div>
                        <div>
                          <CardTitle className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                            {feature.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative px-4 pb-4 pt-0">
                      <CardDescription className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
