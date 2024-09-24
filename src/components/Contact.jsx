import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col items-center justify-center ga-3 space-y-6 p-16' id="contact">
            <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl text-center'>
                <span className='bg-gradient-to-r from-purple-500 to to-blue-500 bg-clip-text text-transparent'>
                    Contact info
                </span>
            </h1>

            <p className='text-gray-500 font-serif text-lg text-center'>
                <ul>
                    Phone number: 808-255-5818
                </ul>
                <ul>
                    Email: trieubenny67@gmail.com
                </ul>
            </p>

            {/* <button className='bg-black rounded-lg px-5 py-3 text-white font-bold text-lg hover:-translate-y-3 transition-all duration-300 border-2 hover:bg-white hover:border-black hover:text-black'>Contact Me</button> */}
        </div>
    )
}

export default Contact