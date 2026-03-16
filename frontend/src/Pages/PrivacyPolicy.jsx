import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Blurry background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-animate absolute -top-24 -left-10 h-64 w-64 rounded-full bg-yellow-300 opacity-40 blur-3xl" />
        <div className="blob-animate absolute top-40 -right-24 h-72 w-72 rounded-full bg-amber-500 opacity-30 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy <span className="text-yellow-500">BuzzMarcom</span>
          </h1>
          <p className="text-gray-500 italic">Last Updated: March 16, 2026</p>
        </motion.div>

        <div className="prose prose-yellow max-w-none text-gray-700 space-y-8">
          <p>
            At BuzzMarcom Solutions LLP, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or engage with our marketing services.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">1. Information We Collect</h2>
            <p>We collect information to provide better services to our clients and users. This includes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and job title (usually collected via contact forms).</li>
              <li><strong>Technical Data:</strong> IP address, browser type, time zone settings, and operating system.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
              <li><strong>Marketing Data:</strong> Your preferences in receiving marketing communications from us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">2. How We Collect Your Data</h2>
            <p>We use different methods to collect data from and about you, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Direct Interactions:</strong> You may give us your data by filling out forms or corresponding with us by post, phone, or email.</li>
              <li><strong>Automated Technologies:</strong> As you interact with our website, we may automatically collect Technical Data about your equipment and browsing patterns using cookies and server logs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">3. How We Use Your Information</h2>
            <p>We only use your personal data when the law allows us to. Most commonly, we use it for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Service Delivery:</strong> To manage our relationship with you and deliver the marketing solutions you requested.</li>
              <li><strong>Improvement:</strong> To optimize our website content and user experience.</li>
              <li><strong>Communication:</strong> To send you updates, newsletters, or promotional materials (which you can opt out of at any time).</li>
              <li><strong>Legal Obligations:</strong> To comply with relevant laws and regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees and partners who have a business "need to know."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">5. Sharing Your Data</h2>
            <p>BuzzMarcom Solutions LLP does not sell your personal data. We may share data with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Service Providers:</strong> Third-party vendors who provide IT and administration services.</li>
              <li><strong>Legal Authorities:</strong> If required by law to protect our rights or comply with judicial proceedings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">6. Your Legal Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>The right to access the personal data we hold about you.</li>
              <li>The right to rectify incorrect or incomplete data.</li>
              <li>The right to erase your data (the "right to be forgotten").</li>
              <li>The right to withdraw consent at any time where we are relying on consent to process your data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">7. Third-Party Links</h2>
            <p>
              Our website may include links to third-party websites. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">8. Cookie Policy</h2>
            <p>Our website uses cookies to distinguish you from other users. This helps us provide you with a good experience when you browse and allows us to improve our site.</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Essential Cookies:</strong> Required for the operation of our website (e.g., enabling you to log into secure areas).</li>
              <li><strong>Analytical/Performance Cookies:</strong> These allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
              <li><strong>Functionality Cookies:</strong> Used to recognize you when you return to our website so we can personalize our content for you.</li>
              <li><strong>Targeting Cookies:</strong> These record your visit, the pages you have visited, and the links you have followed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">9. Lead Generation Practices</h2>
            <p>As a marketing solutions provider, BuzzMarcom Solutions LLP often manages lead generation campaigns for ourselves and our clients.</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Transparency:</strong> When we collect your data via a lead form, we clearly state the purpose of the collection.</li>
              <li><strong>Consent:</strong> We use "clear affirmative action," meaning we utilize opt-in checkboxes rather than pre-ticked boxes.</li>
              <li><strong>Third-Party Processing:</strong> If we collect a lead on behalf of a client, that data is transferred securely to the client.</li>
              <li><strong>Data Minimization:</strong> We only ask for the information necessary to fulfill your request.</li>
            </ul>
          </section>

          <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100 mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">If you have any questions about this Privacy Policy or our privacy practices, please contact our Data Protection Officer at:</p>
            <div className="mt-4 space-y-1 text-gray-700">
              <p><strong>Email:</strong> ghanshyam@buzzmarcom.com</p>
              <p><strong>Address:</strong> A91, Sewak Park, Delhi-110059</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
