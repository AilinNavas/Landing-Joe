'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (

<div className="">
<button
  onClick={() => setIsOpen(!isOpen)}
  className={`w-full text-left p-4 border-t-2 border-t-celestePrincipal rounded-md  focus:outline-none bg-white`}
>
  <h3 className="text-lg font-semibold flex justify-between text-azulTitulo lg:text-xl">{question}
  <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 ml-1"
      aria-hidden="true"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </motion.svg>
      </h3>
</button>
<motion.div
  initial={false}
  animate={{ height: isOpen ? 'auto' : 0 }}
  className="overflow-hidden"
>
  <div className="p-4 text-base leading-6 lg:text-lg text-grisTexto bg-white ">
    <p> {answer}</p>
  </div>
</motion.div>
</div>
);
};

const Accordion = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Accordion;
