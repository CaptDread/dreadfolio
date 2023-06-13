
export default function Skills(data){
    // const foundSkills = JSON.parse(data)
    console.log("Skills Found: ", data.props.length)

    


    return(
        <>
            {/* <div className="hero-fade relative opacity h-6v bg-gradient-to-b from-transparent to-black"></div> */}
            <section className="skill-section relative h-fit flex flex-col items-center bg-black mx-16-large py-16 sideShadow">
                <div className="monitor-container1 monitor-bg">
                    <div className="monitor">
                        <figure></figure>
                    </div>
                </div>
                <div className="monitor-container2 monitor-bg">
                    <div className="monitor">
                        <figure></figure>
                    </div>
                </div>
                <div className="monitor-container3 monitor-bg">
                    <div className="monitor">
                        <figure></figure>
                    </div>
                </div>
                <div className="monitor-container4 monitor-bg">
                    <div className="monitor">
                        <figure></figure>
                    </div>
                </div>
                <div className="monitor-container5 monitor-bg">
                    <div className="monitor">
                        <figure></figure>
                    </div>
                </div>
                <div className="monitor-container6 monitor-bg">
                    <div className="monitor">
                        <figure></figure>
                    </div>
                </div>
                <div className="monitor-container7 monitor-bg">
                    <div className="monitor">
                        <figure></figure>
                    </div>
                </div>
            </section>
        </>
    )
}