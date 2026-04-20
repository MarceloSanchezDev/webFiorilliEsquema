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
            <span className="about-badge">Nuestra Historia</span>
            <h1 className="about-hero-title">
              Una farmacia con <span>vocación</span>, historia y compromiso.
            </h1>

            <p className="about-hero-description">
              Somos una empresa familiar ubicada en la calle Salvador Curutchet
              2418, de la localidad Castelar,Partido de Morón, Provincia de
              Buenos Aires, comprometida con el cuidado de la salud. Nos
              especializamos en la elaboración de preparados magistrales
              individualizados, brindando productos seguros, de calidad y a
              precios económicos.
            </p>

            <p className="about-hero-description">
              Ofrecemos atención personalizada, asesoramiento profesional y
              servicios como toma de presión arterial, asesoramiento sobre el
              uso de glucómetros, atención de gran variedad de obras sociales:
              PAMI, IOMA, Policía Federal, MEDIFE, OMINT, SANCOR, AVALIAN, CASA,
              AMEBPBA y AMFFA, entre otras.
            </p>
            <p className="about-hero-description">
              Nuestro equipo está en constante capacitación y trabajamos con
              tecnología actualizada. Enfocados en seguir creciendo como
              institución y en fortalecer nuestro rol como farmacia escuela,
              formando a las nuevas generaciones de profesionales farmacéuticos.
              Una farmacia cercana, confiable y en permanente evolución al
              servicio de nuestra comunidad.
            </p>
            <p className="about-hero-description">
              Una farmacia cercana, confiable y en permanente evolución al
              servicio de nuestra comunidad.
            </p>
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
                "La personalización no es una opción, es nuestro compromiso con
                tu salud."
              </p>
              <strong>— DT. Monica Beatriz Fiorilli, Fundadora</strong>
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
                variant="light"
                className="history-card"
              >
                <span className="material-symbols-outlined history-watermark">
                  history_edu
                </span>
                <div>
                  <p className="feature-card-text">
                    La <em>Farmacia JR Fiorilli</em> fue fundada el lunes 8 de
                    enero de 1996 como una pequeña empresa familiar. Surgió como
                    sociedad entre la farmacéutica Mónica Beatriz Fiorilli y el
                    señor Raúl Jacquet. Desde sus inicios, el establecimiento,
                    ubicado en la calle Curutchet 2418, operó bajo el nombre de
                    <em>Farmacia JR</em>, con el señor Raúl Alejandro Jacquet
                    —esposo de la farmacéutica— desempeñándose como gerente
                    general.
                  </p>
                  <p className="feature-card-text">
                    Desde el comienzo, la farmacia se destacó por ofrecer una
                    atención personalizada de excelencia, junto con la
                    elaboración de preparados magistrales individualizados,
                    cumpliendo siempre con los más altos estándares de calidad y
                    seguridad. También se caracterizó por ofrecer precios
                    accesibles y una amplia variedad de servicios farmacéuticos,
                    como toma de presión arterial, asesoramiento sobre control
                    de glucemia y atención a obras sociales.
                  </p>
                  <p className="feature-card-text">
                    A lo largo de su trayectoria, la farmacia ha evolucionado
                    constantemente, incorporando nuevas tecnologías, técnicas
                    actualizadas en el ámbito de la salud y profesionales
                    altamente capacitados. Todo ello con el objetivo de seguir
                    creciendo y mejorando tanto la calidad de atención como los
                    servicios brindados.
                  </p>
                  <p className="feature-card-text">
                    En marzo de 2017, la farmacéutica Mónica Beatriz Fiorilli
                    asumió el cargo de directora técnica y el establecimiento
                    pasó a denominarse <em>Farmacia JR Fiorilli</em>. Ese mismo
                    año, la Dra. Fiorilli se incorporó al consejo directivo de
                    la filial Castelar, Ituzaingó y Morón del Colegio de
                    Farmacéuticos, cargo que continúa ejerciendo en la
                    actualidad , manteniendo siempre una cordial relación entre
                    la
                    <em>Farmacia JR Fiorilli</em> y el colegio de farmacéuticos
                    de Morón .
                  </p>
                  <p className="feature-card-text">
                    En 2022, la farmacia dio un paso más en su compromiso con la
                    comunidad, convirtiéndose en <em>farmacia escuela</em>.
                    Desde entonces, colabora activamente en la formación de
                    futuros profesionales de la salud, brindando capacitación a
                    estudiantes de la Universidad de Morón que cursan la materia
                    <em>Prácticas Profesionales Externas</em>.
                  </p>
                  <p className="feature-card-text">
                    Hoy, <em>Farmacia JR Fiorilli</em> continúa firmemente con
                    su objetivo primario de ser una institución comprometida con
                    la salud, ofreciendo productos accesibles, atención
                    personalizada, cobertura de obras sociales y una fuerte
                    vocación docente.
                  </p>
                </div>
              </FeatureCard>
            </div>

            <div className="history-small">
              <FeatureCard
                icon="verified"
                title="Nuestra Misión"
                variant="primary"
              >
                <div>
                  <p className="feature-card-text">
                    En <em>Farmacia JR Fiorilli</em> trabajamos día a día
                    guiados por una serie de objetivos que reflejan nuestro
                    compromiso con la salud, la calidad y la mejora continua.
                    Estos son los pilares que orientan nuestra labor:
                  </p>
                  <ol>
                    <li>
                      <h5>Brindar atención personalizada y de calidad</h5>
                      Atender a cada paciente de manera individual, con respeto
                      y profesionalismo, ofreciendo soluciones adaptadas a sus
                      necesidades.
                    </li>
                    <li>
                      <h5>Garantizar productos seguros y eficaces</h5>
                      Elaborar preparados magistrales individualizados siguiendo
                      con estándares de calidad y seguridad establecidos en las
                      normas de buenas practicas en farmacia.
                    </li>
                    <li>
                      <h5>Ofrecer precios accesibles y equitativos</h5>
                      Asegurar el acceso a tratamientos de calidad mediante una
                      política de precios económicos que contemple la realidad
                      de nuestros pacientes.
                    </li>
                    <li>
                      <h5>
                        Ampliar y mejorar nuestros servicios farmacéuticos
                      </h5>
                      Incluir prestaciones como toma de presión arterial,
                      control de glucosa y atención a obras sociales, buscando
                      siempre responder de forma integral a las necesidades de
                      la comunidad.
                    </li>
                    <li>
                      <h5>
                        Fomentar la actualización científica y tecnológica
                      </h5>
                      Mantenernos al día con los avances en salud, incorporando
                      nuevas tecnologías y métodos que optimicen nuestros
                      procesos y servicios.
                    </li>
                    <li>
                      <h5>
                        Consolidarnos como una farmacia escuela de referencia
                      </h5>
                      Fortalecer nuestro rol en la formación de futuros
                      profesionales, ofreciendo un espacio de aprendizaje
                      práctico y comprometido con la excelencia.
                    </li>
                    <li>
                      <h5>
                        Seguir creciendo como empresa familiar e institucional
                      </h5>
                      Expandir nuestras capacidades sin perder nuestros valores
                      de origen, con una visión centrada en el desarrollo
                      sustentable, ético y humano.
                    </li>
                  </ol>
                </div>
              </FeatureCard>
            </div>

            <div className="history-small">
              <FeatureCard
                title="Compromiso"
                icon="biotech"
                variant="secondary"
              >
                <div className="d-flex  flex-column flex-md-row justify-content-center align-items-center gap-4 ">
                  <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
                    <div>
                      <p className="feature-card-text">
                        En <em>Farmacia JR Fiorilli</em> estamos comprometidos
                        en acompañar a nuestros pacientes a lo largo de sus
                        tratamientos, proporcionando productos seguros y de alta
                        calidad. Este compromiso se sostiene en una atención
                        personalizada, un equipo de profesionales bien
                        capacitados y procesos de elaboración que garantizan la
                        máxima seguridad , calidad y confiabilidad .
                      </p>
                      <p className="feature-card-text">
                        Como una institución enfocada en el crecimiento y la
                        mejora continua de los servicios y productos prestados
                        al público . Constantemente estamos incorporando nuevas
                        tecnologías , técnicas , servicios , para fortalecer
                        nuestras capacidades y seguir ofreciendo la mejor
                        atención posible a quienes depositan su confianza en
                        nosotros. Nuestra visión es consolidarnos como una
                        farmacia moderna, accesible y cercana al público en
                        general , preparada para afrontar los desafíos futuros
                        con responsabilidad e innovación.
                      </p>
                      <p className="feature-card-text">
                        Nuestros planeas a futuros están centrados en seguir
                        creciendo como institución fortalecer nuestro rol como
                        centro de atención de salud y desarrollar nuevas
                        herramientas que permitan brindar un mejor servicio
                        integral.
                      </p>
                      <p className="feature-card-text">
                        Más allá de la dispensa de medicamentos, aspiramos a ser
                        un ejemplo a seguir en lo que se refiere a cuidados de
                        la salud, guiados por la excelencia, la ética
                        profesional y el compromiso genuino con nuestros
                        pacientes.
                      </p>
                    </div>
                  </div>
                </div>
              </FeatureCard>
            </div>

            <div className="history-large">
              <FeatureCard
                title="Filosofia"
                variant="light"
                className="history-card"
              >
                <span className="material-symbols-outlined history-watermark">
                  history_edu
                </span>
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                  <div>
                    <p className="feature-card-text">
                      En <em>Farmacia JR Fiorilli</em> creemos en un modelo de
                      farmacia centrado en las personas. Nuestra principal
                      especialidad es la elaboración de preparados magistrales,
                      lo que nos permite ofrecer soluciones personalizadas,
                      adaptadas a las necesidades específicas de cada paciente ,
                      con precios accesibles y económicos . Trabajamos con
                      mejores estándares de calidad y seguridad, utilizando
                      materias primas certificadas, procesos controlados y
                      verificados y con tecnología actualizada.
                    </p>
                    <ul>
                      <li style={{ listStyle: "none" }}>
                        <span>✅</span> La <b>calidad</b> en cada uno de
                        nuestros productos y servicios brindados .
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <span>✅</span> El{" "}
                        <b>compromiso con la salud pública</b> y el bienestar de
                        nuestros pacientes.
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <span>✅</span> La{" "}
                        <b>honestidad, el respeto y la amabilidad</b> en el
                        trato diario con quienes nos eligen.
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <span>✅</span> La <b>vocación de servicio</b>, ayudando
                        siempre de la mejor forma posible, con cercanía y
                        responsabilidad.
                      </li>
                    </ul>
                    <br />
                    <p className="feature-card-text">
                      Siempre buscamos seguir evolucionado y mejorando a medida
                      que pasa el tiempo , manteniéndonos siempre actualizados
                      en todos los temas relacionados con la salud y el
                      bienestar ,manteniendo siempre una formación continua y
                      fortaleciendo cada aspecto posible dentro de nuestra
                      farmacia . Buscando no solo mejor nuestros servicios y
                      atención al publico , sino también contribuir de forma
                      activa con el desarrollo y bienestar del publico y de los
                      futuros farmacéuticos.{" "}
                    </p>
                    <p className="feature-card-text">
                      Como farmacia escuela, también nos comprometemos con la
                      formación de las nuevas generaciones de profesionales,
                      compartiendo nuestro conocimiento y experiencia con
                      quienes están dando sus primeros pasos en el mundo laboral
                      .
                    </p>
                    <p className="feature-card-text">
                      En definitiva, <em>Farmacia JR Fiorilli</em> es más que un
                      lugar donde adquirir medicamentos: es un espacio de
                      confianza, cuidado y compromiso, donde cada persona es
                      atendida con dedicación, conocimiento y calidez,
                      accediendo a productos de calidad y servicios de
                      excelencia, siempre a precios económicos.
                    </p>
                  </div>
                </div>
              </FeatureCard>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <SectionTitle
            title="El Corazón de Farmacia JR Fiorilli"
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
            <Button variant="outline-light">Hablar con un Farmacéutico</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
