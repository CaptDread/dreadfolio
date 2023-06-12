import ProjectCard from "./projectCard";

export default function Projects(data){
    // console.log(data.props)

    // const projectData = data.props

    return(
        <>
            {/* <div className="hero-fade relative opacity h-6v bg-gradient-to-b from-transparent to-black"></div> */}
            <section className="project-section relative h-fit  flex flex-col items-center bg-black mx-16-large py-16 sideShadow sm:mt-16">
                <h3 className="text-6xl text-center mb-6 project-title ts-5-purple">Projects</h3>
                <div className="w-3/4 h-1 bg-white rounded mb-10 ds-5-purple ds-pulse"></div>
                <ul className="bg-black sm:mx-16 md:mx-1 md:px-1 py-16 sideShadow flex flex-col items-center wall-bg">
                    {data.props.map((item, index) => <ProjectCard data={item} key={index}/>)}
                </ul>
            </section>
        </>
    )
}