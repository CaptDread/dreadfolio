import { Inter } from 'next/font/google'
import Header from '../components/layout/head'
import Footer from '../components/layout/footer'
import connectMongo from "../utils/connectMongo"
import Hero from '../components/hero/hero'
import HeadBar from '@/components/layout/header'
import Projects from '@/components/project/projectSect'
import Project from '../models/projectModel'
import Skill from '@/models/skillModel'
import Skills from '@/components/skill/skillSect'
import LandingLoad from '@/components/landing/landLoad'


const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(){

  try{
    await connectMongo();
    
    const foundProjects = await Project.find();
    const foundSkills = await Skill.find();
    
    const props = {
      projects: JSON.stringify(foundProjects),
      skills: JSON.stringify(foundSkills)
    }

  
  
   return{
    props: props
   }
  } catch(err){
    console.log(`Caught Serverside Err:`)
    console.log(err)
    return;
  }
}


export default function Home(props) {
  const projects = JSON.parse(props.projects)
  const skills = JSON.parse(props.skills)

  return (
    <>
      <Header/>
      <HeadBar/>
      <LandingLoad/>
      <main className="overflow-hidden">
        <Hero/>
        <Projects props={projects}/>
        <Skills props={skills}/>
      </main>
      <Footer/>
    </>
  )
}
