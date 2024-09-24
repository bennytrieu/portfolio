import React from 'react'
import logo1 from "../../src/assets/eworld.png"
import logo2 from "../../src/assets/uhlogo.png"
import logo3 from "../../src/assets/akamai.png"
import logo4 from "../../src/assets/mcdonalds.png"

const Experience = () => {
    return (
        <div className='space-y-3'>
            <h2 className='text-xl font-bold'>Work Experience</h2>


            {/* Work experiences */}

            <div className='flex items-center gap-5'>
                <img src={logo1} alt='' className='w-14 border rounded-full'></img>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>eWorld Enterprise Solutions</h3>
                        <span className='font-medium text-gray-500 text-sm'>Technical Support Analyst</span>
                    </div>

                    <div className='text-gray-400'>September 2023 - July 2024</div>
                </div>
            </div>


            <div className='flex items-center gap-5'>
                <img src={logo2} alt='' className='w-14 border rounded-full'></img>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>Thomas Hale Hamilton Library</h3>
                        <span className='font-medium text-gray-500 text-sm'>DNS Computer & Network Support Specialist</span>
                    </div>

                    <div className='text-gray-400'>August 2021 - May 2023</div>
                </div>
            </div>


            <div className='flex items-center gap-5'>
                <img src={logo3} alt='' className='w-14 border rounded-full'></img>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>Akamai Internship Program - KBR</h3>
                        <span className='font-medium text-gray-500 text-sm'>Technical Intern</span>
                    </div>

                    <div className='text-gray-400'>June 2022 - August 2022</div>
                </div>
            </div>


            <div className='flex items-center gap-5'>
                <img src={logo4} alt='' className='w-14 border rounded-full'></img>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>Mcdonald's</h3>
                        <span className='font-medium text-gray-500 text-sm'>Crew Member</span>
                    </div>

                    <div className='text-gray-400'>August 2019 - October 2019</div>
                </div>
            </div>

        </div>
    )
}

export default Experience