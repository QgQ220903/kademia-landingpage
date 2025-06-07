import { FaTruckMoving, FaChartLine, FaGraduationCap } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaTruckMoving size={32} />,
      title: "Supply Chain Performance Consulting",
      desc: "Consulting on supply chain performance improvement",
    },
    {
      icon: <FaChartLine size={32} />,
      title: "Digital Transformation & Data Analytics",
      desc: "Consulting on digital transformation solutions and data analytics",
    },
    {
      icon: <FaGraduationCap size={32} />,
      title: "Training & Upskilling",
      desc: "Conducting training and upskilling employees on performance improvement tools and digital transformation",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 tech-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We provide essential solutions to help your business grow smarter and faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="tech-card p-8 rounded-xl transition-transform hover:-translate-y-1.5"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-secondary">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
