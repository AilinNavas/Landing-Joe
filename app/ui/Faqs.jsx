import Accordion from "./General/Accodion"

const faqItems = [
  {
    question: '¿Cómo funciona su servicio de diseño web?',
    answer: 'Ofrecemos un proceso de diseño web en cuatro etapas que incluye descubrimiento, planificación, revisión y entrega final. Trabajamos estrechamente con nuestros clientes para asegurarnos de que el producto final cumpla con sus expectativas.',
  },
  {
    question: '¿Cuánto tiempo lleva completar un proyecto?',
    answer: 'El tiempo de entrega depende del alcance del proyecto, pero generalmente completamos sitios web de tamaño mediano en 4-6 semanas.',
  },
  {
    question: '¿Ofrecen soporte después de la entrega?',
    answer: 'Sí, ofrecemos soporte continuo para todos los sitios web que desarrollamos, incluyendo actualizaciones y mantenimiento.',
  },
];

const Faqs = () => {
  return (
    <section className="bg-fondoPrincipal py-10 md:py-16 ">
      <div className='max-w-7xl px-6 mx-auto lg:px-0 lg:max-w-5xl pb-16'>
      <h2 className="font-extrabold text-center mb-8 text-azulTitulo  text-2xl md:text-3xl lg:text-4xl">FAQs</h2>
      <Accordion items={faqItems} />
    </div>
  </section >
  )
}

export default Faqs