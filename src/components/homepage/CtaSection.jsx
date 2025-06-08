import { useTheme } from "../../contexts/ThemeContext";

export default function CtaSection() {
  const { theme } = useTheme();

  return (
    <section className="py-20 px-4 relative bg-gradient-to-br from-background via-card/30 to-background">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-subtle" />
            <span className="text-sm font-medium text-foreground/80">
              Ready to Transform Your Business
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-display font-bold text-foreground mb-6 animate-fade-in-delay-1 opacity-0">
            Get Started with{" "}
            <span className="text-gradient">Professional Solutions</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2 opacity-0">
            Schedule a free consultation to discover how our tailored solutions
            can streamline your operations and drive measurable results for your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-delay-3 opacity-0">
            <a
              href="/contact"
              className="btn-base btn-primary btn-lg group"
            >
              <svg
                className="w-5 h-5 mr-2 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <span>Start Free Consultation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Minimal decorative elements */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-primary/40 rounded-full animate-pulse-subtle" />
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-primary/40 rounded-full animate-pulse-subtle" style={{ animationDelay: '2s' }} />
    </section>
  );
}