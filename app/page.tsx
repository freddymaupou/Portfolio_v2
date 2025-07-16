'use client'

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
        <button className="cursor-pointer absolute right-15 bottom-20 pointer-events-auto p-3 border rounded-2xl" onClick={() => {
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
                        className="cursor-pointer"
                    >
                        <div className="white text-center text-4xl hover:*:border-b-3 hover:*:animate-[underlineAnim_0.3s_ease-in]">{link.name}
                          <div className="h-[3px]"></div>
                        </div>
                    </button>
                    )
                })}
            </div>
                  <a href="/CV_FreddyMaupou.pdf" target="_blank" rel="noopener noreferrer" className="text-center absolute top-0 right-25">
                    <Image src="/download.png" alt="télécharger le CV" width={40} height={40}/>
                    CV
                  </a>
        </div>
    </div>

    {/* Presentation */}
    <div className="flex flex-col justify-center items-center border-b-4 pt-15 pb-20">
      <Image src={"/photo_rond.png"} alt={"Photo de Freddy Maupou"} width={250} height={100}/>
      <h1 className="m-5 text-2xl">Freddy Maupou - <span className="italic">Développeur Full Stack</span></h1>
      <p className="w-1/2 text-justify text-last-center">
      Passionné par la programmation depuis quelques années déjà, j&apos;ai obtenu un Bac +3 en Programmation Gameplay dans le domaine des Jeux Vidéo. Aujourd&apos;hui, je me reconvertis 
      en tant que Développeur Full Stack et je suis prêt à collaborer avec vous et découvrir les challenges que nous aborderons ensemble !
      </p>
    </div>

    {/* Projects */}
    <div ref={projectsRef} className="border-b-4 pt-10 pb-20">
      <h1 className="text-4xl text-center mb-10">Projets</h1>
      <h2 className="px-50 text-center text-last-center">Ci-dessous, vous trouverez mes projets en Jeux Vidéo créés en équipe durant ces dernières années. 
      Tous ces projets sont téléchargeables et jouables via la plateforme Itch.io.<br/>
      Bonnes découvertes et amusez-vous bien !</h2>
      <Projects/>
    </div>

    {/* Contact */}
    <div ref={contactRef} className="border-b-- pt-10 pb-20">
      <h1 className="m-5 text-4xl text-center">Contact</h1>
      <h2 className="px-50 text-center text-last-center">Besoin d&apos;aide pour un projet ? Vous souhaitez collaborer avec moi ? Ou alors que nous nous rencontrions pour discuter 
        d&apos; un poste chez vous ?<br/>
        Je vous invite alors à remplir ce formulaire de contact ci-dessous et je vous recontacterai dès que possible !<br/>
        Au plaisir de travailler avec vous !
      </h2>
      <Contact/>
    </div>


    {/* Footer */}
    </>
  );
}
