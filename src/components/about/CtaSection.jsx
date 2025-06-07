import React from 'react';

const CtaSection = () => {
  return (
    <section className="cta-gradient py-20 px-6">
      <div className="container-custom text-center">
        <h2 className="text-heading mb-6 tracking-tight">
          Ready to Transform Your Business?
        </h2>
        <p className="text-subheading mb-10 max-w-2xl mx-auto">
          Contact our team today for a personalized consultation and discover the perfect solution tailored for your enterprise.
        </p>
        <a
          href="/contact"
          className="btn-primary btn-base btn-lg"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default CtaSection;