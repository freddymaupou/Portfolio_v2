'use client'

import "@/app/contact/style.css"
import { ChangeEvent, CSSProperties, MouseEvent, useState } from "react";

export default function Contact(){
    const [disableBtn, setDisableBtn] = useState<boolean>(true);
    const [textMail, setTextMail] = useState<string>("");
    const [textSubject, setTextSubject] = useState<string>("");
    const [textMessage, setTextMessage] = useState<string>("");
    const [btnDisable, setBtnDisable] = useState<CSSProperties>({cursor: "not-allowed"});

    function fillText(event: ChangeEvent<HTMLInputElement>, type: string){
        const txt = event.target.value;
        console.log(txt)

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

      /*   console.log("Mail : " + textMail);
        console.log("Suject : " + textSubject);
        console.log("Message : " + textMessage) */;

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
    const fetchDataFromApi = async (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/send",{
                method: "POST",
                headers:{
                    'Content-Type': "application/json", // application/x-www-form-urlencoded
                },
            });
            if(response){
                const data = await response.json();
                console.log(data)
            }
        } catch(error){
            console.log(error)
        } finally {
            console.log("done")
        }
    }
    //sendEmail(textMail, textSubject, textMessage);
    

    return (
    <>
    <form className="flex flex-col items-center">
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