import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Laptop, ShieldCheck, Cloud, Cpu } from 'lucide-react';
import { Button } from '../../components/ui/button';


const services = [
  {
    title: 'Custom Software Development',
    short: 'Software that fits your processes, not the other way around.',
    description:
      'We design and build bespoke web and desktop applications that fit smoothly into your existing workflows, are scalable, and support future integrations.',
  },
  {
    title: 'Website & Mobile App Development',
    short: 'Fast, clean, and conversion‑focused digital presence.',
    description:
      'We create high‑performance websites and mobile apps that balance UX, speed, SEO, and brand design, so users get a smooth experience across devices.',
  },
  {
    title: 'Cybersecurity Solutions',
    short: 'Data secured, systems protected.',
    description:
      'We assess vulnerabilities and implement firewalls, access controls, threat detection, and encryption so your critical data and infrastructure stay safe from attacks.',
  },
  {
    title: 'Cloud Services & Management',
    short: 'Move to the cloud, without chaos.',
    description:
      'We provide migration, optimization, and ongoing management on platforms like AWS, Azure, and Google Cloud — balancing cost, performance, and reliability.',
  },
  {
    title: 'IT Infrastructure Support & Maintenance',
    short: 'We handle the everyday IT issues.',
    description:
      'We take care of proactive monitoring, patching, and support for servers, networks, hardware, and software so downtime stays low and your team’s work runs smoothly.',
  },
];


const ITSolutionsServices = () => {
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
            Services · IT Solutions
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            IT Solutions & Services
          </h1>
          <p className="text-sm md:text-base text-gray-700 max-w-3xl">
            Designing technology around your business — custom software, apps, security,
            cloud, and day‑to‑day IT support, all from a single partner.
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
              What should you expect from an IT partner?
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>Technology that simplifies your business, not makes it more complicated.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>Security and reliability handled, so you don’t have to worry about them.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>Infrastructure and tools that don’t become a bottleneck when you scale.</span>
              </li>
            </ul>
          </div>


          <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-semibold text-amber-900 flex items-center gap-2">
              <Laptop className="w-4 h-4" />
              Who we typically work with
            </h3>
            <p className="text-xs text-amber-900">
              Service businesses, tech‑enabled MSMEs, NGOs, institutions, and growing startups
              that need a reliable tech backbone without a large in‑house IT team.
            </p>


            <h3 className="text-sm font-semibold text-amber-900 flex items-center gap-2 mt-3">
              <ShieldCheck className="w-4 h-4" />
              Focus areas
            </h3>
            <p className="text-xs text-amber-900">
              Stability, security, scalability — more than flashy tech, we make sure day‑to‑day
              operations stay smooth and future expansion is easy.
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
                  <Cpu className="w-4 h-4 text-amber-600" />
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
              Want to discuss your IT infrastructure or product idea?
            </p>
            <p className="text-xs text-amber-900">
              Share your current stack, pain points, and goals — we’ll get back with a high‑level
              tech approach and effort estimate.
            </p>
          </div>
          <Button
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 text-xs md:text-sm font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => {
              window.location.href = '/contact';
            }}
          >
            Talk to our tech team
          </Button>
        </motion.div>
      </div>
    </section>
  );
};


export default ITSolutionsServices;
