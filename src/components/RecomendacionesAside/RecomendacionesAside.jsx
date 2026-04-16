import "./RecomendacionesAside.css";
import RecomendacionesCard from "./RecomendacionesCard";

export default function RecomendacionesAside() {
  const recommendations = [
    {
      id: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDBx_eR_9_X2C-_Z5W7-6_D6p_uP3Q-kG-t-p9-J-Z-v_w--_t_w-p-q-r-s-t-u-v-w-x-y-z",
      alt: "Serum Antioxidante",
      title: "Serum Antioxidante",
      description: "Concentrado de Vitamina C estable y Ácido Ferúlico.",
      link: "#",
    },
    {
      id: 2,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCEy_dF_0_Y3D-_A6X8-7_E7q_vQ4R-lH-u-q0-K-l-w_x--_u_x-q-r-s-t-u-v-w-x-y-z",
      alt: "Protector Solar",
      title: "Protector Solar Toque Seco",
      description: "FPS 50+ con textura invisible y acabado mate.",
      link: "#",
    },
    {
      id: 3,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDFz_fG_1_Z4E-_B7Y9-8_F8r_wS5S-mI-v-r1-L-m-x_y--_v_y-r-s-t-u-v-w-x-y-z",
      alt: "Limpiador Suave",
      title: "Gel Limpiador Syndet",
      description: "Limpieza profunda sin agredir la barrera cutánea.",
      link: "#",
    },
  ];

  return (
    <aside className="recommendations-aside">
      <div className="recommendations-aside-sticky">
        <h3 className="recommendations-aside-title">Recomendaciones para ti</h3>

        <div className="recommendations-aside-list">
          {recommendations.map((item) => (
            <RecomendacionesCard
              key={item.id}
              image={item.image}
              alt={item.alt}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
