export default function CtaSection() {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-medium text-foreground">
            Ready to Transform Your Business
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Get Started with <span className="text-primary">Professional Solutions</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          Schedule a free consultation to discover how our tailored solutions
          can streamline your operations and drive measurable results.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="/contact"
            className="btn-base btn-primary btn-lg"
          >
            Start Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}