'use server';

import { Resend } from "resend";
import { EmailTemplate }from "@/components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY);
const myMail = process.env.MY_MAIL || [];

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: myMail,
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({data});
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

/* export async function GET() {
    console.log("GET")
} */

/* export async function POST(request: Request, res: Response) {
    
//export const sendEmail  = async (mail : string, subject : string, message : string) => {
    try {
        console.log("in try")

        const {email, userFN} = await request.json();

        const {data, error} = await resend.emails.send({
            to: email, //myMail, // list of receivers
            from: "'Nouvelle demande de contact !' <onboarding@resend.dev>", // dev adress => will work once deployed?
            subject: "Quelqu'un me contacte !", // Subject line
            react: EmailTemplate(email, userFN, "message"),//EmailTemplate(mail, subject, message), // html body or React 
        });

        if(error){
            console.log("error 1")
            return Response.json({error}, {status : 500});
        }

        console.log("good")
        return Response.json({message: "Email sent successfully"});
    } catch (err){
        console.log("error 2")
        return Response.json({err}, {status: 500});
    }
} */