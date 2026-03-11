import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, FileText, Target } from 'lucide-react';
import { Button } from '../../components/ui/button';


const services = [
  {
    title: 'Impact Assessment Studies',
    short: 'Measure the real impact of your initiatives.',
    description:
      'We analyze the social, economic and environmental outcomes of projects, policies or CSR initiatives to understand what is working, what is not, and how to improve long-term sustainability.',
  },
  {
    title: 'Public Opinion & Attitude Surveys',
    short: 'Understand what people really think and feel.',
    description:
      'We gauge public perception, sentiment and behaviour around social issues, brands or programmes using robust quantitative and qualitative tools.',
  },
  {
    title: 'Community Needs Assessment',
    short: 'Design interventions that truly fit local realities.',
    description:
      'We identify specific gaps, priorities and challenges within target communities so that your interventions or products are relevant, accepted and high‑impact.',
  },
  {
    title: 'Policy Analysis & Evaluation',
    short: 'Align policy intent with on‑ground outcomes.',
    description:
      'We review existing or proposed policies to evaluate feasibility, potential impact and alignment with intended social outcomes, giving decision‑makers clear evidence.',
  },
  {
    title: 'Qualitative Research (FGDs & IDIs)',
    short: 'Go deeper than numbers.',
    description:
      'Through Focus Group Discussions and In‑Depth Interviews, we uncover motivations, beliefs and attitudes that drive social behaviour and adoption.',
  },
];


const SocialResearchServices = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-white via-amber-50/20 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Services · Social Research
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Social Research Services
          </h1>
          <p className="text-sm md:text-base text-gray-700 max-w-3xl">
            We design and execute rigorous social research that helps governments, NGOs and
            businesses understand people, communities and impact — not just numbers on a report.
          </p>
        </motion.div>


        {/* Intro highlight row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="grid gap-5 md:grid-cols-[1.3fr,1fr] mb-12"
        >
          <div className="rounded-2xl border border-amber-100 bg-white/95 p-5 shadow-sm space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Where social research helps you win
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>Design CSR and social programmes that actually solve real problems.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>Get credible evidence for donors, boards and regulators.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>Fine‑tune policies and interventions based on ground realities.</span>
              </li>
            </ul>
          </div>


          <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-semibold text-amber-900 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Who it is for
            </h3>
            <p className="text-xs text-amber-900">
              CSR teams, NGOs, multilaterals, research institutions, impact‑driven businesses and
              government departments working on social programmes.
            </p>


            <h3 className="text-sm font-semibold text-amber-900 flex items-center gap-2 mt-3">
              <Target className="w-4 h-4" />
              Typical outcomes
            </h3>
            <p className="text-xs text-amber-900">
              Clear baselines, measurable indicators, before‑after comparisons, and actionable
              recommendations that can go straight into your strategy decks.
            </p>
          </div>
        </motion.div>


        {/* Services grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, duration: 0.5 },
            },
          }}
          className="grid gap-6 md:grid-cols-2"
        >
          {services.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.97 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.45 },
                },
              }}
              whileHover={{
                y: -6,
                boxShadow: '0 18px 40px rgba(251,191,36,0.25)',
              }}
              className="rounded-2xl border border-amber-100 bg-white/95 p-5 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-xl bg-amber-100">
                  <FileText className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-amber-700 mt-0.5">{item.short}</p>
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>


        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 rounded-2xl border border-amber-100 bg-amber-50/60 px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
        >
          <div>
            <p className="text-sm font-semibold text-amber-900">
              Plan a social research or impact study?
            </p>
            <p className="text-xs text-amber-900">
              Share your problem statement and timelines — we’ll suggest a practical research
              design and estimated effort.
            </p>
          </div>
          <Button
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 text-xs md:text-sm font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => {
              window.location.href = '/contact';
            }}
          >
            Talk to our research team
          </Button>
        </motion.div>
      </div>
    </section>
  );
};


export default SocialResearchServices;
