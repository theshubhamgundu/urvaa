import React from 'react';
import { Link } from 'react-router-dom';
import { usePageSEO } from '../hooks/usePageSEO';

const RefundPolicy: React.FC = () => {
  usePageSEO({
    title: 'Refund & Returns Policy | URVAA',
    description: 'Review URVAA order cancellation, return, replacement, and refund guidance. Conditions may differ by product type.',
    canonical: '/refund-policy',
  });
  return (
    <div className="min-h-screen bg-cream/20 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-cream2 shadow-sm">
        <div className="mb-8 border-b border-gray-100 pb-6">
          <span className="text-xs font-semibold text-secondary uppercase tracking-widest">RETURNS & GUARANTEE</span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-1">Refund & Return Policy</h1>
          <p className="text-xs text-muted mt-2">Last Updated: October 11, 2026 • URVAA</p>
        </div>

        <div className="space-y-6 text-sm text-ink leading-relaxed">
          <section>
            <h2 className="text-lg font-serif font-bold text-primary mb-2">1. Return Eligibility</h2>
            <p>
              Return, replacement, and refund eligibility depends on the product type and the condition in which it arrives. Food, live plants, textiles, and other goods may have different conditions. Review the product listing and contact support if an item is damaged, incorrect, or not as described.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-bold text-primary mb-2">2. Reporting Issues with Deliveries</h2>
            <p>
              Please contact customer support as soon as possible after delivery and include your order details and clear photos or videos of the issue. You can email <a href="mailto:pranita311096@gmail.com" className="text-secondary hover:underline">pranita311096@gmail.com</a> or message us on WhatsApp at <strong>+91 73048 88197</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-bold text-primary mb-2">3. Refund Process & Timelines</h2>
            <p>
              If a refund or replacement is approved, support will confirm the next steps and applicable timeframe for your order. Refunds, when applicable, are returned through the original payment method.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif font-bold text-primary mb-2">4. Order Cancellations</h2>
            <p>
              Contact support promptly to request an order cancellation. Whether an order can be cancelled depends on its preparation and dispatch status.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
          <Link to="/shipping-policy" className="text-xs font-semibold text-secondary hover:underline">← Shipping Policy</Link>
          <Link to="/terms" className="text-xs font-semibold text-primary hover:underline">Terms & Conditions →</Link>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
