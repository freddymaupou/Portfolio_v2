'use client'

import "@/app/contact/style.css"
import { ChangeEvent, CSSProperties, useState } from "react";

export default function Contact(){
    const [disableBtn, setDisableBtn] = useState<boolean>(true);
    const [textMail, setTextMail] = useState<string>("");
    const [textSubject, setTextSubject] = useState<string>("");
    const [textMessage, setTextMessage] = useState<string>("");
    const [btnDisable, setBtnDisable] = useState<CSSProperties>({cursor: "not-allowed"});

    function fillText(event: ChangeEvent<HTMLInputElement>, type: string){
        const txt = event.target.value;

        if(txt != ""){
            switch(type){
                case "Mail":
                    setTextMail(txt);
                break;
                case "Subject":
                    setTextSubject(txt);
                break;
                case "Message":
                    setTextMessage(txt);
                break;
                default:
                break;
            }
        } else {
            switch(type){
                case "Mail":
                    setTextMail("");
                break;
                case "Subject":
                    setTextSubject("");
                break;
                case "Message":
                    setTextMessage("");
                break;
                default:
                break;
            }
        }

        checkTexts();
    }

    function checkTexts(){
        if(textMail.length !== 0 && textSubject.length !== 0 && textMessage.length !== 0){
            setDisableBtn(false);
            setBtnDisable({cursor: "pointer"})
        } else{
            setDisableBtn(true);
            setBtnDisable({cursor: "not-allowed"})
        }
    }

    // put it in component server
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fetchDataFromApi = async (e: any) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.set("mail", textMail);
            formData.set("subject", textSubject);
            formData.set("message", textMessage);

            //console.log(formData)

            /* const response =  */
            await fetch("/api/send",{
                method: "POST",
                body: formData,
            }).then(res => res.json());

            //console.log('response from API:', response)
        } catch(error){
            console.log(error)
        } /* finally {
            console.log("sent")
        } */
    }
    

    return (
    <>
    <form id="contact_form" className="flex flex-col items-center">
        <div className="flex justify-between w-[300]">
            <label>
                E-mail: 
            </label>
            <input type="email" name="mail" id="input_mail" className="input_text" onChange={(e) => fillText(e, "Mail")} value={textMail} required/>
        </div>
        <div className="flex justify-between w-[300]">
            <label>
                Subject: 
            </label>
            <input type="text" name="subject" id="input_suject" className="input_text" onChange={(e) => fillText(e, "Subject")} value={textSubject} required/>
        </div>
        <div className="flex justify-between w-[300]">
            <label>
                Message: 
            </label>
            <input type="textarea" name="message" id="input_message" className="input_text" onChange={(e) => fillText(e, "Message")} value={textMessage} required/>
        </div>

        <button style={btnDisable} className="border rounded-md p-2 px-4 white"  type="submit" disabled={disableBtn} onClick={(e) => fetchDataFromApi(e)}>Envoyer</button>
    </form>
    </>
    );
}