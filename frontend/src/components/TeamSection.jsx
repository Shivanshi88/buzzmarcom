import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../mockData';
import { Card, CardContent } from './ui/card';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white via-amber-50/40 to-white">
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
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Meet Our <span className="text-amber-600">Leadership</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            The people who blend research, strategy, content and compliance into one unified vision.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={cardVariants}>
              <Card className="overflow-hidden border border-amber-100 bg-white/95 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group">
                {/* Image */}
                <div className="h-56 sm:h-64 w-full overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-amber-600">
                      {member.title}
                    </p>
                  </div>

                  <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-3 space-y-1">
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                      Expertise & Background
                    </p>
                    <p className="text-xs text-gray-700">{member.expertise}</p>
                    <p className="text-xs text-gray-700">{member.background}</p>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {member.description}
                  </p>

                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-900 mb-1">
                      Why you’ll love working with them
                    </p>
                    <p className="text-xs text-gray-600 italic">
                      “{member.whyWork}”
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
