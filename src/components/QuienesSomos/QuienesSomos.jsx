import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import StatCard from "../StatCard/StatCard";
import FeatureCard from "../FeatureCard/FeatureCard";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";
import "./QuienesSomos.css";

export default function QuienesSomos() {
  return (
      <main className="about-main">
        <section className="about-hero-section">
          <div className="container about-hero-grid">
            <div className="about-hero-content">
              <span className="about-badge">NUESTRA ESENCIA</span>

              <h1 className="about-hero-title">
                Ciencia con <span>alma</span> farmacéutica.
              </h1>

              <p className="about-hero-description">
                En Magistral Lab, transformamos la medicina convencional en
                soluciones personalizadas. Nuestra misión es unir la precisión
                del laboratorio moderno con el cuidado artesanal que cada
                paciente merece.
              </p>

              <div className="about-stats">
                <StatCard value="15+" label="Años de Excelencia" />
                <StatCard value="50k" label="Fórmulas Únicas" />
              </div>
            </div>

            <div className="about-hero-media">
              <div className="about-hero-image-wrap">
                <img
                  className="about-hero-image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3p4jWF2ib0rdAcrZ7XK-AT-yRM7Z7J7Ymui3pUA3Kx0F-zqwngxLhDrGyzMxvC7tN0mc6DeVKAQ60UiXo0MK8Vo1hBnI6e-STIo64v3xwc5dVstI61tBD2jeInh94cQYjlIH8t7Rc-7YGEN5X9cAR_66YZJ5kbcF7uIqK5zNp2X0AyX4CIabLMz-SI4A8oDkOTOJ5sUmUJ5CPdL528S_bIl4wJMOrmaXkd2TEzIJTwjs653qCKl0Z2J04W58Fbl6AOGmAUZFl4ZoY"
                  alt="Equipo farmacéutico en laboratorio"
                />
              </div>

              <div className="about-quote-card">
                <p>
                  "La personalización no es una opción, es nuestro compromiso
                  con tu salud."
                </p>
                <strong>— Dra. Elena Valdés, Fundadora</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="about-history-section">
          <div className="container">
            <div className="about-history-grid">
              <div className="history-large">
                <FeatureCard
                  title="Nuestra Trayectoria"
                  text="Fundada en 2009, Magistral Lab nació de la necesidad de volver a las raíces de la farmacia: la formulación individualizada. Lo que comenzó como un pequeño despacho local se ha convertido en un referente nacional de seguridad y calidad en formulación magistral."
                  variant="light"
                  className="history-card"
                >
                  <span className="material-symbols-outlined history-watermark">
                    history_edu
                  </span>
                </FeatureCard>
              </div>

              <div className="history-small">
                <FeatureCard
                  icon="verified"
                  title="Nuestra Misión"
                  text="Proveer soluciones terapéuticas personalizadas que la industria masiva no puede ofrecer, garantizando la máxima biodisponibilidad y eficacia."
                  variant="primary"
                />
              </div>

              <div className="history-small">
                <FeatureCard
                  title="Estándares ISO"
                  subtitle="Seguridad Total"
                  text="Cumplimos con las normativas más estrictas de farmacopea europea y control de calidad integral."
                  icon="biotech"
                  variant="secondary"
                />
              </div>

              <div className="history-large">
                <article className="lab-card">
                  <div className="lab-card-text">
                    <h3>Nuestro Laboratorio</h3>
                    <p>
                      Equipado con tecnología de última generación para análisis
                      de principios activos y pesaje de precisión nanométrica.
                      Nuestras salas blancas mantienen una atmósfera controlada
                      para evitar contaminaciones cruzadas.
                    </p>

                    <ul className="lab-card-list">
                      <li>
                        <span className="material-symbols-outlined">
                          check_circle
                        </span>
                        Salas Blancas Clase 100
                      </li>
                      <li>
                        <span className="material-symbols-outlined">
                          check_circle
                        </span>
                        Trazabilidad Digital Total
                      </li>
                    </ul>
                  </div>

                  <div className="lab-card-media">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxP-SDHKG8qqUyviUmP72izP9qg0ZqInr4NiBP7cI0vMHUpO8U-k-PKqYjGAzB9tzlcLStl2hrDYMFamP5IiVBaFdnN5nvf_GxjU2h5bkPiRdxl4aOnGbB2_aMvfsfoxpY4iX0UmNwOIAZGE7z4BTNc1VQn2X60x12QMuDBvPWYju-r_Bp629GxXrIzdAWAZhIVqeV9HJiMdbznawrO5EVII4NwieOlXK_z36pcwWCqQ-8_l2pTZ4k-gqeHOWI1eqGN1lINLeHRsrj"
                      alt="Laboratorio de precisión"
                    />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="container">
            <SectionTitle
              title="El Corazón de Magistral"
              subtitle="Un equipo multidisciplinar de farmacéuticos especialistas, técnicos y expertos en formulación comprometidos con tu bienestar."
            />

            <div className="team-grid">
              <TeamMemberCard
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuA0fr8Z4MQh0d7fUyVmdS8-coYPurjoPYmBvnbFbLndiARmZ5jzdbeZuB1IkJWlCWh7XrwTahDOTR4VZUqF3oCW-x1VKZ-ra_h14fifw3lo4HCc32pGMbaGUnb9uEEme0cyhaVbrJIB8l_BZYmN8YxVJkJqwnQmgRfbOxQaprb-rHmbax0QULR2uQ_kunJlJsBeKw15h8hr1vPPnZPThlbw0w66oBVYCuF_nRb5vJgxIrsosij9NI1Ff_evsPvp-fDsaCKRmhidPlV3"
                name="Dra. Elena Valdés"
                role="Directora Técnica"
                description="Especialista en dermofarmacia clínica con 20 años de experiencia."
              />

              <TeamMemberCard
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuD1MoDvyT1WYnZoD5uKnxIdCCP_vSueoYTIEcVCHGKuidgPPQhb1YY8nDsZz34_U9E_FCIDoRgrEtIlrKQWwNfklwgyKbnJsp-mBMR3NBxNCFHB8J9dV2al8NMI4AOwHvzU8vOzjQnBE2FTdEKYGNy0AO_NeKd8owFBpUknMuOeLolDm5NkvN7dwZOYwMUxmbFfwrzz7I5uzFUBkaRutXXFRNzcvXOnFhEpsXDMkvzsUYFv8eArzXfWK4aQu6eti0KkqkddXkcyBNZd"
                name="Dr. Javier Ruiz"
                role="Jefe de Laboratorio"
                description="Experto en farmacotecnia y sistemas avanzados de liberación de fármacos."
              />

              <TeamMemberCard
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDpEdtSD-1yH2Q3foD_Pp7zYfKAB0Jutqb0h9bBB_8cqCe11P3oNKqefZqLu2e_cmPwec912B1VuIoPyQshZ1fTBh1-XGbE132zzQYxCPPCGR7gFNEnbBX5AemKFB-8cFGSZeGx9LnIaKv7c3MrYClAjJXjcF39ZdNZB3-6c-mk4uto7-Xuh-f-YD2Zx2WY7n7MGY8MVOCTn3sq5P23mR_kjwE4Q3ZLsH_K71-PJGMKL4nvvysnJTRssfdEh3ScjWkFBpe9KkiM6Y05"
                name="Sofía Martín"
                role="Control de Calidad"
                description="Responsable de asegurar la estabilidad y pureza de cada preparado."
              />

              <TeamMemberCard
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuABuVj1qyyBXdguf_UPpVryGzoAvKAxwzdzK9Z_kFJjl1TLMNqTdLAiTg83sJ1qgUClhN1-36kIufTF3A0RQOw1V4QmLMIdTNmcqwIRZ3v8QEUy3tRrxQQ-TipDA2yfoa3fh5l9qrRnTdTb7htlMietyqdWy7lwlsiqElAJG4YlfY5_SursQU5xWGy1yIlJJPoF4oKj937J9P7f6X-h4mGnxxcIKQMvD8ltq9Z_4bPlw4v_unxtr0bODXH-_yRIDV2R9s5hyjhuJX6k"
                name="Carlos Goya"
                role="Atención al Paciente"
                description="Especialista en seguimiento farmacoterapéutico y asesoramiento."
              />
            </div>
          </div>
        </section>

        <section className="about-cta-section">
          <div className="about-cta-pattern"></div>

          <div className="container about-cta-content">
            <h2>¿Necesitas una fórmula a medida?</h2>
            <p>
              Nuestro equipo está listo para colaborar con tu médico y crear el
              tratamiento exacto que tu salud requiere.
            </p>

            <div className="about-cta-actions">
              <Button variant="secondary">Consultar Disponibilidad</Button>
              <Button variant="outline-light">
                Hablar con un Farmacéutico
              </Button>
            </div>
          </div>
        </section>
      </main>
  );
}