import { FaTruckMoving, FaChartLine, FaGraduationCap } from "react-icons/fa";

export default function FeaturesSection() {
  // Danh sách các dịch vụ cốt lõi với icon, tiêu đề và mô tả
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
    // Section nền gradient từ CSS custom
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Tiêu đề và mô tả trung tâm */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">Our Core Services</h2>
          <p className="text-subheading text-text-secondary max-w-3xl mx-auto">
            We provide essential solutions to help your business grow smarter and faster.
          </p>
        </div>

        {/* Lưới các card dịch vụ */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-base transition-transform hover:-translate-y-2"
            >
              {/* Icon container với hiệu ứng sáng màu chính */}
              <div className="icon-container">{feature.icon}</div>

              {/* Tiêu đề card */}
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>

              {/* Mô tả card */}
              <p className="text-text-secondary">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
