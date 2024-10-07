import Link from "next/link";

const Button = ({ text }) => {


  return (

    <Link href={'/schedule'}>
      <button
      className="text-center px-4 py-2 min-w-60 md:px-6 md:py-3 text-lg md:text-2xl leading-10 font-extrabold rounded-sm shadow-sm text-white bg-celestePrincipal hover:bg-celesteSecundario border-[1px] border-[rgba(0,0,0,0.13)] transition duration-150 ease-in-out"
    >
      {text}
    </button>
    </Link>


  );
};

export default Button;
