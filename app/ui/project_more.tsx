import Image from "next/image";
import "@/app/projects/style.css"
import { useEffect, useState } from "react";

export default function ProjectMore(props : {isShow: boolean, id: number, title: string, details: string, tasks: string[], projLink: string, showLess: () => void}){
    const [defaultStyle, setDefaultStyle] = useState<string>("flex flex-col justify-between mx-6 h-[500]");

    useEffect(() => {
        if(props.id % 2 === 0){
            if(props.isShow){
                setDefaultStyle("flex flex-col justify-between mx-6 h-[500] fade-in-right");
            } else {
                setDefaultStyle("flex flex-col justify-between mx-6 h-[500] fade-out-left");
            }
        } else{
            if(props.isShow){
                setDefaultStyle("flex flex-col justify-between mx-6 h-[500] fade-in-left");
            } else {
                setDefaultStyle("flex flex-col justify-between mx-6 h-[500] fade-out-right");
            }
        }
    }, [props.id, props.isShow])

    return (
        <div className={props.isShow ? "flex-1/2" : ""}>
            <div className={defaultStyle}>
            <div>
                <h1 className="text-4xl">{props.title}</h1>
                <h2 className="italic">{props.details}</h2><br />
            </div>
            <ul className="mb-8">
                {
                    props.tasks.map((task, index) => (
                        <li key={index}>- {task}</li>
                    ))
                }
            </ul>

            <div className="flex justify-between items-center mr-10">
                <a href={props.projLink} target="_blank"><Image src={"/logo_itchio.svg"} alt={"Lien vers le jeu Olympos Drama"} width={200} height={100}/></a>
                
                <button className="cursor-pointer" onClick={() => props.showLess()}>
                    <Image src={"/minus.png"} alt={"Afficher moins d'informations"} width={100} height={100}/>
                </button>
            </div>
        </div>
        
        </div>
    );
}