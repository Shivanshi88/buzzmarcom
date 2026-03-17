import React from "react";
import { motion } from "framer-motion";
import Abhilasha from "../assets/Abhilasha.jpeg";
import Ghan from "../assets/Ghan.jpeg";

const AboutUs = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Blurry background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-animate absolute -top-24 -left-10 h-64 w-64 rounded-full bg-yellow-300 opacity-40 blur-3xl" />
        <div className="blob-animate absolute top-40 -right-24 h-72 w-72 rounded-full bg-amber-500 opacity-30 blur-3xl" />
        <div className="blob-animate absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-300 opacity-25 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            About <span className="text-yellow-500">Buzzmarcom</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Buzzmarcom Solutions LLP is your all-in-one growth partner,
            bridging the gap between product owners and service providers.
            We unify research, strategy, branding, and technology to help
            businesses grow efficiently and sustainably.
          </p>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="bg-yellow-50 border border-yellow-100 rounded-2xl p-10 mb-20 shadow-sm"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Your All-in-One Growth Partner
          </h3>

          <p className="text-gray-600 mb-6">
            We are an independent, comprehensive solutions provider designed
            to bridge the gap between product owners and service providers.
            By bringing diverse expertise under one roof, we empower businesses
            to navigate challenges and unlock opportunities.
          </p>

          {/* Competencies */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.12, duration: 0.5 },
              },
            }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                title: "Research",
                text: "Data-driven insights through Market and Social Research.",
              },
              {
                title: "Strategy",
                text: "Expert Business Consultancy focused on sustainable growth.",
              },
              {
                title: "Visibility",
                text: "Branding & Advertisement campaigns that build strong identities.",
              },
              {
                title: "Operations",
                text: "Reliable IT solutions and manpower support for smooth execution.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
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
                  boxShadow: "0 16px 32px rgba(250, 204, 21, 0.25)",
                }}
                className="bg-white p-6 rounded-xl shadow-sm border transition-all duration-300"
              >
                <h4 className="font-semibold text-yellow-600 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-14">
            Meet Our <span className="text-yellow-500">Team</span>
          </h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15, duration: 0.5 },
              },
            }}
            className="grid md:grid-cols-2 gap-10"
          >
            {/* Team Member 1 */}
            <motion.div
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
                y: -6,
                boxShadow: "0 20px 40px rgba(15, 23, 42, 0.12)",
              }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6">
                <img
                  src={Ghan}
                  alt="Ghan Shyam Jha"
                  className="w-44 h-44 rounded-full object-cover object-center border-4 border-yellow-200 shadow-lg"
                />
              </div>
              <div className="mb-5">
                <h4 className="text-2xl font-bold text-gray-900">
                  Ghan Shyam Jha
                </h4>
                <p className="text-yellow-600 font-semibold mb-1">
                  Lead Consultant – Strategy & Compliance
                </p>
                <p className="text-gray-500 text-sm">
                  11 Years in Technical Marketing & Law
                </p>
              </div>

              <p className="text-gray-600 text-sm mb-3">
                Ghan Shyam bridges the gap between technical innovation and
                legal compliance. With expertise in engineering and law, he
                provides holistic solutions in Business Consultancy and Market
                Research.
              </p>

              <p className="text-gray-700 text-sm">
                <strong>Why work with Ghan:</strong> He ensures strategies are
                data-driven, growth-focused, and legally secure.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
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
                y: -6,
                boxShadow: "0 20px 40px rgba(15, 23, 42, 0.12)",
              }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6">
                <img
                  src={Abhilasha}
                  alt="Abhilasha Jha"
                  className="w-44 h-44 rounded-full object-cover object-center border-4 border-yellow-200 shadow-lg"
                />
              </div>
              <div className="mb-5">
                <h4 className="text-2xl font-bold text-gray-900">
                  Abhilasha Jha
                </h4>
                <p className="text-yellow-600 font-semibold mb-1">
                  Content Strategist & Communications Specialist
                </p>
                <p className="text-gray-500 text-sm">
                  4 Years in Content Strategy & Copywriting
                </p>
              </div>

              <p className="text-gray-600 text-sm mb-3">
                Abhilasha leads branding and communication initiatives. With a
                strong background in English literature, she crafts powerful
                brand narratives that engage audiences.
              </p>

              <p className="text-gray-700 text-sm">
                <strong>Why work with Abhilasha:</strong> She transforms brand
                ideas into compelling content that connects with target
                audiences and drives conversions.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
