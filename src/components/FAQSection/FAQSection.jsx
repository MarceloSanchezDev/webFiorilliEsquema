import "./FAQSection.css";
import FAQItem from "./FAQItem";

export default function FAQSection() {
  const faqData = [
    {
      question: "¿Qué es una fórmula magistral?",
      answer:
        "Es un medicamento destinado a un paciente individualizado, preparado por un farmacéutico, o bajo su dirección, para cumplimentar exactamente una prescripción facultativa detallada de las sustancias medicinales que incluye, según las normas de correcta elaboración y control de calidad.",
    },
    {
      question: "¿Cuánto tiempo tarda el proceso de elaboración?",
      answer:
        "Generalmente, nuestras preparaciones están listas entre 24 y 48 horas hábiles. La precisión requiere tiempo, y cada fórmula se somete a estrictos controles de calidad antes de su entrega.",
    },
    {
      question: "¿Es necesaria una receta médica?",
      answer:
        "Sí, por ley y seguridad del paciente, todas las fórmulas magistrales requieren una prescripción médica original firmada por un facultativo colegiado.",
    },
    {
      question: "¿Cómo debo conservar mi preparado magistral?",
      answer:
        "Cada fórmula incluye instrucciones específicas en su etiqueta. Por lo general, deben mantenerse en un lugar fresco, seco y protegidos de la luz solar directa. Algunos preparados específicos pueden requerir refrigeración.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}
