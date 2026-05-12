import Button from "../../components/Button/Button";
import "./Especialidades.css";

const especialidades = [
  {
    eyebrow: "Dosis Infantiles",
    title: "Pediatría",
    text: [
      "Ajustamos dosis exactas y sabores agradables para asegurar la adherencia al tratamiento en pacientes pediátricos.",
      "Beneficios: eliminación de alérgenos, formas farmacéuticas amigables, jarabes personalizados y dosis adaptadas.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmk9dhdpQF3Vf4Yly7Og3iBqvOQoES71b-HYmAkvdUd6cHh0NhVRGeNkza97eaBaBQ07i3kocWdkXzlb9oV1wa_sMGF67SmC8hbao5zmCXI7mj7P7GEChfbgxCWSjWSVG5y8ASjREaoLy7XWBO77kaMsRF5oSKk9PAKfJmSqNLHn-BeCDuUMHG7sSvZD0MuBnOs0_uHRpQd3TatbzucENelzUgoW_5wCkpkDShaRvNmIwv6sChkT3qHBjlTlWEu3LAFtonFMTAca4K",
    alt: "Pediatría",
    variant: "soft",
    reverse: true,
  },
  {
    eyebrow: "Medicina Cutánea",
    title: "Dermatología",
    text: [
      "Combinamos activos dermatológicos en vehículos específicos como cremas, geles y lociones para optimizar la penetración cutánea.",
      "Aplicaciones: tratamientos para acné, psoriasis, hiperpigmentación y formulaciones antienvejecimiento.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCNSqTVHB6Hj9E5yPI5lAYK3igCGa_qlD69wIYKS9yzspS2cVdVNwHNKjrwr7agY6hA15fjoGrkRM1x5NEG8-llyKlEK3q8s2UNcR6EzeS4Fdw-y_JA71Xm16x3J3qANYF0kGX5qXrSOx69ggPmLYsvdTWviyZA1Zhal0qAhFq96CIawfn5odrsR-dpQUKNy2erKjYrHFFhFJRn-PNr7FIQNcFtMqG4nYmJgR48Rp6_C_3fSS0xACKPFGtNvshKVm3QGOFm1XMdL6Od6",
    alt: "Dermatología",
    variant: "light",
    reverse: false,
  },
  {
    eyebrow: "Bienestar Holístico",
    title: "Nutracéuticos y Suplementos",
    text: [
      "Diseñamos suplementos de grado farmacéutico, libres de rellenos innecesarios y adaptados a requerimientos nutricionales específicos.",
      "Soportes: vitaminas, complejos de aminoácidos personalizados y suplementación para optimización metabólica.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5ncRU4MlUyWMWa90WgY-Q4gwAQxbywH870hprtd4lhczbkq3USNiB06Oag1WOH9smdL_Ws6fSJ0_3Bp9thSs-nYCYl0V2eEoRYdD5_k8MLpYo78UZfzaGFL1KcSpiKEEHDNVLiuJaSRxvNicGaQB1WTJ-OfQbtW90_C6KM6w9sE1qpESwMOSTPETqNN4TWPXDMZLmkBS-24AxR-hKuh7vDG07M-0MNo4J_WKwx-NamAD56pQqu5pxCtwHBFLDyUAG7UIZ59uGzAsf",
    alt: "Suplementos",
    variant: "soft",
    reverse: true,
  },
  {
    eyebrow: "Extractos Naturales",
    title: "Fitoterápicos",
    text: [
      "Unimos la sabiduría de la naturaleza con el rigor de la farmacia moderna mediante extractos de alta calidad.",
      "Preparaciones: tinturas madre, cápsulas de extractos secos y aceites esenciales para uso terapéutico.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5jDIUCo0P5XgNEU3Kn8OB_vfW0YQQ8QnIHcs_75DSgnCwdDo0P8ge-neJ0kkyNRxoyn8Uzuz_zNu1ThncbIatgJmPAiHIidam0gC6c-5HkCfyR9hwfPlTRlWj6XFzOsSaHsoZn9hrVs3VNWCu-CiyUOCJSsDsRTo0xjpgfoyrBTqm1WWrynO4kGUTlvMzZdVMgEAh77oxLFEINdLeUMMdVXjpsSDBYssp3HY9ENZlB-dtHnJdp3WF-HyM9QtN1h3gcnAZF0tYc5rh",
    alt: "Fitoterapia",
    variant: "light",
    reverse: false,
  },
  {
    eyebrow: "Cuidado Animal",
    title: "Veterinarios",
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