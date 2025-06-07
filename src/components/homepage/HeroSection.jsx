export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center py-20 px-4 overflow-hidden">
      <div className="relative max-w-6xl mx-auto z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Modern <span className="text-primary">Technology</span> Solutions for Businesses
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Elevate your business with high-performance, cost-effective, and optimized technology solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="border-2 text-darkblue px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition text-lg shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
          <a
            href="#features"
            className="primary-button text-white px-8 py-4 rounded-xl font-bold hover:text-darkblue transition text-lg shadow-lg hover:shadow-xl"
          >
            Explore Features
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#features" className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
