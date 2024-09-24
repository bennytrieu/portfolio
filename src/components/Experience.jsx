import React from 'react'
import logo1 from "../../src/assets/1.png"
import logo2 from "../../src/assets/2.png"
import logo3 from "../../src/assets/3.png"
import logo4 from "../../src/assets/4.png"
import logo5 from "../../src/assets/5.png"

const Experience = () => {
    return (
        <div className='space-y-3'>
            <h2 className='text-xl font-bold'>Work Experience</h2>


            {/* Work experiences */}

            <div className='flex items-center gap-5'>
                <img src={logo1} alt='' className='w-14 border rounded-full'></img>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>Company 1</h3>
                        <span className='font-medium text-gray-500 text-sm'>Web Development Internship</span>
                    </div>

                    <div className='text-gray-400'>May 2021 - August 2024</div>
                </div>
            </div>


            <div className='flex items-center gap-5'>
                <img src={logo1} alt='' className='w-14 border rounded-full'></img>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>Company 1</h3>
                        <span className='font-medium text-gray-500 text-sm'>Web Development Internship</span>
                    </div>

                    <div className='text-gray-400'>May 2021 - August 2024</div>
                </div>
            </div>


            <div className='flex items-center gap-5'>
                <img src={logo1} alt='' className='w-14 border rounded-full'></img>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>Company 1</h3>
                        <span className='font-medium text-gray-500 text-sm'>Web Development Internship</span>
                    </div>

                    <div className='text-gray-400'>May 2021 - August 2024</div>
                </div>
            </div>


            <div className='flex items-center gap-5'>
                <img src={logo1} alt='' className='w-14 border rounded-full'></img>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>Company 1</h3>
                        <span className='font-medium text-gray-500 text-sm'>Web Development Internship</span>
                    </div>

                    <div className='text-gray-400'>May 2021 - August 2024</div>
                </div>
            </div>

        </div>
    )
}

export default Experience