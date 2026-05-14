import Button from "../../components/Button/Button";
import veterinarios from "../../assets/veterinarios.jpg";
import pediatriocos from "../../assets/pediatricos.jpg";
import dermatologicos from "../../assets/dermatologicos.jpg";
import suplementos from "../../assets/suplementos.jpg";
import menopausia from "../../assets/menopausia.jpg";
import fertilidad from "../../assets/fertilidad.jpg";

import imgEspecialidades from "../../assets/imagen-home.png";
import "./Especialidades.css";
import { useEffect } from "react";

const especialidades = [
  {
    eyebrow: "Especialidades",
    title: "Pediátricos",
    text: [
      "En Farmacia Fiorilli JR nos dedicamos a la elaboración de productos pediátricos, ofreciendo soluciones seguras y eficaces adaptadas a las necesidades específicas  de cada paciente. Debido a que muchos medicamentos  dentro de la industria farmacéutica  no se encuentran disponibles en presentaciones adecuadas para niños, desarrollamos fórmulas magistrales personalizadas para cada caso en específico.",
      "Aplicaciones: tratamientos para acné, psoriasis, hiperpigmentación y formulaciones antienvejecimiento.",
      "Elaboramos distintas formas farmacéuticas, como soluciones, suspensiones y jarabes, cápsulas, y también preparados tópicos como cremas, pomadas, ungüentos y polvos.",
      "Cada formulación se realiza de manera individual, ajustando cuidadosamente la dosis según la edad y el peso del paciente , garantizando precisión, calidad y seguridad en cada tratamiento.",
    ],
    image: pediatriocos,
    alt: "Pediátricos",
    variant: "light",
    reverse: false,
  },
  {
    eyebrow: "Especialidades",
    title: "Dermatológicos",
    text: [
      "La piel es un órgano de gran sensibilidad y complejidad, que necesita soluciones específicas y cuidadosamente adaptadas a cada caso particular . En Farmacia Fiorilli JR, nos dedicamos a la elaboración de preparados dermatológicos personalizados, pensados específicamente para  brindar una  respuesta  efectivas a las distintas necesidades de nuestros pacientes.",
      "Elaboramos una amplia variedad de formas farmacéuticas de uso tópico, como cremas, geles, lociones, pomadas y soluciones, seleccionando de manera precisa los componentes más adecuados para cada tratamiento.",
      "Cada preparación se realiza de forma individual, teniendo en cuenta el tipo de piel y la afección a tratar, con el objetivo de ofrecer productos de alta calidad, seguridad y resultados confiables , para cada situación especifica . ",
    ],
    image: dermatologicos,
    alt: "Dermatológicos",
    variant: "soft",
    reverse: true,
  },
  {
    eyebrow: "Especialidades",
    title: "Suplementos y Nutracéuticos",
    text: [
      "Los suplementos nutricionales son un apoyo fundamental para complementar la alimentación y contribuir al bienestar general del organismo. En Farmacia Fiorilli JR ofrecemos asesoramiento personalizado para ayudarte a elegir las opciones más adecuadas según tus objetivos y necesidades.",
      "Contamos con una amplia variedad de suplementos que pueden contribuir al aporte de vitaminas, minerales, proteínas y otros nutrientes esenciales, especialmente en situaciones de desgaste físico, estrés, requerimientos específicos o estilos de vida exigentes.",
      "Cada recomendación se realiza de forma individual, considerando el estado de salud, la dieta y los objetivos de cada persona, con el fin de promover un uso responsable, seguro y eficaz.",
    ],
    image: suplementos,
    alt: "Suplementos y Nutracéuticos",
    variant: "light",
    reverse: false,
  },
  {
    eyebrow: "Especialidades",
    title: "Fertilidad",
    text: [
      "Adaptamos preparados a las necesidades de las mascotas, facilitando la administración y ajustando dosis según el peso del animal.",
      "Opciones: pastas orales saborizadas, soluciones transdérmicas y cápsulas de tamaño reducido.",
    ],
    image: fertilidad,
    alt: "Fertilidad",
    variant: "soft",
    reverse: true,
  },
  {
    eyebrow: "Especialidades",
    title: "Climaterio, menopausia y sexualidad",
    text: [
      "La naturaleza nos brinda una valiosa fuente de productos medicinales que utilizamos para elaborar nuestras fórmulas magistrales, con el objetivo de ofrecer el mejor tratamiento posible y contribuir al cuidado de la salud.",
      "Los componentes de estas formulaciones provienen de extractos vegetales con certificación de calidad, cuidadosamente seleccionados por su eficacia y seguridad. En muchos casos, los tratamientos de origen natural presentan una muy buena tolerancia y una baja incidencia de efectos adversos, lo que los convierte en una alternativa terapéutica a considerar frente a distintas necesidades.",
      "Asimismo, la medicina de origen natural puede complementar e incluso, en determinadas situaciones, según cada caso particular. De este modo, se ofrecen alternativas personalizadas que se adaptan a cada paciente, favoreciendo un abordaje integral y con un buen perfil de tolerancia.",
      "Estas preparaciones pueden elaborarse en distintas formas farmacéuticas, según la necesidad terapéutica y la comodidad del paciente, tales como cápsulas, gotas medicinales, tisanas o mezclas herbales, extractos vegetales, comprimidos y polvos.",
    ],
    image: menopausia,
    alt: "Climaterio, menopausia y sexualidad",
    variant: "light",
    reverse: false,
  },
  {
    eyebrow: "Especialidades",
    title: "Veterinarios",
    text: [
      "Es importante recordar que, para brindar el mejor cuidado posible a las mascotas, estas deben recibir una atención farmacoterapéutica de la más alta calidad.",
      "Si bien los medicamentos industriales cubren un amplio espectro de patologías, existen situaciones particulares en las que resulta necesario recurrir a la formulación magistral veterinaria. La individualización del tratamiento permite adaptar la terapia a las necesidades específicas de cada animal, optimizando su eficacia y seguridad.",
      "Entre los beneficios de esta personalización se incluyen el ajuste preciso de la dosis, la modificación de excipientes, la mejora de las características organolépticas para facilitar la administración, así como la posibilidad de tratar patologías sin alternativas comerciales disponibles o de emplear formas farmacéuticas más adecuadas para cada caso.",
      "Estos preparados se elaboran con dosis ajustadas según el peso, la especie y la edad del animal, garantizando un tratamiento más preciso, seguro y adaptado a sus requerimientos particulares.",
    ],
    image: veterinarios,
    alt: "Veterinarios",
    variant: "soft",
    reverse: true,
  },
];

