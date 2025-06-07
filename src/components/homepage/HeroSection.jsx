export default function HeroSection() {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center justify-center text-center py-20 px-4 overflow-hidden">
      <div className="relative max-w-6xl mx-auto z-10">
        <h1 className="text-display mb-6">
          Modern <span className="text-gradient">Technology</span> Solutions for Businesses
        </h1>
        <p className="text-subheading text-text-secondary mb-10 max-w-3xl mx-auto">
          Elevate your business with high-performance, cost-effective, and optimized technology solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="btn-base btn-secondary btn-lg"
          >
            Contact Us
          </a>
          <a
            href="#features"
            className="btn-base btn-primary btn-lg"
          >
            Explore Features
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#features" className="text-white opacity-80 hover:opacity-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
