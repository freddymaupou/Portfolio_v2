'use client'

import Header from "./components/header/page";
import Image from "next/image";
import Projects from "./projects/page";
import Contact from "./contact/page";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [isTop, setIsTop] = useState<boolean>(true);

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
      <Header refs={[homeRef, projectsRef, contactRef]}/>
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
