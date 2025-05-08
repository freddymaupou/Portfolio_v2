export default function Picto(props : {techs : string[]}){
    return (
        <div className="absolute top-0 right-[-60]">
            <div className="ml-10">
                {props.techs.map((tech, idx) => {
                        return (
                            <p key={idx} className="border rounded-lg p-2 mb-2">{tech}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}
/* 
<div className="absolute top-0 right-[-60]">
            <div className="ml-10">
                {props.techs.map((tech, idx) => {
                        return (
                            <p key={idx} className="border rounded-lg p-2 mb-2">{tech}</p>
                        )
                    })
                }
            </div>
        </div> */