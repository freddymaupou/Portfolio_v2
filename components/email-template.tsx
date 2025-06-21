import * as React from 'react';

interface EmailTemplateProps {
  mail: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({mail, subject, message}) => (
  <div>
    <h1>Mail : {mail}</h1>
    <h2>Subject : {subject}</h2>
    <p>Message : {message}</p>
  </div>
);