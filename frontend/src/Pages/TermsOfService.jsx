import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
            Terms of <span className="text-yellow-500">Service</span>
          </h1>
          <p className="text-gray-500 italic">Effective Date: March 16, 2026</p>
        </motion.div>

        <div className="prose prose-yellow max-w-none text-gray-700 space-y-8">
          <p>
            Welcome to BuzzMarcom Solutions LLP. By accessing our website or utilizing our services, you agree to comply with and be bound by the following terms. Please read them carefully.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">1. Acceptance of Terms</h2>
            <p>
              By using this website or signing a service agreement with us, you confirm that you accept these Terms of Service in full. If you disagree with any part of these terms, you must not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">2. Services Provided</h2>
            <p>
              BuzzMarcom Solutions LLP provides digital marketing, branding, and communication consultancy. The specific scope of work, timelines, and deliverables for any project will be governed by a separate Statement of Work (SOW) or Service Agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">3. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Our Content:</strong> All content on this website (text, graphics, logos, and code) is the property of BuzzMarcom Solutions LLP and is protected by copyright laws.</li>
              <li><strong>Client Work:</strong> Ownership of final deliverables (campaigns, designs, etc.) will be transferred to the client only upon full payment of the agreed fees, unless otherwise specified in writing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">4. User Obligations</h2>
            <p>When interacting with our website or services, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Use the site for any unlawful purpose.</li>
              <li>Attempt to interfere with the website’s security or functionality.</li>
              <li>Submit false or misleading information via our contact or lead forms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">5. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fees for services are outlined in individual project quotes.</li>
              <li>Invoices are payable within the timeframe specified on the invoice.</li>
              <li>We reserve the right to suspend services if payments are overdue.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, BuzzMarcom Solutions LLP shall not be liable for any indirect, incidental, or consequential damages (including loss of profits or data) arising out of your use of our services or website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">7. Confidentiality</h2>
            <p>
              Both parties agree to keep all sensitive business information, trade secrets, and campaign data confidential and shall not disclose it to third parties without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">8. Termination</h2>
            <p>
              We reserve the right to terminate access to our website or cease providing services if these terms are violated. You may terminate your engagement with us subject to the notice period defined in your specific service contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">9. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts in Delhi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 pl-4">10. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Your continued use of the site after changes are posted constitutes your acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
