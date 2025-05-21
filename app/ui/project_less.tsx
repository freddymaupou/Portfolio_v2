import Image from "next/image"
import Picto from "./picto_tech"
import ProjectMore from "./project_more"
import { useState } from "react"
import { Project } from "../projects/page";

export default function ProjectLess(props: {projectID: Project}){
    const [isShowMore, setIsShowMore] = useState<boolean>(false);
    const [isHovering, setIsHovering] = useState<boolean>(false);

    function handleClick(){
        setIsShowMore(!isShowMore);
    }

    return (
        <>
            {props.projectID.id % 2 !== 0 &&
                <ProjectMore isShow={isShowMore} id={props.projectID.id} title={props.projectID.title} details={props.projectID.details} tasks={props.projectID.tasks} projLink={props.projectID.extLink} showLess={handleClick} />
            }
            <div className="flex justify-evenly items-center flex-1/2 flex-col mt-6 h-[400]">
                <div className="mx-6">
                    <div className="flex justify-between items-start">
                        <div className="flex-1/2 w-full h-full relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                            <Image className="images" style={isHovering ? {opacity: "30%"} : {opacity: "100%"}} src={props.projectID.srcImg} alt={"Oui"} width={1920} height={1080}/>
                            {isHovering &&
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-4">
                                <p className="text-justify text-last-center ">{props.projectID.pitch}</p>
                                <div className={isShowMore ? "hidden" : "flex items-end justify-between flex-row"}>
                                    <div></div>
                                    <button className="cursor-pointer" onClick={() => handleClick()}>
                                        <Image src={"/more.png"} alt={"Afficher plus d'informations"} width={40} height={40} />
                                    </button>                
                                </div>
                            </div>
                            }
                        </div>
                        <Picto techs={props.projectID.techs}/>
                    </div>
                </div>
            </div>
            {props.projectID.id % 2 === 0 &&
                <ProjectMore isShow={isShowMore} id={props.projectID.id} title={props.projectID.title} details={props.projectID.details} tasks={props.projectID.tasks} projLink={props.projectID.extLink} showLess={handleClick} />
            }
        </>
    )
}