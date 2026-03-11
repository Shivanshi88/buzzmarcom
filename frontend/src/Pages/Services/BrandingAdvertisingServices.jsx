import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Megaphone, PenSquare } from 'lucide-react';
import { Button } from '../../components/ui/button';

const services = [
  {
    title: 'Brand Strategy & Identity Development',
    short: 'Clarify what your brand stands for.',
    description:
      'We define your brand’s core purpose, values, and personality, then translate it into logo, colours, typography, and tone of voice so every touchpoint feels consistent.',
  },
  {
    title: 'Integrated Marketing Campaigns',
    short: 'One powerful idea across all channels.',
    description:
      'Digital, print, OOH or BTL — we plan multi-channel campaigns around a single central idea so your messaging is consistent and memorable everywhere.',
  },
  {
    title: 'Content Creation & Copywriting',
    short: 'Words and visuals that actually convert.',
    description:
      'For websites, social media, ads, pitch decks or brochures — we create content that turns complex ideas into simple, engaging, and action‑oriented language.',
  },
  {
    title: 'Digital Advertising & Social Media Management',
    short: 'Right audience, right message, right channel.',
    description:
      'Search, social, display, reels, shorts — we plan, run, and optimise full‑funnel campaigns and can also manage your day‑to‑day social media presence.',
  },
  {
    title: 'Brand Positioning & Audit',
    short: 'Find your exact place in the market.',
    description:
      'We audit your current communication, competitors, and customer perception, then refine your positioning so you clearly stand out.',
  },
];

const BrandingAdvertisingServices = () => {
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
            Services · Branding & Advertisement
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Branding & Advertisement Services
          </h1>
          <p className="text-sm md:text-base text-gray-700 max-w-3xl">
            From strategy to copy, design, and digital ads — we help you build a brand story
            that reaches the right people, stays in their mind, and delivers business results.
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
              What problems do brand & ads solve?
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>People clearly understand what you do and who you do it for.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>The right audience discovers you, remembers you, and trusts you.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>Your marketing budgets generate measurable leads, sales, or engagement.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-semibold text-amber-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Best suited for
            </h3>
            <p className="text-xs text-amber-900">
              Startups, MSMEs, NGOs, and established brands that want to refresh their brand
              or build a fresh positioning for new products and campaigns.
            </p>

            <h3 className="text-sm font-semibold text-amber-900 flex items-center gap-2 mt-3">
              <Megaphone className="w-4 h-4" />
              What makes us different
            </h3>
            <p className="text-xs text-amber-900">
              We look at copy, design, research, and compliance together — so your campaigns
              are not only creative but also brand‑safe and on‑strategy.
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
                  <PenSquare className="w-4 h-4 text-amber-600" />
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
              Planning a brand or campaign?
            </p>
            <p className="text-xs text-amber-900">
              Tell us about your sector, audience, and goals — we will schedule a discovery call
              with a seed idea and a rough plan.
            </p>
          </div>
          <Button
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 text-xs md:text-sm font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => {
              window.location.href = '/contact';
            }}
          >
            Plan a branding project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandingAdvertisingServices;
