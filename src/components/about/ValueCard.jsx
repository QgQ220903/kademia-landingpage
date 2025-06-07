import React from 'react';

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="card-base p-8">
      <div className="icon-container">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition">
        {title}
      </h3>
      <p className="text-text-muted leading-relaxed">{description}</p>
    </div>
  );
};

export default ValueCard;