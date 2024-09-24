import React from 'react'
import project1 from "../../src/assets/project-1.png"
import project2 from "../../src/assets/project-2.png"
import project3 from "../../src/assets/project-3.png"
import project4 from "../../src/assets/project-4.jpg"

const Projects = () => {
    return (
        <div className='space-y-5 pt-10' id="projects">
            <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl text-center'>
                <span>
                    Projects
                </span>
            </h1>

            <h3 className='font-semibold text-gray-500 text-xl text-center'>
                Here are all the projects that I have worked on.
            </h3>

            {/* project displays */}
            <div className="flex flex-col items-center justify-center space-y-5">
                <div className='sm:flex gap-5 space-y-5 sm:space-y-0'>

                    <div className='flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1'>
                        {/* <img src={project1} className='w-[300px] rounded-md' alt="" /> */}
                        <h3 className='text-lg font-bold'>Procrastidreamer</h3>
                        <span className='text-sm text-gray-500 font-semibold'>January 2023 - May 2023</span>
                        <p className='text-xs text-gray-400 font-medium max-w-64'>
                            A video game project for my design class, coded in C# using Unity.
                            I contributed by creating art assets in Maya, sourcing music and sound effects, and coding game mechanics, including the boss mechanic, character movement, and UI elements like health and dash cooldown.
                            Additionally, I led meetings to ensure timely progress.
                        </p>

                        <div className="flex gap-3 text-xs">
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-black'>Unity</div>
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-cyan-500 to-cyan-300'>Maya</div>
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-purple-700 to-indigo-600'>C#</div>
                        </div>
                    </div>

                    <div className='flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1'>
                        {/* <img src={project1} className='w-[300px] rounded-md' alt="" /> */}
                        <h3 className='text-lg font-bold'>God Hands VR Project</h3>
                        <span className='text-sm text-gray-500 font-semibold'>November 2022 - December 2022</span>
                        <p className='text-xs text-gray-400 font-medium max-w-64'>
                            The final project for my VR/AR class involved creating an experience in Unity.
                            Along with two groupmates, we developed a video game where players control two hands with VR controllers to stop enemies from reaching their side of the map in a series of waves.
                            I contributed by programming the mechanics for shooting bullets from the hands, spawning enemies in waves, and implementing the score display for the game.
                        </p>

                        <div className="flex gap-3 text-xs">
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-black'>Unity</div>
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-purple-700 to-indigo-600'>C#</div>
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-emerald-500 to-cyan-500'>VR/AR</div>
                        </div>
                    </div>

                    <div className='flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1'>
                        {/* <img src={project1} className='w-[300px] rounded-md' alt="" /> */}
                        <h3 className='text-lg font-bold'>Pass-bots</h3>
                        <span className='text-sm text-gray-500 font-semibold'>January 2023 - May 2023</span>
                        <p className='text-xs text-gray-400 font-medium max-w-64'>
                            A password management website created with HTML, JavaScript, and CSS for my software quality assurance class.
                            I contributed by implementing the home page, the password deletion function, and writing test cases for both the home page and the deletion feature.
                        </p>

                        <div className="flex gap-3 text-xs">
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-red-500 to-orange-500'>HTML</div>
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-sky-500 to-blue-500'>CSS</div>
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-yellow-500 to-yellow-300'>Javascipt</div>
                        </div>
                    </div>


                </div>




            </div>

            <div className="flex flex-col items-center justify-center space-y-5">
                <div className='sm:flex gap-5 space-y-5 sm:space-y-0'>

                    <div className='flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1'>
                        {/* <img src={project1} className='w-[300px] rounded-md' alt="" /> */}
                        <h3 className='text-lg font-bold'>Campus Clearout Center</h3>
                        <span className='text-sm text-gray-500 font-semibold'>March 2021 - May 2021</span>
                        <p className='text-xs text-gray-400 font-medium max-w-64'>
                            The final project for my software development class, completed with three groupmates, involved creating a website for UH community members to give away unwanted items while searching for items offered by others.
                            I worked on the user and admin home pages, the report feature, the report list for admins, the delete function for both users and admins, the list-all feature for users, and the corresponding test cases for the functionalities I developed.
                        </p>

                        <div className="flex gap-3 text-xs">
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-red-500 to-orange-500'>HTML</div>
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-sky-500 to-blue-500'>CSS</div>
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-yellow-500 to-yellow-300'>Javascipt</div>
                        </div>

                        <div className="flex gap-3 text-xs">
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-blue-500 to-indigo-500'>React</div>
                        </div>
                    </div>

                    <div className='flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1'>
                        {/* <img src={project1} className='w-[300px] rounded-md' alt="" /> */}
                        <h3 className='text-lg font-bold'>Developing Web-server Features for the Deep Learning Team</h3>
                        <span className='text-sm text-gray-500 font-semibold'>June 2022 - August 2022</span>
                        <p className='text-xs text-gray-400 font-medium max-w-64'>
                            I contributed to the web server that monitors GPU status for the deep learning team at KBR.
                            We used Dash (a Python framework for creating dashboards) and Plotly (the graphic engine of Dash) for development.
                            I resolved an issue where users were not appearing on the web server despite using the GPUs.
                            Additionally, I implemented graphs using Plotly and Dash to enhance the display of disk, memory, and CPU usage.
                            I also assisted in redesigning the layout to accommodate the size of the graphs on the web server display.
                        </p>

                        <div className="flex gap-3 text-xs">
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-blue-500 to-yellow-500'>Python</div>
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-blue-500 to-cyan-500'>Dash</div>
                            <div className='py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-pink-500 to-purple-500'>Plotly</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Projects