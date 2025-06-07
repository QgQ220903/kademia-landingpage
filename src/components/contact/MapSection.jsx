import React from 'react'

const MapSection = () => {
  return (
    <section className="py-20 px-4 bg-bg-card">
      <div className="container-custom">
        <h3 className="text-heading text-primary mb-6 text-center">Our Location</h3>
        <div className="rounded-xl overflow-hidden border border-gray-700">
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
  )
}

export default MapSection