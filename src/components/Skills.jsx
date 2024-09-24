import React from 'react'

const Skills = () => {
    return (
        <div className='flex flex-col gap-5'>
            <h2 className='font-bold text-xl'>Coding Languages, Frameworks, and Skills</h2>

            <div className='flex gap-3 flex-wrap'>

                <div className='flex flex-col items-start justify-center gap-2'>
                    <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-black'>Unity</div>
                    <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-cyan-500 to-cyan-300'>Maya</div>
                    <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-purple-700 to-indigo-600'>C#</div>
                </div>

                <div className='flex flex-col items-start justify-center gap-2'>
                    <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-blue-500 to-yellow-500'>Python</div>
                    <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-blue-500 to-cyan-500'>Dash</div>
                    <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-pink-500 to-purple-500'>Plotly</div>
                </div>

                <div className='flex flex-col items-start justify-center gap-2'>
                    <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-red-500 to-orange-500'>HTML</div>
                    <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-sky-500 to-blue-500'>CSS</div>
                    <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-yellow-500 to-yellow-300'>Javascipt</div>
                </div>

                <div className='flex flex-col items-start justify-center gap-2'>
                    <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-blue-500 to-indigo-500'>React</div>
                    {/* <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-emerald-500 to-green-500'>NodeJs</div>
                    <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-blue-400 to-sky-500'>Tailwind CSS</div> */}
                </div>

            </div>
        </div>
    )
}

export default Skills