import Button from "../Button/Button";
import "./ProductCard.css";

export default function ProductCard({
  image,
  category,
  title,
  principles = [],
  details,
}) {
  console.log(`/${title.trim().replace(/\s+/g, "")}/${image}`);
  return (
    <article className="product-card">
      <div className="product-card-image-wrap">
        <img
          className="product-card-image"
          src={`/JPG/${title.trim().replace(/\s+/g, "")}/${image}`}
          alt={title}
        />
        <div className="product-card-badge">{category}</div>
      </div>

      <h3 className="product-card-title">{title}</h3>

      <div className="product-card-principles">
        <span className="product-card-principles-label">Principios:</span>

        <div className="product-card-tags">
          {principles.map((item) => (
            <span key={item} className="product-card-tag">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="product-card-footer">
        <span className="product-card-details">{details}</span>
        <Button variant="primary">Ver Detalles</Button>
      </div>
    </article>
  );
}
