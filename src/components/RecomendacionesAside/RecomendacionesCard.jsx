export default function RecommendationCard({
  image,
  alt,
  title,
  description,
  link,
}) {
  return (
    <article className="recommendation-aside-card">
      <img src={image} alt={alt} className="recommendation-aside-card-image" />

      <h4 className="recommendation-aside-card-title">{title}</h4>

      <p className="recommendation-aside-card-description">{description}</p>

      <a href={link} className="recommendation-aside-card-link">
        <span>Ver más</span>
        <span className="material-symbols-outlined recommendation-aside-card-icon">
          chevron_right
        </span>
      </a>
    </article>
  );
}
