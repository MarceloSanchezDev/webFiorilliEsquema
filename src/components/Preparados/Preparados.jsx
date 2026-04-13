import SectionTitle from "../SectionTitle/SectionTitle";
import CategoryFilter from "../CategoryFilter/CategoryFIlter";
import ProductCard from "../ProductCard/ProductCard";
import ProcessStepCard from "../ProcessStepCard/ProcessStepCard";
import Button from "../Button/Button";
import "./Preparados.css";

const categories = [
  { label: "Dermatología", active: true },
  { label: "Pediatría" },
  { label: "Suplementos" },
  { label: "Veterinaria" },
];

const products = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ-GY6pe89-3qsUBBp8GSjXxGNgACtQN4lWcUc44vh8qB16FJjviwGzP_vo57Q0B2Cj2csDzJwNrIFC8FYS_6nMl_CWItK3sz7kwtLI51Y_e7sxQuHGgGcWpGGl_Erej1uw9YihEcpYWP4_wTQu6431TyZZNHQIyC1EHtGmrKmXaptc8IGmHjg8nzPFxe-RkEe0D4xrZW80wMz1Z-4Fp5UslJ5CWHE9aksoziyKsomDokRa8vsP581XnZUbE6iT0A4Y2rbaYds5jAj",
    category: "Dermatología",
    title: "Crema Hidratante con Urea 10%",
    principles: ["UREA", "VITAMINA E"],
    details: "250g | Frasco Airless",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrfwKX58FV6nLzt52tjgeJP3-Sy6JV9fLHhVeCGJ8Ts85Psx0TwzqW5n5VnZxphbUMKPj8RVZnMUtOrz7YY1MLkTUScNcCUn2xp2D6SPhu1MiAekgf2PTX3YUB9yOe-QxlCjZ0HBNSKOwOvndwbBd1FlAQn4_XvW6cd4Qm-KlmlmMPpMg_EXKOUZMeHaha0BwDVxSVr939JvywuAVafu-xUACG4bgd5NUjQ7S6C2QNuErGS3qX0IKpFlk7p6EFE2ISpMS0ewiztik9",
    category: "Pediatría",
    title: "Jarabe Pediátrico Personalizado",
    principles: ["MAGNESIO", "BASE SIN AZÚCAR"],
    details: "150ml | Suspensión Oral",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzZb_lNMUYo2dSbRtX0GGoS0IdDLZwXmDaC0s_-EzehjLKK8ga-TNYK5xfO_l1fq1ygxuHCOW6okjjkYF7gtvIuhZ27K9g8SvKsR8LO9I5RFJhvucpIDby4XGR-aBt1ho_cmpHLOzfRGra4N8aRZDlo1UcuA1yMSvULwUL0X9S7SLc57pVYL-yCztzmMs1ENRGMqpDoFs_nx0iDPno2bji6_0K-gih2FhpE-DcGq8UY8E42NUpAb2oyqA6zP3TqjoAYXO-3EL99xre",
    category: "Suplementos",
    title: "Complejo Vitamínico Quelado",
    principles: ["ZINC", "VIT D3"],
    details: "60 Cápsulas | Frasco PET",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCDXPcCiGkQhr8ogCaTqQUCbfOdjxt14Iq0TsUXFg1RL8C5sf8Vbskz3DRrO-7Tv-FJRfOUuj4DQIYr4NmsI_hywm8ByKFlCQYhqzKDQu23VBbnoJ0yqP2kj5OZ8wC1UwbDvQiOhraxXUj5iOmfJ67O8R98udNCnlcXU9eSKrnWeaB7FzQTDHohsmvxCeZ24mkXaUwSq3_9HgAkGKvXBeulgZQEiGe3HsY-H0MdtVJoiDZu2ZSMFmVVklkkMuDHXn8AwHjIBwZCkID",
    category: "Dermatología",
    title: "Gel Liposomado con Ácido Hialurónico",
    principles: ["HIALURÓNICO", "ALOE VERA"],
    details: "50ml | Tubo Aluminio",
  },
];

const processSteps = [
  {
    icon: "prescriptions",
    title: "1. Receta",
    text: "Suba su receta médica original para validación farmacéutica.",
  },
  {
    icon: "request_quote",
    title: "2. Cotización",
    text: "Reciba un presupuesto detallado según sus requerimientos.",
  },
  {
    icon: "biotech",
    title: "3. Elaboración",
    text: "Nuestros especialistas preparan su fórmula en el laboratorio.",
  },
  {
    icon: "local_shipping",
    title: "4. Entrega",
    text: "Reciba su preparado magistral en su domicilio con total seguridad.",
  },
];

export default function Preparados() {
  return (

      <main className="preparados-main">
        <section className="preparados-hero-section">
          <div className="container preparados-hero-grid">
            <div className="preparados-hero-content">
              <span className="preparados-hero-label">Catálogo Magistral</span>
              <h1 className="preparados-hero-title">Catálogo de Preparados</h1>
              <p className="preparados-hero-description">
                Fórmulas personalizadas elaboradas con precisión farmacéutica.
                Adaptamos cada principio activo a las necesidades específicas de
                su tratamiento bajo los más altos estándares de calidad.
              </p>
            </div>

            <div className="preparados-hero-media">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkaCCg-8TevhCkuti9j1ctqF2r7FxTFlvNQg_RqgvBIz-j--sJgxlMUqkTGzdwtL_ZflgpAKbGyyF9NpvkFYAQNXGHX4pdJR8-1vS1vGrN1C-pDPbdfSG7fRcnUEoHumC70EHt_MzlxOgr3NAmLs21KT3oJIexjM54n5PM0UYrSw-9SZ1T85QWcsZuvFIaxLSQq3lOO_zHGMs_R36Uqg30KCRMI2YkpbB-xGq1v3W8sUO656mJLhNNLDkQx-TphamTnCfYcuw1UBNv"
                alt="Laboratorio farmacéutico"
              />
              <div className="preparados-hero-overlay"></div>
            </div>
          </div>
        </section>

        <section className="preparados-catalog-section">
          <div className="container preparados-layout">
            <aside className="preparados-sidebar">
              <div>
                <h3 className="preparados-sidebar-title">Categorías</h3>

                <div className="preparados-category-list">
                  {categories.map((category) => (
                    <CategoryFilter
                      key={category.label}
                      label={category.label}
                      active={category.active}
                    />
                  ))}
                </div>
              </div>

              <div className="preparados-advice-card">
                <span className="material-symbols-outlined preparados-advice-icon">
                  medical_services
                </span>

                <h4>Asesoría Farmacéutica</h4>

                <p>
                  ¿No encuentra lo que busca? Nuestros farmacéuticos pueden
                  ayudarle.
                </p>

                <button type="button" className="preparados-advice-link">
                  Consultar ahora
                </button>
              </div>
            </aside>

            <div className="preparados-products">
              <div className="preparados-products-grid">
                {products.map((product) => (
                  <ProductCard
                    key={product.title}
                    image={product.image}
                    category={product.category}
                    title={product.title}
                    principles={product.principles}
                    details={product.details}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="preparados-process-section">
          <div className="container preparados-process-box">
            <SectionTitle
              title="Proceso de Elaboración Magistral"
              subtitle=""
            />

            <span className="preparados-process-label">
              Metodología Precisa
            </span>

            <div className="preparados-process-grid">
              {processSteps.map((step) => (
                <ProcessStepCard
                  key={step.title}
                  icon={step.icon}
                  title={step.title}
                  text={step.text}
                />
              ))}

              <div className="preparados-process-line"></div>
            </div>
          </div>
        </section>
      </main>
  );
}