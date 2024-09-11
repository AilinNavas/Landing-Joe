import Accordion from "./General/Accodion"
import Button from "./General/Button";

const faqItems = [
  {
    question: 'What makes this service uniquely suited for dental practices?',
    answer: 'Our approach is specifically tailored to the needs of dental practices. Unlike one-size-fits-all marketing solutions, we focus on local SEO, reputation management, and content that resonates with patients seeking dental care. Our proven strategies are designed to attract more patients while keeping costs manageable, as evidenced by our work with clients like Southside Endodontics, where we achieved a 550% increase in Google appearances.',
  },
  {
    question: 'How quickly can I expect to see results?',
    answer: "Results can vary depending on your practice's current online presence and competition in your area. However, as seen with Southside Endodontics, significant improvements in search rankings and patient inquiries can happen within a couple of months.",
  },
  {
    question: 'Do I need to have technical knowledge to implement this strategy? ',
    answer: 'No technical knowledge is required. Our team handles all the technical aspects, from website optimization to reputation management, ensuring your practice gets the visibility it deserves without adding more to your workload.',
  },
  {
    question: 'How does the Google Business Profile optimization work? ',
    answer: ' We optimize your Google Business Profile to ensure it appears in local search results, especially for high-intent searches like “dentist near me” or “dental implants 76106”. This includes enhancing your profile with relevant keywords, accurate information, and a consistent flow of positive reviews, which helps attract more patients.',
  },
  {
    question: 'What kind of content is created for my practice? ',
    answer: ' We produce tailored content that resonates with your local community, including informative blog posts, engaging social media updates, and responses to common patient questions. This content not only positions you as an authority but also drives patient engagement and trust.',
  },
  {
    question: 'Can I track the performance of this marketing strategy? ',
    answer: 'Yes, we provide comprehensive performance reports each month. These reports include your website’s ranking on Google, your Google Business Profile’s visibility, and a comparison with competitors, allowing you to see the tangible impact of our efforts.',
  },
  {
    question: 'What if I already have a marketing strategy in place? ',
    answer: 'Our approach is designed to complement and enhance your existing marketing efforts. We focus on areas that may not have been fully optimized, such as local SEO and reputation management, to ensure you’re capturing as many potential patients as possible.',
  },
  {
    question: 'Is there a long-term commitment required? ',
    answer: 'No long-term commitment is necessary. We offer flexibility in our services, allowing you to see the results and decide if you want to continue based on the improvements you observe in your practice’s patient flow and online presence.',
  },
  {
    question: 'How do I get started?  ',
    answer: "Getting started is easy! Simply request your free personalized insights through our landing page, and we’ll begin analyzing your current online presence and providing recommendations tailored to your practice's needs.",
  },
];

const Faqs = () => {
  return (
    <section className="bg-fondoPrincipal py-10 md:py-16 ">
      <div className='max-w-7xl px-6 mx-auto lg:px-0 lg:max-w-5xl pb-16'>
      <h2 className="font-extrabold text-center mb-8 text-azulTitulo  text-2xl md:text-3xl lg:text-4xl">FAQs</h2>
      <Accordion items={faqItems} />
    </div>
      <div className='text-center pt-4 md:pt-10 space-y-2'>
        <Button text={'Boost My Practice Today'} />
        <p className='text-grisTexto'>Get personalized insights • It’s free</p>
        </div>
  </section >
  )
}

export default Faqs