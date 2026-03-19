import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Briefcase, ArrowRight, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';

const openings = [
  {
    title: 'Research Associate – Social & Market Research',
    location: 'Remote / Patna / Delhi NCR',
    type: 'Full-time',
    summary:
      'Support fieldwork, survey design, data analysis, and reporting across social and market research projects.',
  },
  {
    title: 'Content & Communication Executive',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    summary:
      'Work on branding, campaign copy, reports, and digital content for clients across sectors.',
  },
  {
    title: 'Project Coordinator – Manpower & Field Ops',
    location: 'On-site / Client locations',
    type: 'Contract / Project-based',
    summary:
      'Coordinate field teams, timelines, and quality checks for research and manpower deployments.',
  },
];

const Career = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs`);
        const data = await res.json();
        if (res.ok) {
          setJobs(data);
        }
      } catch (err) {
        console.error('Error fetching jobs:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-white via-amber-50/20 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Careers
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Join our growing team
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Research, strategy, content, tech, or operations — if you enjoy problem-solving and
            impact-driven work, there’s a place for you at Buzzmarcom.
          </p>
        </motion.div>

        {/* Small intro card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="rounded-2xl border border-amber-100 bg-white/95 p-5 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100">
                <Briefcase className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Didn’t find a perfect role?
                </p>
                <p className="text-xs text-gray-700">
                  We are always open to connecting with strong generalists and specialists.
                  Send us your profile, and we’ll reach out when a relevant opportunity comes up.
                </p>
              </div>
            </div>
            <Button
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 text-xs md:text-sm font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => {
                navigate('/contact?type=career');
              }}
            >
              Email your resume
            </Button>
          </div>
        </motion.div>

        {/* Openings list */}
        {loading ? (
          <div className="text-center py-10">
            <p className="text-gray-500 italic">Finding current openings...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-10 bg-gray-50 rounded-2xl border-2 border-dashed">
            <p className="text-gray-500">
              No active job openings at the moment. Feel free to send your resume anyway!
            </p>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.12, duration: 0.5 },
              },
            }}
            className="space-y-4"
          >
            {jobs.map((role) => (
              <motion.div
                key={role._id}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.97 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.45 },
                  },
                }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 16px 32px rgba(251,191,36,0.22)',
                }}
                className="rounded-2xl border border-amber-100 bg-white/95 p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h2 className="text-sm md:text-base font-semibold text-gray-900">
                      {role.title}
                    </h2>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-[11px] text-gray-600">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {role.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1.5 text-xs md:text-sm text-amber-600 hover:text-amber-700 hover:bg-transparent px-0"
                    onClick={() => navigate('/contact?type=career')}
                  >
                    View details / apply
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
                <p className="mt-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                  {role.summary}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Career;