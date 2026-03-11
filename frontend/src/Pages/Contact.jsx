// src/Pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message, // service optional, baad me model me add kar sakte ho
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Something went wrong, please try again.');
      } else {
        setSuccess('Thank you! We have received your enquiry.');
        setForm({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      }
    } catch (err) {
      console.error('Enquiry error:', err);
      setError('Server error, please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-white via-amber-50/20 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Get in touch with <span className="text-amber-600">Buzzmarcom</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Share your requirements, ideas or questions — we’ll get back within 1–2 business days.
          </p>
        </motion.div>

        {/* Split layout */}
        <div className="grid gap-8 lg:grid-cols-[1.05fr,1.15fr] items-start">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-amber-100 bg-white/90 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Let’s understand your requirement
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Whether you need social research, market sizing, branding or manpower support, our team
                will help you scope the problem and suggest the right mix of services.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard
                icon={Mail}
                title="Email"
                lines={['hello@buzzmarcom.com', 'support@buzzmarcom.com']}
              />
              <InfoCard
                icon={Phone}
                title="Phone / WhatsApp"
                lines={['+91-98765-43210', '+91-98765-43211']}
              />
              <InfoCard
                icon={MapPin}
                title="Office"
                lines={['Patna / Delhi NCR', 'India']}
              />
              <InfoCard
                icon={Clock}
                title="Working hours"
                lines={['Mon – Sat', '10:00 AM to 6:00 PM']}
              />
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-amber-100 bg-white/95 p-6 sm:p-7 shadow-sm space-y-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    placeholder="Enter your name"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    placeholder="you@example.com"
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Phone" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    placeholder="+91‑"
                  />
                </Field>
                <Field label="Service interest" htmlFor="service">
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                  >
                    <option value="">Select an option</option>
                    <option>Social Research</option>
                    <option>Market Research</option>
                    <option>Business Consultancy</option>
                    <option>Branding & Advertisement</option>
                    <option>IT Solutions</option>
                    <option>Manpower Support</option>
                    <option>Other</option>
                  </select>
                </Field>
              </div>

              <Field label="Project / requirement details" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                  placeholder="Tell us briefly about your requirement, timelines and budget (if any)…"
                />
              </Field>

              {error && (
                <p className="text-xs text-red-600">
                  {error}
                </p>
              )}

              {success && (
                <p className="text-xs text-green-600">
                  {success}
                </p>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                <p className="text-xs text-gray-500">
                  By submitting, you agree to be contacted by our team over email or phone.
                </p>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-6 py-2.5 text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Submit enquiry'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, htmlFor, children }) => (
  <div className="space-y-1.5">
    <label htmlFor={htmlFor} className="block text-xs font-medium text-gray-700">
      {label}
    </label>
    {children}
  </div>
);

const InfoCard = ({ icon: Icon, title, lines }) => (
  <div className="rounded-2xl border border-amber-100 bg-white/90 p-4 shadow-sm flex gap-3 items-start">
    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100">
      <Icon className="h-4 w-4 text-amber-600" />
    </div>
    <div>
      <p className="text-xs font-semibold text-gray-900 mb-0.5">{title}</p>
      {lines.map((line, idx) => (
        <p key={idx} className="text-xs text-gray-700">
          {line}
        </p>
      ))}
    </div>
  </div>
);

export default Contact;
