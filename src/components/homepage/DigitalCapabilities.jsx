import { FiCpu, FiDatabase, FiCloud, FiCode } from "react-icons/fi";

export default function DigitalCapabilities() {
  const capabilities = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Low-Code Power Platform",
      description: "Accelerate application development with Microsoft's Power Platform, reducing time to market by up to 70%",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "Data Analytics with Power BI",
      description: "Transform data into actionable insights using Power BI and advanced analytics solutions",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: <FiCloud className="w-8 h-8" />,
      title: "Cloud Services Consulting",
      description: "Deploy secure and scalable solutions with AWS and Microsoft Azure cloud platforms",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: <FiCpu className="w-8 h-8" />,
      title: "Robotic Process Automation",
      description: "Automate business processes using n8n and Power Automate for increased efficiency",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section className="py-20 px-4 bg-dark-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, index) => (
            <div key={index} className="tech-card p-8 rounded-xl">
              <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
