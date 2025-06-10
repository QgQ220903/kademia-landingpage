const ContactInfoItem = ({ icon, title, content }) => (
  <div className="flex items-start gap-3 md:gap-4">
    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 text-primary">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-medium text-sm md:text-base">{title}</h4>
      <p className="text-text-secondary text-sm md:text-base break-words whitespace-pre-line">
        {content}
      </p>
    </div>
  </div>
);

export default ContactInfoItem;