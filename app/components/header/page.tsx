'use client'
//import { RefObject } from "react";

// Depending on the size of the application, this would be stored in a database.
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

export default function Header(){
    return (
        <>
        <div className="relative w-screen">
            <div className="flex justify-evenly items-center m-8">
                {links.map((link, index) => {
                    return (
                    <button
                        key={index}
                        className="m-auto w-1/3 cursor-pointer"
                    >
                        <p className="white text-center">{link.name}</p>
                    </button>
                    )
                })}
            </div>
        </div>
        </>
    );
}