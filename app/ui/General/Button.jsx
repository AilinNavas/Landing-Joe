import React from 'react'

const Button = ({ text }) => {
    return (
        <button
            className="text-center px-6 py-3 text-lg md:text-2xl leading-10 font-extrabold rounded-sm shadow-sm text-white bg-celestePrincipal hover:bg-celesteSecundario border-[1px] border-[rgba(0,0,0,0.13)] transition duration-150 ease-in-out"
        >
            {text}
        </button>
    )
}

export default Button