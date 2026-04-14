import "./Home.css";
import imgHome from "../../assets/imagen-home.png";
import imgHome1 from "../../assets/AMFFA-OS.png";
import imgHome2 from "../../assets/AVALIAN-OS.png";
import imgHome3 from "../../assets/CASA-OS.png";
import imgHome4 from "../../assets/IOMA-OS.png";
import imgHome5 from "../../assets/LM-OS.png";
import imgHome6 from "../../assets/MEDIFE-IS.png";
import imgHome7 from "../../assets/OOMINT-IS.png";
import imgHome8 from "../../assets/PAMI-OS.png";
import imgHome9 from "../../assets/OSDE-OS.png";

import imgHome10 from "../../assets/PFA-OS.png";

import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import InfoCard from "../InfoCard/InfoCard";
import "./Home.css";

export default function Home() {
  return (
    <main className="home-main">
      <section className="hero-section">
        <div className="hero-background">
          <img
            className="hero-background-image"
            src={imgHome}
            alt="Farmacéutico profesional"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="material-symbols-outlined">science</span>
              FARMACIA MAGISTRAL ESPECIALIZADA
            </div>

            <h1 className="hero-title">
              Precisión y Cuidado <span>Personalizado</span> en cada Fórmula
            </h1>

            <p className="hero-description">
              Transformamos la ciencia médica en tratamientos únicos adaptados
              específicamente a sus necesidades biológicas y dermatológicas.
            </p>

            <div className="hero-actions">
              <Button variant="primary" icon="arrow_forward">
                Nuestros Preparados
              </Button>
              <Button variant="secondary">Conocer más</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="value-section">
        <div className="container">
          <SectionTitle
            title="El Valor de la Formulación"
            subtitle="Un enfoque científico que pone al paciente en el centro de cada compuesto químico."
          />

          <div className="bento-grid">
            <div className="bento-large">
              <InfoCard
                icon="verified"
                title="Calidad Certificada"
                text="Utilizamos principios activos de grado farmacéutico con trazabilidad completa y estrictos protocolos de laboratorio."
              >
                <div className="tag-group">
                  <span className="tag">ISO 9001</span>
                  <span className="tag">GMP Compliance</span>
                </div>
              </InfoCard>
            </div>

            <div className="bento-small">
              <InfoCard
                icon="biotech"
                title="Dosificación Personalizada"
                text="Ajustamos milimétricamente la concentración para maximizar la eficacia y minimizar efectos secundarios."
                variant="secondary"
              >
                <div className="precision-bar">
                  <div className="precision-fill"></div>
                </div>
                <p className="precision-text">Precisión del 99.9%</p>
              </InfoCard>
            </div>

            <div className="bento-small">
              <InfoCard
                title="Asesoría Experta"
                text="Farmacéuticos especializados disponibles para resolver sus dudas."
                variant="primary"
              >
                <Button variant="light">Consultar</Button>
              </InfoCard>
            </div>

            <div className="bento-large image-card">
              <div className="image-card-content">
                <div className="image-card-text">
                  <h3>Tecnología de Vanguardia</h3>
                  <p>
                    Inversión constante en equipamiento analítico para
                    garantizar la estabilidad de sus fórmulas.
                  </p>
                </div>

                <div className="image-card-media">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzWoydXW29opP2t5mSjvaaZbzPZGbyJrhG4xPBegQllQS0e_4grZGmRwyB3K2fyfwcGVJJdbYXqnZmT9K-BQsEWmUNmbIIeygO0oWc_lk_CYiDvSwc1OEULV3J7W76Iw2XrTcvrTzMzPiMlOKJhl2LR1XYTi64-D_QwJEM1Yec1i8Q1vbg-6dfUn2pcxQ9NswzEfmoeiWJE24IwSlhT5EuKNMhJ9Z4rk29swJoE_At6cf1sn0uzHlX9mpoqguYu5J2J8XDBHg2Xlzf"
                    alt="Tecnología farmacéutica"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="image-card-text">
          <SectionTitle
            title="Obras Sociales y Prepagas"
            subtitle="Trabajamos con las principales coberturas para brindarte acceso a tratamientos seguros, confiables y de calidad."
          />
        </div>
        <div className="container process-layout">
          {/*
          <div className="process-text">
            <SectionTitle
              title="¿Cómo trabajamos su fórmula?"
              centered={false}
            />

            <div className="process-steps">
              <ProcessStep
                number="1"
                title="Recepción y Validación"
                text="Analizamos la prescripción médica para asegurar la compatibilidad de los componentes."
              />
              <ProcessStep
                number="2"
                title="Compounding de Precisión"
                text="Elaboración artesanal en campana de flujo laminar con pesaje electrónico."
              />
              <ProcessStep
                number="3"
                title="Control Final y Entrega"
                text="Envasado protector y validación de pH/Estabilidad antes de la entrega."
                last
              />
            </div>
          </div>
          */}
          {/*
<div className="status-card">
  <span className="material-symbols-outlined">check_circle</span>
  <div>
    <p>Status</p>
    <strong>Fórmula Lista</strong>
  </div>
              </div>
*/}

          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome4}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome5}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome6}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome7}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome8}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
        </div>
        <div className="container process-layout">
          {/*
          <div className="process-text">
            <SectionTitle
              title="¿Cómo trabajamos su fórmula?"
              centered={false}
            />

            <div className="process-steps">
              <ProcessStep
                number="1"
                title="Recepción y Validación"
                text="Analizamos la prescripción médica para asegurar la compatibilidad de los componentes."
              />
              <ProcessStep
                number="2"
                title="Compounding de Precisión"
                text="Elaboración artesanal en campana de flujo laminar con pesaje electrónico."
              />
              <ProcessStep
                number="3"
                title="Control Final y Entrega"
                text="Envasado protector y validación de pH/Estabilidad antes de la entrega."
                last
              />
            </div>
          </div>
          */}
          {/*
<div className="status-card">
  <span className="material-symbols-outlined">check_circle</span>
  <div>
    <p>Status</p>
    <strong>Fórmula Lista</strong>
  </div>
              </div>
*/}
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome9}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome10}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome1}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome2}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
          <div className="process-image-side">
            <div className="process-image-wrap">
              <img
                className="process-image"
                src={imgHome3}
                alt="Preparado farmacéutico"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box">
          <div className="cta-content">
            <h2>Comience su tratamiento personalizado hoy mismo.</h2>
            <p>
              Envíenos su receta médica a través de nuestro portal seguro y
              reciba su preparado magistral en la comodidad de su hogar.
            </p>

            <div className="cta-actions">
              <Button variant="light">Enviar Receta</Button>
              <Button variant="outline-light">Ver Catálogo</Button>
            </div>
          </div>

          <div className="cta-circle cta-circle-top"></div>
          <div className="cta-circle cta-circle-bottom"></div>
        </div>
      </section>
    </main>
  );
}
