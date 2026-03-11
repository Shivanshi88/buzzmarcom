import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, FileCheck2, GraduationCap, ClipboardList } from 'lucide-react';
import { Button } from '../../components/ui/button';


const services = [
  {
    title: 'End-to-End Recruitment Services',
    short: 'Full support from sourcing to onboarding.',
    description:
      'We manage the entire hiring cycle from job description, sourcing, screening, and interview coordination to final offer and onboarding, aligned with your industry and role requirements.',
  },
  {
    title: 'Temporary & Contract Staffing',
    short: 'Flexible teams for project, seasonal, or short‑term needs.',
    description:
      'We provide qualified resources for short‑term projects, seasonal peaks, or fixed‑duration needs so you can quickly scale up or down without long‑term commitments.',
  },
  {
    title: 'Payroll & Compliance Management',
    short: 'Salary, PF, ESI, taxes — we take care of it.',
    description:
      'We handle payroll processing, statutory deductions, challans, and labour law compliance, reducing your risk and ensuring your team is paid accurately and on time.',
  },
  {
    title: 'Training & Development Programs',
    short: 'Upskill your team, reduce attrition.',
    description:
      'We design role‑specific training modules, soft skills, compliance, and process trainings to upskill employees, which helps improve both productivity and retention.',
  },
  {
    title: 'HR Advisory & Policy Formulation',
    short: 'Strong HR systems, clear policies.',
    description:
      'We create HR policies, performance management systems, appraisal frameworks, and engagement initiatives that are practical for your company culture and growth stage.',
  },
];


const ManpowerSupportServices = () => {
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
            Services · Manpower Support
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Manpower Support Services
          </h1>
          <p className="text-sm md:text-base text-gray-700 max-w-3xl">
            The right people, the right roles, the right systems — recruitment, staffing, payroll,
            training, and HR advisory from a single partner so you can stay focused on the business.
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
              What can you expect from a manpower partner?
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>Quick access to quality candidates whenever you need them.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>Reduced stress around payroll, documentation, and compliance.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>A more stable and productive team through training and clear policies.</span>
              </li>
            </ul>
          </div>


          <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-semibold text-amber-900 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Who this is for
            </h3>
            <p className="text-xs text-amber-900">
              Fast‑growing startups, MSMEs, NGOs, field‑intensive projects, and enterprises where
              manpower volumes are high or roles change frequently.
            </p>


            <h3 className="text-sm font-semibold text-amber-900 flex items-center gap-2 mt-3">
              <ClipboardList className="w-4 h-4" />
              Engagement models
            </h3>
            <p className="text-xs text-amber-900">
              One‑time hiring mandates, ongoing recruitment support, on‑roll/off‑roll staffing,
              payroll processing, and annual HR advisory retainers — mix and match as needed.
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
                  <GraduationCap className="w-4 h-4 text-amber-600" />
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
              Need a partner for hiring, staffing, or payroll?
            </p>
            <p className="text-xs text-amber-900">
              Share your roles, locations, and expected timelines — we’ll respond with a customised
              manpower support plan.
            </p>
          </div>
          <Button
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 text-xs md:text-sm font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => {
              window.location.href = '/contact';
            }}
          >
            Discuss manpower needs
          </Button>
        </motion.div>
      </div>
    </section>
  );
};


export default ManpowerSupportServices;
