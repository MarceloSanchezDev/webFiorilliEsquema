import Button from "../Button/Button";
import ProcessStep from "../ProcessSteps/ProcessStep";
import BenefitCard from "../BenefitCard/BeneficCard";
import IngredientCard from "../IngredientCard/IngredientCard";
import QuoteCard from "../QuoteCard/QuoteCard";
import "./Product.css";

const benefits = [
  {
    icon: "water_drop",
    title: "Hidratación Profunda",
    text: "Captura y retiene el agua en las capas más profundas de la epidermis por más de 24 horas.",
  },
  {
    icon: "shield_with_heart",
    title: "Reparación de Barrera",
    text: "Fortalece el manto hidrolipídico, protegiendo la piel contra agresiones externas y agentes irritantes.",
  },
  {
    icon: "auto_awesome",
    title: "Suavidad Instantánea",
    text: "Elimina la aspereza y descamación, dejando una textura aterciopelada desde la primera aplicación.",
  },
];

const ingredients = [
  {
    badge: "10%",
    title: "Urea de Grado Farmacéutico",
    text: "Actúa como factor natural de hidratación y agente queratolítico suave, rompiendo las conexiones entre células muertas.",
    badgeType: "text",
  },
  {
    badgeIcon: "bloodtype",
    title: "Vitamina E (Tocoferol)",
    text: "Potente antioxidante que protege las membranas celulares y previene el envejecimiento prematuro causado por radicales libres.",
    badgeType: "icon",
  },
  {
    badgeIcon: "eco",
    title: "Alantoína",
    text: "Reconocido agente epitelizante que promueve la regeneración celular y calma posibles irritaciones de la dermis.",
    badgeType: "icon",
  },
];

const steps = [
  {
    number: "1",
    title: "Limpieza Previa",
    text: "Asegure que la zona a tratar esté limpia y ligeramente húmeda para mejorar la absorción de la urea.",
  },
  {
    number: "2",
    title: "Aplicación Uniforme",
    text: "Extienda una capa fina mediante suaves masajes circulares hasta su total penetración en la piel.",
  },
  {
    number: "3",
    title: "Frecuencia",
    text: "Repetir 2 veces al día (mañana y noche), especialmente en zonas con mayor tendencia a la sequedad como codos y talones.",
    last: true,
  },
];

export default function Product() {
  return (


      <main className="product-main">
        <section className="product-hero-section">
          <div className="container product-hero-grid">
            <div className="product-hero-content">
              <span className="product-category-badge">Dermatología</span>

              <h1 className="product-title">
                Crema Hidratante con Urea 10%
              </h1>

              <p className="product-description">
                Fórmula magistral diseñada para la restauración profunda de
                pieles secas y rugosas. Una solución clínica de alta precisión
                que combina hidratación intensa con exfoliación suave para una
                piel visiblemente renovada.
              </p>

              <div className="product-hero-actions">
                <Button variant="primary">Añadir a mi tratamiento</Button>
                <Button variant="secondary" icon="chat">
                  Hablar con un Farmacéutico
                </Button>
              </div>
            </div>

            <div className="product-hero-media">
              <div className="product-hero-media-bg"></div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAjVh5j_xrTrc4p2vbo23QwulV2Q69sp2dcxpxJMXRXwGJnrq5HxHHzE7JmheqY2cDtUacVXyr8bg_bPu_x2OOQr5VxAbdHTSomSxqp3fJ8jY1hKxlpl6K0wWoEv7hqbx5yHU4jaM3nk8hYLd1SKjlLXb3fKkNiIR4pMb0GG9esbFs9KCUm7UQeCDlKwXKEgsf6HXYhsdO8Kx6tz7rW59_EgbfKBFJVgP-YiF9sB7lYKOLb3b8-l2QX8dkMPsi2Dh-suxsYcvUVkO4"
                alt="Producto dermocosmético"
                className="product-hero-image"
              />
            </div>
          </div>
        </section>

        <section className="product-benefits-section">
          <div className="container">
            <div className="product-benefits-grid">
              {benefits.map((benefit) => (
                <BenefitCard
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  text={benefit.text}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="product-composition-section">
          <div className="container product-composition-layout">
            <div className="product-composition-intro">
              <h2 className="product-section-title">Composición Magistral</h2>

              <p className="product-section-description">
                Cada componente ha sido seleccionado bajo estrictos protocolos
                farmacéuticos para garantizar máxima biodisponibilidad y
                tolerancia.
              </p>

              <QuoteCard
                text="La precisión en el pesaje y la homogeneización de la urea al 10% es lo que garantiza su eficacia queratolítica y humectante."
                author="Equipo Técnico Lab Magistral"
              />
            </div>

            <div className="product-ingredients-list">
              {ingredients.map((ingredient) => (
                <IngredientCard
                  key={ingredient.title}
                  badge={ingredient.badge}
                  badgeIcon={ingredient.badgeIcon}
                  badgeType={ingredient.badgeType}
                  title={ingredient.title}
                  text={ingredient.text}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="product-usage-section">
          <div className="container product-usage-grid">
            <div className="product-usage-image-wrap">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaXEmgcI_HRiHQqaFSUyRpRToFBthPZIi-2W2V-7-XX_w--pDj9pusxclSlHNw9xoAn3S-_XZpvyqOL3KQ18dlhCJAHN39gFvbn8_86wpzVZoNCd_n0lparAoTEW5uTvpk_lFwRnGvngtR7jBXousbcTVkvr0C8iRkwNQinZY8U4MMoqtIA2vGuED3cgkw9Ur4cJZgedvpStD9DwHY9wPwkeRHH9cKToixfhLJFPe-ioEZPsHSak-3n3B375IxU2C4AC4udGLZUOL_"
                alt="Aplicación de crema"
                className="product-usage-image"
              />
            </div>

            <div className="product-usage-content">
              <h2 className="product-section-title">Protocolo de Aplicación</h2>

              <div className="product-usage-steps">
                {steps.map((step) => (
                  <ProcessStep
                    key={step.number}
                    number={step.number}
                    title={step.title}
                    text={step.text}
                    last={step.last}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="product-cta-section">
          <div className="product-cta-box">
            <div className="product-cta-watermark">
              <span className="material-symbols-outlined">vaccines</span>
            </div>

            <h2 className="product-cta-title">
              ¿Es esta la fórmula adecuada para ti?
            </h2>

            <p className="product-cta-text">
              Nuestros farmacéuticos expertos están disponibles para resolver
              cualquier duda técnica o personalizar esta base según sus
              necesidades específicas.
            </p>

            <div className="product-cta-actions">
              <Button variant="light">Hablar con un Farmacéutico</Button>
              <Button variant="outline-light">Ver Certificaciones</Button>
            </div>
          </div>
        </section>
      </main>

  );
}