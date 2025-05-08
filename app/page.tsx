'use client'

//import Header from "./components/header/page";
import Image from "next/image";
import Projects from "./projects/page";
import Contact from "./contact/page";
import { useEffect, useRef, useState } from "react";

const links = [
  { 
      name: 'Accueil', href: '/'
  },
  { 
      name: 'Projets', href: '/projects'
  },
  {
      name: 'Contact', href: '/contact'
  },
];

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [isTop, setIsTop] = useState<boolean>(true);

  function handleRefs(index : number){
    switch(index){
      case 0:
        homeRef.current?.scrollIntoView({
          behavior: 'smooth'
        })
        break;
      case 1:
        projectsRef.current?.scrollIntoView({
          behavior: 'smooth'
        })
        break;
      case 2:
        contactRef.current?.scrollIntoView({
          behavior: 'smooth'
        })
        break;
        default:break;
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 0){
        setIsTop(false);
      } else{
        setIsTop(true);
      }
  })
  }, [])

  return (
    <>
    {!isTop && 
    <div className="fixed h-full w-full z-2 pointer-events-none">
        <button className="cursor-pointer absolute right-15 bottom-20 pointer-events-auto" onClick={() => {
          window.scroll({
            top: 0,
            behavior: 'smooth'
          })
        }}>Back To The Top</button>
    </div>
    }

    <div ref={homeRef}>
      {/* {}<Header refs={handleRefs}/> */}
      <div className="relative w-screen">
            <div className="flex justify-evenly items-center m-8">
                {links.map((link, index) => {
                    return (
                    <button
                        key={index}
                        onClick={() => handleRefs(index)}
                        className="m-auto w-1/3 cursor-pointer"
                    >
                        <p className="white text-center">{link.name}</p>
                    </button>
                    )
                })}
            </div>
        </div>
    </div>

    {/* Presentation */}
    <div className="flex flex-col justify-center items-center border-b-4 pt-15 pb-20">
      <Image src={"/photo_rond.png"} alt={"Photo de Freddy Maupou"} width={250} height={100}/>
      <h1 className="m-5 text-2xl">Freddy Maupou - <span className="italic">Développeur Full Stack</span></h1>
      <p className="w-1/2 text-justify text-last-center">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus culpa, esse eius maiores laborum eos tempora recusandae minima illo dolorem numquam voluptatibus
       dignissimos libero adipisci commodi vitae illum similique fugit.
      </p>
    </div>

    {/* Projects */}
    <div ref={projectsRef} className="border-b-4 pt-10 pb-20">
      <h1 className="text-4xl text-center mb-10">Projets</h1>
      <Projects/>
    </div>

    {/* Contact */}
    <div ref={contactRef} className="border-b-- pt-10 pb-20">
      <h1 className="m-5 text-4xl text-center">Contact</h1>
      <Contact/>
    </div>


    {/* Footer */}
    </>
  );
}
