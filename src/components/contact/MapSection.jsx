import React from 'react';

const MapSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container-custom">
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Location</h3>
        <div className="rounded-xl overflow-hidden border border-border">

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.472150894459!2d106.70322622485688!3d10.775104039373582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4421183a23%3A0x925873c62adeb404!2zVG_MgGEgbmhhzIAgTcOqIExpbmggUG9pbnQ!5e0!3m2!1svi!2s!4v1749361960971!5m2!1svi!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;