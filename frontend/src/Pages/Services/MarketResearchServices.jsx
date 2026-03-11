import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BarChart3, Target, Tag } from 'lucide-react';
import { Button } from '../../components/ui/button';


const services = [
  {
    title: 'Market Feasibility Studies',
    short: 'Reduce risk before you launch.',
    description:
      'We analyse the viability of new products, services, or business concepts — looking at demand, market size, adoption barriers, and potential profitability so your investment decisions are data‑driven.',
  },
  {
    title: 'Competitor Intelligence & Benchmarking',
    short: 'Clearly map your competition.',
    description:
      'We map competitors’ strengths, weaknesses, pricing, channels, and positioning to show where you can fit in the market and which gaps you can realistically capture.',
  },
  {
    title: 'Consumer Behavior & Segmentation',
    short: 'Focus on the right audience.',
    description:
      'We build audience segments based on demographics, psychographics, and buying behaviour so you can make focused marketing and product decisions for high‑potential customer groups.',
  },
  {
    title: 'Pricing & Demand Analysis',
    short: 'Prices that work for the market and for your business.',
    description:
      'We analyse customer willingness‑to‑pay, price sensitivity, and competitor pricing to recommend optimal price bands that balance volume and margin.',
  },
  {
    title: 'Brand Perception Tracking',
    short: 'How do people really see your brand?',
    description:
      'We track brand awareness, consideration, loyalty, and reputation over time and show your exact position versus competitors.',
  },
];


const MarketResearchServices = () => {
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
            Services · Market Research
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Market Research Services
          </h1>
          <p className="text-sm md:text-base text-gray-700 max-w-3xl">
            We give you a clear picture of market size, demand, competition, and customer behaviour —
            so your product, pricing, and go‑to‑market decisions are based on data, not guesswork.
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
              How does market research help you?
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>Quantify the risk of entering a new market or launching a new product upfront.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>Focus your marketing spends on the right audiences and the right channels.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>Build a solid, data‑backed story for your board, investors, or management.</span>
              </li>
            </ul>
          </div>


          <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-semibold text-amber-900 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Typical use‑cases
            </h3>
            <p className="text-xs text-amber-900">
              New launches, category expansion, pricing revamps, geographic expansion, investor decks,
              pitch preparation, and go‑to‑market refreshes — all powered by structured inputs.
            </p>


            <h3 className="text-sm font-semibold text-amber-900 flex items-center gap-2 mt-3">
              <Tag className="w-4 h-4" />
              For whom
            </h3>
            <p className="text-xs text-amber-900">
              Founders, marketing teams, product teams, strategy/CXO offices, and investors who want
              to validate their decisions against on‑ground reality.
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
              Planning a market research project?
            </p>
            <p className="text-xs text-amber-900">
              Tell us your sector, product stage, and key questions — we’ll suggest a practical
              research design and timeline.
            </p>
          </div>
          <Button
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 text-xs md:text-sm font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => {
              window.location.href = '/contact';
            }}
          >
            Discuss a market study
          </Button>
        </motion.div>
      </div>
    </section>
  );
};


export default MarketResearchServices;
