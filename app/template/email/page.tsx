export default function EmailTemplate(mailFrom: string, subject: string, message : string){
    return (
        <>
        <div>
            <h1>Email From :</h1>
            <p>{mailFrom}</p>
        </div>

        <div>
            <h1>Subject :</h1>
            <p>{subject}</p>
        </div>

        <div>
            <h1>Message :</h1>
            <p>{message}</p>
        </div>
        </>
    );
}