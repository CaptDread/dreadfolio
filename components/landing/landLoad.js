import { useState } from "react"


export default function LandingLoad(){
    const [isloading, setIsLoading] = useState();

    const loadFunction = () => {
        const load = setTimeout(() => {
            const loadSec = document.querySelector('.section_load')
            const gifSrc = document.querySelector('.loadingGif')
            if(loadSec.attributes.class.value != 'section_load hidden'){
                // setIsLoading(!isloading)
                gifSrc.src = '/logoOpen.png'
                gifSrc.classList.remove('w-fit')
                gifSrc.classList.remove('-mt-4')
                gifSrc.classList.remove('2xl:h-5/6')
                gifSrc.classList.add("w-6/12")
                gifSrc.classList.add("-mt-44")
                gifSrc.classList.add("sm:-mt-36")
                gifSrc.classList.add("md:w-6/12")
                gifSrc.classList.add("md:-mt-28")
                gifSrc.classList.add("lg:w-1/4")
                gifSrc.classList.add("lg:-mt-28")
                gifSrc.classList.add("xl:w-60")
                gifSrc.classList.add("xl:-mt-44")
                gsap.to('.section_load', {opacity:0, duration: 7, delay: 3.5, onComplete(){
                    setIsLoading(!isloading)
                }})
            }
            clearTimeout(load);
        }, 8500);
    }

    if(typeof window !== 'undefined'){
       loadFunction();
    }

    return(
        <>
            <section className={isloading? 'section_load hidden' : "section_load z-40 h-screen w-screen fixed top-0"}>
                <figure className="h-screen w-screen bg-black flex items-center justify-center w-fit">
                    <img src={'/landingLoad.gif'} className="loadingGif -mt-4 w-fit 2xl:h-5/6"/>
                </figure>
            </section>
        </>
    )
}