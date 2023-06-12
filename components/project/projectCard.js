import React from 'react';
import convertHtmlToReact from '@hedgedoc/html-to-react';

export default function ProjectCard(data){
    const project = data.data
    const edit = convertHtmlToReact(project.logo)
    // console.log(data.key)


    return(
        <>
            <div className="project_card-container flex mb-4 items-center">
                <h4 className='hidden-large text-3xl mb-3 project-title ts-5-purple'>{project.title}</h4>
                <a href="" className="w-fit h-fit rounded-full pl-1 flex">
                    {/* <img className='absolute rounded-full h-60 wall-bg border-4 border-black' src='/whitebrickwall.jpg' />
                    <div className='absolute rounded-full h-60 w-60 project-bg'></div> */}
                    {edit}
                </a>
                <div className='projectDesc hidden-small sm:px-20 md:px-1 py-2 justify-between rounded-lg'>
                    <h4 className='hidden-small text-2xl project-title ts-5-purple'>{project.title}</h4>
                    <article className='my-4 text-m'>{project.desc}</article>
                    <p className='skillsUsed text-xl'>{project.skills}</p>
                </div>
            </div>
            <div className='glowLine-bg relative w-fit h-fit p-4 rounded-full mb-12'>
                <div className='glowLine relative ds-5-purple rounded w-52 md:w-96 h-1 bg-white'></div>
            </div>
        </>
    )
}