import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Briefcase, TrendingUp, Target } from 'lucide-react';
import { Button } from '../../components/ui/button';

const services = [
  {
    title: 'Strategic Business Planning',
    short: 'Clear long‑term direction with a practical roadmap.',
    description:
      'We help you define long‑term goals and convert them into realistic, phased plans covering markets, offerings, capabilities, and investments so that everyone in the organization is aligned.',
  },
  {
    title: 'Operational Efficiency & Process Optimization',
    short: 'Lower cost, higher output.',
    description:
      'We map your current workflows, SOPs, and hand‑offs to identify bottlenecks, then design lean, efficient processes that reduce cost and improve productivity.',
  },
  {
    title: 'Go‑to‑Market (GTM) Strategy',
    short: 'Make every launch structured and focused.',
    description:
      'For a new product or new market, we create a structured GTM plan for positioning, pricing, channels, partnerships, and campaigns so the launch is focused, not scattered.',
  },
  {
    title: 'Financial Advisory & Management',
    short: 'Translate numbers into clear business language.',
    description:
      'We bring clarity on budgeting, forecasting, unit economics, cash‑flow, and cost control so that as you grow, profitability remains stable.',
  },
  {
    title: 'Change Management & Organisational Growth',
    short: 'Scale with less chaos.',
    description:
      'When you scale, restructure, or adopt new technology, we design the change plan, communication, and training to keep disruption to a minimum.',
  },
];

const BusinessConsultancyServices = () => {
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
            Services · Business Consultancy
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Business Consultancy Services
          </h1>
          <p className="text-sm md:text-base text-gray-700 max-w-3xl">
            We look at strategy, operations, finance, and change management together to give you
            practical, implementable business solutions — not just presentation slides.
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
              When do you need a consulting partner?
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>When you want to grow but do not have a clear roadmap.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>Revenue is increasing, but profit or processes are not under control.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>You are planning a new business line, geography, or product launch.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-semibold text-amber-900 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Best suited for
            </h3>
            <p className="text-xs text-amber-900">
              MSMEs, growing startups, family businesses, NGOs, and foundations that need structured
              planning and execution support without hiring a full‑time strategy team.
            </p>

            <h3 className="text-sm font-semibold text-amber-900 flex items-center gap-2 mt-3">
              <TrendingUp className="w-4 h-4" />
              Our consulting style
            </h3>
            <p className="text-xs text-amber-900">
              Instead of heavy frameworks alone, we build simple, actionable plans based on your numbers,
              teams, and ground reality — so they can actually be implemented.
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
                  <Target className="w-4 h-4 text-amber-600" />
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
              Want to discuss strategy, processes, or profitability?
            </p>
            <p className="text-xs text-amber-900">
              Share your current stage, key challenges, and goals — we will schedule a short discovery call.
            </p>
          </div>
          <Button
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 text-xs md:text-sm font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => {
              window.location.href = '/contact';
            }}
          >
            Book a consultancy call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessConsultancyServices;
