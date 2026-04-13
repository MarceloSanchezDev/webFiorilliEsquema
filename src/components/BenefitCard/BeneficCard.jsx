import "./BenefitCard.css";

export default function BenefitCard({ icon, title, text }) {
  return (
    <article className="benefit-card">
      <span className="material-symbols-outlined benefit-card-icon">
        {icon}
      </span>
      <h3 className="benefit-card-title">{title}</h3>
      <p className="benefit-card-text">{text}</p>
    </article>
  );
}