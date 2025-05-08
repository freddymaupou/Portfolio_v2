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
            <div className="flex justify-evenly items-center flex-1/2 flex-col mt-6">
                <div className="relative mx-6">
                    <div className="flex-1/2 w-full h-full" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                        <Image className="images" style={isHovering ? {opacity: "30%"} : {opacity: "100%"}} src={props.projectID.srcImg} alt={"Oui"} width={1920} height={1080}/>
                        {isHovering &&
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <p className="text-justify text-last-center">{props.projectID.pitch}</p>
                            <div className="flex items-end justify-between flex-row">
                                <div></div>
                                <button className="cursor-pointer text-2xl rounded-[50%] border border-white" onClick={() => handleClick()}>+</button>                
                            </div>
                        </div>
                        }
                    </div>
                    <Picto techs={["Unity", "C#"]}/>
                </div>
            </div>
            <ProjectMore isShow={isShowMore} title={props.projectID.title} details={props.projectID.details} tasks={props.projectID.tasks} projLink={props.projectID.extLink} showLess={handleClick} />
        </>
    )
}