export default function Especialidades() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="specialties-main">
      <section className="hero-section">
        <div className="hero-background">
          <img
            className="hero-background-image"
            src={imgEspecialidades}
            alt="Farmacéutico profesional"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <h1
              className="especialidades-title
"
            >
              Formulas Magistrales
            </h1>

            <p className="hero-description">
              Es todo medicamento prescripto en una receta magistral para un
              paciente individualizado, posteriormente preparado, envasado y
              rotulado por un farmacéutico en el laboratorio de su farmacia y
              dispensado en la misma. La Formulación Magistral permite
              individualizar el tratamiento, de esta manera el medicamento se
              adapta al paciente y a sus necesidades fisiopatológicas
              particulares, lo que aporta valiosas herramientas terapéuticas
              como:
            </p>
            <ul className="especialidades-puntos">
              <li>La adaptación precisa de las dosis</li>
              <li>El diseño individualizado del vehículo</li>
              <li>
                Forma farmacéutica que mejor se ajuste a las necesidades del
                paciente
              </li>
              <li>
                Evitar la incorporación de determinados excipientes que puedan
                generar alergias o intolerancia
              </li>
              <li>Flexibilidad en el tratamiento.</li>
            </ul>
            <p className="hero-description">
              Los tratamientos se caracterizan por la participación
              multidisciplinaria entre médico, farmacéutico y paciente, esta
              interacción se basa en la necesidad y derecho del paciente a una
              atención sanitaria particular, pues muchos de ellos son
              considerados «casos únicos». Es importante resaltar que este tipo
              de medicamentos se preparan con ingredientes farmacéuticos activos
              de calidad certificada, siguiendo las normas de correcta
              elaboración y control de calidad establecidas al efecto y según
              las directrices de la legislación vigente.
            </p>
          </div>
        </div>
      </section>

      <div className="specialties-list">
        {especialidades.map((item) => (
          <EspecialidadSection key={item.title} {...item} />
        ))}
      </div>
    </main>
  );
}

function EspecialidadSection({
  eyebrow,
  title,
  text,
  image,
  alt,
  variant = "light",
  reverse = false,
}) {
  return (
    <section className={`specialty-section specialty-section-${variant}`}>
      <div
        className={`specialty-container ${
          reverse ? "specialty-container-reverse" : ""
        }`}
      >
        <div className="specialty-text">
          <span className="specialty-eyebrow">{eyebrow}</span>

          <h2>{title}</h2>

          <div className="specialty-paragraphs">
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <Button variant={variant === "soft" ? "secondary" : "primary"}>
            Consultar Especialidad
          </Button>
        </div>

        <div className="specialty-media">
          <img src={image} alt={alt} />
        </div>
      </div>
    </section>
  );
}
