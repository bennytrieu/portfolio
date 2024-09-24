import React from 'react'
import image1 from "../../src/assets/uhlogo.png"
import image2 from "../../src/assets/mckinleylogo.png"

const Education = () => {
    return (
        <div className='space-y-3' id="education">
            <h2 className='text-xl font-bold'>Education</h2>


            {/* Education */}

            <div className='flex items-center gap-5'>
                <img src={image1} alt='' className='w-14 border rounded-full'></img>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>University of Hawaii at Manoa</h3>
                        <span className='font-medium text-gray-500 text-sm'>Bachelor of Science in Computer Science</span>
                    </div>

                    <div className='text-gray-400'>August 2019 - May 2023</div>
                </div>
            </div>


            <div className='flex items-center gap-5'>
                <img src={image2} alt='' className='w-14 border rounded-full'></img>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>Mckinley High School</h3>
                        <span className='font-medium text-gray-500 text-sm'>Student</span>
                    </div>

                    <div className='text-gray-400'>August 2015 - May 2019</div>
                </div>
            </div>

        </div>
    )
}

export default Education