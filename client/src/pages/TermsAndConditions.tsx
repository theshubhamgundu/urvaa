import React from 'react';
import { Link } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';

const TermsAndConditions: React.FC = () => {
  usePageSEO({
    title: 'Terms & Conditions | URVA',
    description: 'Read the terms for using URVA and placing orders for regional products through our website.',
    canonical: '/terms',
    noIndex: false,
  });
  return (
    <div className="min-h-screen bg-cream/20 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-cream2 shadow-sm">
        <div className="mb-8 border-b border-gray-100 pb-6">
          <span className="text-xs font-semibold text-secondary uppercase tracking-widest">LEGAL & COMPLIANCE</span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-1">Terms & Conditions</h1>
          <p className="text-xs text-muted mt-2">Last Updated: October 11, 2026 • URVA</p>
        </div>

        <div className="space-y-6 text-sm text-ink leading-relaxed">
          <section>
            <h2 className="text-lg font-serif font-bold text-primary mb-2">1. Overview & Agreement</h2>
            <p>
              Welcome to <strong>URVA</strong>. By accessing this website or placing an order, you agree to these Terms and Conditions. Please review the details before completing a purchase.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-bold text-primary mb-2">2. Product Disclaimer</h2>
            <p>
              Product details, ingredients, materials, origin, and handling guidance vary by item. Please review the product listing before ordering and follow any product-specific instructions. Regional origin or sourcing claims apply only when stated and supported on the relevant listing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-bold text-primary mb-2">3. Product & Pricing Information</h2>
            <p>
              Prices and availability are shown on the relevant product listing and at checkout. Applicable taxes, delivery charges, and any other order costs will be presented before payment. Product details and availability may change.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-bold text-primary mb-2">4. Orders & Payment Processing</h2>
            <p>
              Orders placed through our website are subject to acceptance and stock availability. Payments are securely processed via authorized payment gateways (Razorpay, UPI, Net Banking, Credit/Debit Cards). Upon order confirmation, you will receive an invoice via email or SMS.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-bold text-primary mb-2">5. Intellectual Property</h2>
            <p>
              URVA and its respective owners retain rights to their brand assets and original website content. Product names, marks, images, and other third-party materials remain the property of their respective owners. Unauthorized reproduction or commercial distribution is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-bold text-primary mb-2">6. Governing Law & Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be handled by a court with jurisdiction under applicable law.
            </p>
          </section>

          <section className="pt-4 border-t border-gray-100">
            <h2 className="text-lg font-serif font-bold text-primary mb-2">7. Contact Information</h2>
            <p className="text-xs text-muted">
              For any legal inquiries regarding these Terms & Conditions, please contact us:<br />
              <strong>Brand:</strong> URVA<br />
              <strong>Email:</strong> <a href="mailto:pranita311096@gmail.com" className="text-secondary hover:underline">pranita311096@gmail.com</a> | <strong>Phone/WhatsApp:</strong> +91 73048 88197
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
          <Link to="/" className="text-xs font-semibold text-secondary hover:underline">← Back to Home</Link>
          <Link to="/privacy" className="text-xs font-semibold text-primary hover:underline">Read Privacy Policy →</Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
