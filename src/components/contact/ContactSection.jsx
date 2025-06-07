import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from "react-icons/fi";

export default function ContactSection() {
  return (
    <div className="bg-dark text-white">
      {/* Section 1: Giới thiệu */}
      <section className="py-30 px-4 bg-dark-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-text-secondary">
            We're here to help and answer any questions you might have.
          </p>
        </div>
      </section>

      {/* Section 2: Form + Thông tin */}
      <section className="py-10 px-4 bg-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Contact */}
          <div className="bg-dark-light p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-text-secondary mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-text-secondary mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-text-secondary mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-text-secondary mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-dark py-3 rounded-lg font-medium hover:bg-blue-900 transition flex items-center justify-center"
              >
                <FiSend className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Thông tin liên hệ */}
          <div className="space-y-6">
            <div className="bg-dark-light p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Info</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                    <FiMail />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-text-secondary">contact@kademia.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                    <FiPhone />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-text-secondary">+84 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-text-secondary">
                      10th Floor, Techcombank Building, Hanoi, Vietnam
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-light p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-primary mb-6">Working Hours</h3>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                  <FiClock />
                </div>
                <div className="space-y-3">
                  <p className="flex justify-between">
                    <span className="text-text-secondary">Mon-Fri:</span>
                    <span>8:30 AM - 5:30 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-text-secondary">Saturday:</span>
                    <span>8:30 AM - 12:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-text-secondary">Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Map */}
      <section className="py-20 px-4 bg-dark-light">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Location</h3>
          <div className="rounded-xl overflow-hidden border border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0964841660016!2d105.85455951540282!3d21.02876678599838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abee6b1c3f1d%3A0x9c5a8eb9e6a71c7e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUZWNobm9sb2d5!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}