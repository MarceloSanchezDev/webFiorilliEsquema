import Button from "../../components/Button/Button";
import "./Especialidades.css";

const especialidades = [
  {
    eyebrow: "",
    title: "Pediátricos",
    text: [
"En Farmacia Fiorilli JR nos dedicamos a la elaboración de productos pediátricos, ofreciendo soluciones seguras y eficaces adaptadas a las necesidades específicas  de cada paciente. Debido a que muchos medicamentos  dentro de la industria farmacéutica  no se encuentran disponibles en presentaciones adecuadas para niños, desarrollamos fórmulas magistrales personalizadas para cada caso en específico.",      "Aplicaciones: tratamientos para acné, psoriasis, hiperpigmentación y formulaciones antienvejecimiento.",
"Elaboramos distintas formas farmacéuticas, como soluciones, suspensiones y jarabes, cápsulas, y también preparados tópicos como cremas, pomadas, ungüentos y polvos.",
"Cada formulación se realiza de manera individual, ajustando cuidadosamente la dosis según la edad y el peso del paciente , garantizando precisión, calidad y seguridad en cada tratamiento."

],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCNSqTVHB6Hj9E5yPI5lAYK3igCGa_qlD69wIYKS9yzspS2cVdVNwHNKjrwr7agY6hA15fjoGrkRM1x5NEG8-llyKlEK3q8s2UNcR6EzeS4Fdw-y_JA71Xm16x3J3qANYF0kGX5qXrSOx69ggPmLYsvdTWviyZA1Zhal0qAhFq96CIawfn5odrsR-dpQUKNy2erKjYrHFFhFJRn-PNr7FIQNcFtMqG4nYmJgR48Rp6_C_3fSS0xACKPFGtNvshKVm3QGOFm1XMdL6Od6",
    alt: "Pediátricos",
    variant: "light",
    reverse: false,
  },
  {
    eyebrow: "",
    title: "Dermatológicos",
    text: [
"La piel es un órgano de gran sensibilidad y complejidad, que necesita soluciones específicas y cuidadosamente adaptadas a cada caso particular . En Farmacia Fiorilli JR, nos dedicamos a la elaboración de preparados dermatológicos personalizados, pensados específicamente para  brindar una  respuesta  efectivas a las distintas necesidades de nuestros pacientes." ,
"Elaboramos una amplia variedad de formas farmacéuticas de uso tópico, como cremas, geles, lociones, pomadas y soluciones, seleccionando de manera precisa los componentes más adecuados para cada tratamiento.",
"Cada preparación se realiza de forma individual, teniendo en cuenta el tipo de piel y la afección a tratar, con el objetivo de ofrecer productos de alta calidad, seguridad y resultados confiables , para cada situación especifica . "    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5ncRU4MlUyWMWa90WgY-Q4gwAQxbywH870hprtd4lhczbkq3USNiB06Oag1WOH9smdL_Ws6fSJ0_3Bp9thSs-nYCYl0V2eEoRYdD5_k8MLpYo78UZfzaGFL1KcSpiKEEHDNVLiuJaSRxvNicGaQB1WTJ-OfQbtW90_C6KM6w9sE1qpESwMOSTPETqNN4TWPXDMZLmkBS-24AxR-hKuh7vDG07M-0MNo4J_WKwx-NamAD56pQqu5pxCtwHBFLDyUAG7UIZ59uGzAsf",
    alt: "Suplementos",
    variant: "soft",
    reverse: true,
  },
  {
    eyebrow: "",
    title: "Suplementos y Nutracéuticos",
    text: [
"Los suplementos nutricionales son un apoyo fundamental para complementar la alimentación y contribuir al bienestar general del organismo. En Farmacia Fiorilli JR ofrecemos asesoramiento personalizado para ayudarte a elegir las opciones más adecuadas según tus objetivos y necesidades.",
"Contamos con una amplia variedad de suplementos que pueden contribuir al aporte de vitaminas, minerales, proteínas y otros nutrientes esenciales, especialmente en situaciones de desgaste físico, estrés, requerimientos específicos o estilos de vida exigentes.",
"Cada recomendación se realiza de forma individual, considerando el estado de salud, la dieta y los objetivos de cada persona, con el fin de promover un uso responsable, seguro y eficaz.",    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5jDIUCo0P5XgNEU3Kn8OB_vfW0YQQ8QnIHcs_75DSgnCwdDo0P8ge-neJ0kkyNRxoyn8Uzuz_zNu1ThncbIatgJmPAiHIidam0gC6c-5HkCfyR9hwfPlTRlWj6XFzOsSaHsoZn9hrVs3VNWCu-CiyUOCJSsDsRTo0xjpgfoyrBTqm1WWrynO4kGUTlvMzZdVMgEAh77oxLFEINdLeUMMdVXjpsSDBYssp3HY9ENZlB-dtHnJdp3WF-HyM9QtN1h3gcnAZF0tYc5rh",
    alt: "Fitoterapia",
    variant: "light",
    reverse: false,
  },
  {
    eyebrow: "",
    title: "Fertilidad",
    text: [
      "Adaptamos preparados a las necesidades de las mascotas, facilitando la administración y ajustando dosis según el peso del animal.",
      "Opciones: pastas orales saborizadas, soluciones transdérmicas y cápsulas de tamaño reducido.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYOlEcAzZXX8r8M9Vn4Ie6L_MoJ4Nov7o8L4IMMg_vrrpSrckotg5bE1p1pEIiD-adpHkFA30WmwcRkWd9qGOpd4zCWPYxk3O9Game4uoDK8O_Mp5w6bI77G-Mp6YWGdd5uuPvN-hsrJgmzQlzEqKoyiObpiwhQVVx9Up1Uvv3fwrzfGR-lJ5rP1OQcpxPj_FimwBH4c8-fwBQo5EUGcyy3TOo7wmL-aWaoL3dzO8Npq5b9R97mgDO1y0-HRTSHbgGb2O2UN9zv_Cy",
    alt: "Veterinarios",
    variant: "soft",
    reverse: true,
  },
    {
    eyebrow: "",
    title: "Fototrópicos",
    text: [
"La naturaleza nos brinda una valiosa fuente de productos medicinales que utilizamos para elaborar nuestras fórmulas magistrales, con el objetivo de ofrecer el mejor tratamiento posible y contribuir al cuidado de la salud.",
"Los componentes de estas formulaciones provienen de extractos vegetales con certificación de calidad, cuidadosamente seleccionados por su eficacia y seguridad. En muchos casos, los tratamientos de origen natural presentan una muy buena tolerancia y una baja incidencia de efectos adversos, lo que los convierte en una alternativa terapéutica a considerar frente a distintas necesidades.",
"Asimismo, la medicina de origen natural puede complementar e incluso, en determinadas situaciones, según cada caso particular. De este modo, se ofrecen alternativas personalizadas que se adaptan a cada paciente, favoreciendo un abordaje integral y con un buen perfil de tolerancia.",
"Estas preparaciones pueden elaborarse en distintas formas farmacéuticas, según la necesidad terapéutica y la comodidad del paciente, tales como cápsulas, gotas medicinales, tisanas o mezclas herbales, extractos vegetales, comprimidos y polvos.",
"Estas preparaciones pueden elaborarse en distintas formas farmacéuticas, según la necesidad terapéutica y la comodidad del paciente, tales como cápsulas, gotas medicinales, tisanas o mezclas herbales, extractos vegetales, comprimidos y polvos.",    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYOlEcAzZXX8r8M9Vn4Ie6L_MoJ4Nov7o8L4IMMg_vrrpSrckotg5bE1p1pEIiD-adpHkFA30WmwcRkWd9qGOpd4zCWPYxk3O9Game4uoDK8O_Mp5w6bI77G-Mp6YWGdd5uuPvN-hsrJgmzQlzEqKoyiObpiwhQVVx9Up1Uvv3fwrzfGR-lJ5rP1OQcpxPj_FimwBH4c8-fwBQo5EUGcyy3TOo7wmL-aWaoL3dzO8Npq5b9R97mgDO1y0-HRTSHbgGb2O2UN9zv_Cy",
    alt: "Veterinarios",
    variant: "soft",
    reverse: true,
  },
      {
    eyebrow: "",
    title: "Veterinarios",
    text: [
"Es importante recordar que, para brindar el mejor cuidado posible a las mascotas, estas deben recibir una atención farmacoterapéutica de la más alta calidad.",
"Si bien los medicamentos industriales cubren un amplio espectro de patologías, existen situaciones particulares en las que resulta necesario recurrir a la formulación magistral veterinaria. La individualización del tratamiento permite adaptar la terapia a las necesidades específicas de cada animal, optimizando su eficacia y seguridad.",
"Entre los beneficios de esta personalización se incluyen el ajuste preciso de la dosis, la modificación de excipientes, la mejora de las características organolépticas para facilitar la administración, así como la posibilidad de tratar patologías sin alternativas comerciales disponibles o de emplear formas farmacéuticas más adecuadas para cada caso.",
"Estos preparados se elaboran con dosis ajustadas según el peso, la especie y la edad del animal, garantizando un tratamiento más preciso, seguro y adaptado a sus requerimientos particulares.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYOlEcAzZXX8r8M9Vn4Ie6L_MoJ4Nov7o8L4IMMg_vrrpSrckotg5bE1p1pEIiD-adpHkFA30WmwcRkWd9qGOpd4zCWPYxk3O9Game4uoDK8O_Mp5w6bI77G-Mp6YWGdd5uuPvN-hsrJgmzQlzEqKoyiObpiwhQVVx9Up1Uvv3fwrzfGR-lJ5rP1OQcpxPj_FimwBH4c8-fwBQo5EUGcyy3TOo7wmL-aWaoL3dzO8Npq5b9R97mgDO1y0-HRTSHbgGb2O2UN9zv_Cy",
    alt: "Veterinarios",
    variant: "soft",
    reverse: true,
  },
];

export default function Especialidades() {
  return (
    <main className="specialties-main">
      <header className="specialties-hero">
        <div className="specialties-hero-content">
          <span className="specialties-label">Precisión científica </span>

          <h1 className="specialties-title">
            Formulas Magistrales
          </h1>

          <p className="specialties-description">
            Es todo medicamento prescripto en una receta magistral para un paciente individualizado, posteriormente preparado, envasado y rotulado por un farmacéutico en el laboratorio de su farmacia y dispensado en la misma.
            La Formulación Magistral permite individualizar el tratamiento, de esta manera el medicamento se adapta al paciente y a sus necesidades fisiopatológicas particulares, lo que aporta valiosas herramientas terapéuticas como:
          </p>
          <ul className="especialidades-puntos">
            <li>La adaptación precisa de las dosis
            </li>
            <li>El diseño individualizado del vehículo
            </li>
            <li>Forma farmacéutica que mejor se ajuste a las necesidades del paciente
            </li>
            <li>Evitar la incorporación de determinados excipientes que puedan generar alergias o intolerancia
            </li>
            <li>Flexibilidad en el tratamiento.
            </li>
          </ul>
          <p class="specialties-description">
            Los tratamientos se caracterizan por la participación multidisciplinaria entre médico, farmacéutico y paciente, esta interacción se basa en la necesidad y derecho del paciente a una atención sanitaria particular, pues muchos de ellos son considerados «casos únicos».
            Es importante resaltar que este tipo de medicamentos se preparan con ingredientes farmacéuticos activos de calidad certificada, siguiendo las normas de correcta elaboración y control de calidad establecidas al efecto y según las directrices de la legislación vigente.</p>
        </div>
      </header>

      <div className="specialties-list">
        {especialidades.map((item) => (
          <EspecialidadSection key={item.title} {...item} />
        ))}
      </div>

      <section className="specialties-cta">
        <div className="specialties-cta-content">
          <h2>¿Necesitás una formulación personalizada?</h2>
          <p>
            Nuestro equipo farmacéutico puede orientarte y trabajar junto a tu
            médico para encontrar la alternativa más adecuada.
          </p>

          <div className="specialties-cta-actions">
            <Button variant="light">Contactar a un Farmacéutico</Button>
            <Button variant="outline-light">Enviar Receta</Button>
          </div>
        </div>
      </section>
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
        className={`specialty-container ${reverse ? "specialty-container-reverse" : ""
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