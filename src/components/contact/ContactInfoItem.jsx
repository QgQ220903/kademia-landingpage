// Sub-component for contact info items
const ContactInfoItem = ({ icon, title, content }) => (
  <div className="flex items-start gap-4">
    <div className="icon-container">
      {icon}
    </div>
    <div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-text-secondary">{content}</p>
    </div>
  </div>
);
export default ContactInfoItem;