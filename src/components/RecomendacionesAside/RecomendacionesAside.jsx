import "./RecomendacionesAside.css";
import RecomendacionesCard from "./RecomendacionesCard";

export default function RecomendacionesAside({ productosR }) {
  return (
    <aside className="recommendations-aside ">
      <div className="recommendations-aside-sticky">
        <h3 className="recommendations-aside-title">Recomendaciones para ti</h3>
        <div className="recommendations-aside-list flex flex-md-col gap-3">
          {productosR.map((item) => (
            <RecomendacionesCard
              key={item.nombre}
              image={item.img}
              alt={item.nombre}
              title={item.nombre}
              description={item.compo}
              link={item.nombre}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
