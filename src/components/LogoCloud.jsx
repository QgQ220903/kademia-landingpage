export default function LogoCloud() {
  const logos = [
    {
      name: "Microsoft",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Power BI",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    },
    {
      name: "AWS",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Microsoft Azure",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    },
    {
      name: "n8n",
      src: "https://upload.wikimedia.org/wikipedia/commons/6/62/N8n_logo.svg",
    },
  ];

  return (
    <section className="py-16 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-300 mb-12 text-lg">
          Trusted by leading technology platforms
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-12 grayscale contrast-50 opacity-80 hover:opacity-100 transition"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full object-contain w-32"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
