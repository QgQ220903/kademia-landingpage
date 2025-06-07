export default function CtaSection() {
  return (
    <section className="py-20 px-4 cta-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-text-secondary mb-10 max-w-3xl mx-auto">
          Contact us today for a free consultation and product demo tailored to your business needs.
        </p>
        <a
          href="/contact"
          className="inline-block primary-button px-10 py-5 rounded-xl font-bold text-lg text-white"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
}
