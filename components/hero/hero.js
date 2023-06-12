import { useState } from "react";


export default function Hero(){

    const [titleIsOpen, setTitleIsOpen] = useState();
    const [bioIsOpen, setBioIsOpen] = useState();
    

    const myExes = () => {
        // console.log(`got here`)
        if(typeof window !== 'undefined'){
            setInterval(() => {
                const amount = Math.floor(Math.random() * 13- -5)
                // for(let a = 0; a < amount; a++){
                // }
                exMark();
            }, 130);
        }
    }
    var height = 0
    var pos = 0
    var exState = false
    const exMark = () => {
        const container = document.querySelector('.moving1')
        pos = Math.floor(Math.random() + 100 ) 
        const exbox = document.createElement('div')
        const xl = document.createElement('div')
        const xr = document.createElement('div')

        exbox.setAttribute('class', `exMark flex absolute z-0 justify-center items-center w-20 h-20 duration-666`)
        xl.setAttribute('class', 'bg-black rotate-45 w-full h-1/6 relative left-25')
        xr.setAttribute('class', 'bg-black -rotate-45 w-full h-1/6 relative right-25')
        exbox.append(xl, xr)
        container.append(exbox)

        exbox.style.top = `${height}%`
        exbox.style.left = `${pos}%`
        if(height >= 90 && exState == true){
            height = 0
            exState = false
        } else if(height >= 90 && exState == false){
            height = -5
            exState = true
        } else{
            height = height + 10
        }
        setTimeout(() => {
            exbox.style.left = "-13%"
        }, 100);
        const spinBreak = Math.floor(Math.random() * 100)
        if(spinBreak > 98){
            setTimeout(() => {
                exbox.style.transform = 'rotate(720deg)'
            }, 1000);
        }
        setTimeout(() => {
            container.removeChild(exbox)
        }, 13000);
    }

    const triggerPulse = () =>{
        console.log(`Hovering`)
        document.querySelector('.dread_logo-link').classList.add('ds-pulse')
        document.querySelector('.dread_logo-img').src = '/logoClose.png'
    }
    const endPulse = () => {
        console.log(`Mouse Out`)
        document.querySelector('.dread_logo-link').classList.remove('ds-pulse')
        document.querySelector('.dread_logo-img').src = '/logoOpen.png'
    }


    return(
        <>
            <section className="hero-section w-screen h-69v flex flex-col items-center mb-16 sm:mb-4">
                <div className="main_bkgd-container z-0 fixed flex top-1/20">
                    <div className="main_bkgd moving1 z-0 w-screen h-screen">
                            {myExes()}
                    </div>
                </div>
                <div className="title_header-bkgd z-20 relative bg-purple-600 h-fit w-fit flex justify-center mt-4 rounded">
                    <div className="title_header bg-black flex justify-center h-fit w-fit px-8 py-4 rounded">
                        <h1 className="text-4xl font-lob">Domingo Dunlap</h1>
                    </div>
                </div>
                <div className="dread_logo-link relative z-30 w-fit h-fit rounded-full mt-4">
                    <figure className="flex flex-col w-fit h-fit rounded-full items-center justify-center w-4/5">
                        <img src={"/ouroborusRing.png"} className="z-10 w-69p -mr-6p sm:w-6/12 relative rounded-full"/>
                        <img src={"/logoOpen.png"} onMouseEnter={triggerPulse} onMouseOut={endPulse} className="dread_logo-img w-3/6 -mb-10/100 absolute z-20 lg:w-2/6"/>
                        <button className="w-2/5 sm:w-1/3 bg-white h-3/4 absolute rounded-full -mb-10/100 border-2 border-black"></button>
                    </figure>
                </div>
                <div className='dread_title-bkgd rounded bg-purple-600 relative w-fit mt-8 sm:mt-16'>
                    <div className="dread_title-container bg-black flex flex-col rounded items-center py-2 px-14 w-max">
                        <h3 className="text-4xl font-lob">Creative Technologist</h3>
                        <p className="text-2xl font-lob"><span className="font-rob ts-5-purple">~</span>Savy?</p>
                    </div>
                </div>
                <div className="flex gap-8 mt-4 ts-5-purple">
                    <a className="resume_container resume_link-color bg-black border-2 border-white ds-5-purple px-8 flex flex-col items-center hover:ds-pulse z-10" href={"/DomingoResume.pdf"} download>
                        <h4 className="font-lob text-2xl">Resume</h4>
                        <span>(Color)</span>
                    </a>
                    <a className="resume_container resume_link-bw bg-black border-2 border-white ds-5-purple px-8 flex flex-col items-center hover:ds-pulse rounded z-10" href={"/DomingoResume"} download>
                        <h4 className="font-lob text-2xl">Resume</h4>
                        <span>(B/W)</span>
                    </a>
                </div>
                <div className="hidden absolute w-1/5 h-2/6 right-7/100 top-1/4 rounded-full overflow-hidden border-2 border-white ds-5-purple 2xl:flex items-center ds-5-purple hover:ds-pulse bg-black">
                    <figure className="rounded-full relative  flex items-center ds-5-purple">
                        <img src={'/devImg.png'} className="ds-5-white"></img>
                    </figure>
                </div>
                <div className="dread_bio-bkgd hidden left-2/100 w-1/3 2xl:flex bg-purple-600 absolute mt-4 rounded">
                    <div className="dread_bio-container bg-black w-full px-8 py-6 rounded">
                        <h3 className="dread_bio-head text-4xl capitalize mb-4 ts-5-purple font-lob text-center"> a sip of dread tea!</h3>
                        <article className="dread_bio-content">
                            <p className="text-xl indent-8">I may look like a pirate but I've always been, and always will be, an Artificer. Born with a soldering iron in one hand, and a percision tool kit in the other, I guess you can say that Creative Technology was the only field I'd ever feel truly at home in.</p>
                            <p className="text-xl indent-8">Coding, programming, and creating complex yet amazing projects, both virtual and physical, is all I want from life. Although this portfolio only contains a small fraction of the many creations I've done, excluding my van conversions, e-bike builds, and of course my custom wearables, I am still positive you'll see something that makes you say "Whoa, that's cool."</p>
                            <p className="text-xl indent-8">I have a hunger for knowledge, and a clear understanding of how to sate it. All I ask, is you allow me to build something cool, with you! ~ Savy?</p>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}