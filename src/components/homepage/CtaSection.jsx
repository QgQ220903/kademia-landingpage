export default function CtaSection() {
  return (
    <section className="py-24 px-4 cta-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        {/* Main CTA Content */}
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-white">Ready to Get Started?</span>
          </div>

          {/* Heading */}
          <h2 className="text-heading mb-6">
            Transform Your Business with{" "}
            <span className="text-gradient">Modern Technology</span>
          </h2>

          {/* Description */}
          <p className="text-subheading text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a <span className="text-white font-semibold">free consultation</span> and
            personalized product demo tailored to your specific business needs and objectives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="/contact"
              className="btn-base btn-primary btn-lg group animate-pulse-glow"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Get Started Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}