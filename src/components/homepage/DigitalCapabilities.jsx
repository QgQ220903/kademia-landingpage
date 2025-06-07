import { FiCpu, FiDatabase, FiCloud, FiCode } from "react-icons/fi";

export default function DigitalCapabilities() {
  const capabilities = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Low-Code Power Platform",
      description:
        "Accelerate application development with Microsoft's Power Platform, reducing time to market by up to 70%",
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "Data Analytics with Power BI",
      description:
        "Transform data into actionable insights using Power BI and advanced analytics solutions",
    },
    {
      icon: <FiCloud className="w-8 h-8" />,
      title: "Cloud Services Consulting",
      description:
        "Deploy secure and scalable solutions with AWS and Microsoft Azure cloud platforms",
    },
    {
      icon: <FiCpu className="w-8 h-8" />,
      title: "Robotic Process Automation",
      description:
        "Automate business processes using n8n and Power Automate for increased efficiency",
    },
  ];

  return (
    // Section sử dụng màu nền tùy chỉnh
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Phần tiêu đề */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">Our Digital Capabilities</h2>
          <p className="text-subheading text-text-secondary max-w-2xl mx-auto">
            We help organizations drive innovation and efficiency through modern digital tools, enabling faster time-to-value and sustainable growth.
          </p>
        </div>

        {/* Lưới các capability cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, index) => (
            <div key={index} className="card-base p-8">
              {/* Icon nằm trong khung bo tròn và màu chủ đạo */}
              <div className="icon-container mb-6">{item.icon}</div>

              {/* Tiêu đề mỗi capability */}
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>

              {/* Mô tả capability */}
              <p className="text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
