// ServicesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-white">
      {/* Background dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-amber-400/70 to-orange-500/70 rounded-full"
            style={{
              left: `${8 + i * 9}%`,
              top: `${15 + i * 6}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.4, 0.9, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <motion.div
              className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
            <Sparkles className="w-8 h-8 text-amber-500 drop-shadow-md" />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-3">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto">
            Smart, research-backed solutions across social, market, tech and talent.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const colorMap = {
  'Social Research': 'from-amber-400 via-yellow-400 to-amber-500',
  'Market Research': 'from-yellow-500 via-amber-500 to-orange-400',
  'Business Consultancy': 'from-orange-500 via-amber-500 to-yellow-400',
  'Branding & Advertisement': 'from-amber-500 via-orange-500 to-yellow-500',
  'IT Solutions': 'from-yellow-400 via-amber-400 to-orange-500',
  'Manpower Support': 'from-yellow-300 via-amber-300 to-yellow-500', // yaha yellow zyada, orange kam
};

const ServiceCard = ({ service, index }) => {
  const gradient = colorMap[service.title] || 'from-amber-500 via-orange-500 to-yellow-400';

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.03 },
        },
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: '0 18px 40px rgba(251, 191, 36, 0.35)',
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative rounded-2xl bg-white/90 border border-amber-100 shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between"
    >
      {/* subtle bg overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-100/40 via-orange-100/30 to-yellow-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative">
        {/* Icon */}
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg shadow-md`}
            whileHover={{ rotate: 3, scale: 1.05 }}
            transition={{ duration: 0.25 }}
          >
            {service.title[0]}
          </motion.div>
          <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
            {service.title}
          </CardTitle>
        </div>

        {/* Description */}
        <CardDescription className="text-sm text-gray-700 leading-relaxed">
          {service.description}
        </CardDescription>
      </div>

      {/* Button */}
      <div className="relative mt-6">
        <Link to={service.path}>
          <Button
            variant="ghost"
            className="w-full justify-between px-0 text-amber-600 hover:text-orange-600 hover:bg-transparent group/btn"
          >
            <span className="text-sm font-semibold">Learn more</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
              className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 group-hover/btn:bg-orange-100"
            >
              <ArrowRight className="w-3 h-3" />
            </motion.span>
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
