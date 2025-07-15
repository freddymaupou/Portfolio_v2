'use client'

import "@/app/projects/style.css"
import ProjectLess from "../ui/project_less";

export type Project = {
    id: number,
    srcImg: string,
    extLink: string,
    title: string,
    pitch: string,
    details: string,
    techs: string[],
    year: number,
    tasks : string[]
}

const allP: Project[] = [
    {
        srcImg: "/static/the_frozen_barrel.jpg",
        extLink: "https://freddym.itch.io/the-frozen-barrel",
        title: "The Frozen Barrel - Lead Gameplay Programmer",
        details: "7 personnes - 1 mois",
        year: 2023,
        tasks: ["Système de dialogue", "Système de choix", "Système de traduction (FR et EN)", "Répartitions des tâches, gestion d'équipe"],
        pitch: "Enrole Hammond, an old adventurer converted into an innkeeper, who opened a tavern named The Frozen Barrel. Everyday, many adventurers come here to drink and share their stories, troubles and wishes... Help them find their destinies in a world full of unexpected events, you could change their lives!",
        techs: ["Unity", "C#"],
        id: 0
    },
    {
        srcImg: "/static/fill_it.png",
        extLink: "https://freddym.itch.io/fill-it",
        title: "Fill It! - Gameplay Programmer",
        details: "Solo - 1 semaine",
        year: 2023,
        tasks: ["Gameplay", "Gamefeel", "Animation"],
        pitch: "Drag and drop all the pieces into the grid in order to fill it completely!",
        techs: ["Unity", "C#"],
        id: 1
    },
    {
        srcImg: "/static/shovel_hell.jpg",
        extLink: "https://somegame94.itch.io/shovel-hell",
        title: "Shovel Hell - Lead Gameplay Programmer",
        details: "12 personnes - 4 mois",
        year: 2022,
        tasks: ["Système de quêtes", "IA des Pnjs (déplacements, gamefeel)", "Aptitudes du joueur (déterrer, porter)", "Système de score",
            "Gamefeel (sueur, vibrations, déplacements du joueur)", "Outils, gestion d’équipe, répartition des tâches, aide"],
        pitch: "An epidemic is affecting the entire region and killing every animals around. Of course, it is you and your team who must respond to funeral requests. But beware, customers are demanding and numerous.",
        techs: ["Unity", "C#"],
        id: 2
    },
    {
        srcImg: "/static/game_hatch.jpg",
        extLink: "https://xaltio.itch.io/game-hatch",
        title: "Game & Hatch - Gameplay Programmer",
        details: "8 personnes - 3 jours",
        year: 2022,
        tasks: ["Déplacements", "Input", "UI"],
        pitch: "Players will embody Shelldon, a hatching egg stuck in a cage. Unfortunately for him, the owner of the house has a rather bossy cat who doesn't like to share the house. Its goal is simple, to crush you ! You have only one thing to do : survive while waiting for the return of the owner.",
        techs: ["Unity", "C#"],
        id: 3
    },
    {
        srcImg: "/static/dont_mess_with_vampires.png",
        extLink: "https://somegame94.itch.io/dont-mess-with-vampire",
        title: "Don't Mess With Vampires - Gameplay Programmer",
        details: "9 personnes - 2 mois",
        year: 2022,
        tasks: ["Pièges, déplacements", "IA", "UI"],
        pitch: "After taking power by force and blood, a vampire, lord of his kingdom of Transylvania, suffers mutinies by the humans of the city. His goal is clear: to kill each assailant and rid his castle of these vermin. It's going to bleed!",
        techs: ["Unity", "Mobile", "C#"],
        id: 4
    },
    {
        srcImg: "/static/eva.jpg",
        extLink: "https://rpahel.itch.io/eva",
        title: "Eva - Gameplay Programmer",
        details: "4 personnes - 4 mois",
        year: 2022,
        tasks: ["Lancer un bonbon afin d'occuper les ennemis", "Lampe du joueur / déplacement", "Mort du joueur", "Sound Design", "Game Design",],
        pitch: "Enrole Eva trapped in an endless stairwell containing many doors trying to find her way home.",
        techs: ["Unity", "C#"],
        id: 5
    },
    {
        srcImg: "/static/olympos_drama.jpg",
        extLink: "https://frogat.itch.io/olympos-drama",
        title: "Olympos Drama - Gameplay Programmer",
        details: "12 personnes - 3 jours",
        year: 2022,
        tasks: ["Intégrer le contrôleur alternatif", "Mini-jeux : attraper les Game Objects, attaquer la ville", "Animation", "UI",],
        pitch: "`Odysseus left the island of Ithaca to join the war against the city of Troy...` Now begin a stage that has for ambition to summarize the tale of Odysseus during the Iliade; but with such a rich story, it's possible to make some mistakes here and there...",
        techs: ["Unity", "C#"],
        id: 6
    },
    {
        srcImg: "/static/ou_est_gil.jpg",
        extLink: "https://artyu.itch.io/ou-est-lig",
        title: "Où est Gil ? - Gameplay Programmer",
        details: "2 personnes - 2 mois",
        year: 2022,
        tasks: ["Système de vague", "Déplacement des Game Objects", "Scoring", "UI"],
        pitch: "The logo of the association LéoIndieGames and its mascot the little cat are scattered throughout the room! Your objective is to find among all the images on the stage the target that was assigned to you at the beginning of the round. The faster you click, the more points you will earn!",
        techs: ["Unity", "Mirror", "C#"],
        id: 7
    },
    {
        srcImg: "/static/tonatiuh_itza.png",
        extLink: "https://xaltio.itch.io/tonatiuh-itza",
        title: "Tonatiuh Itza - Lead Gameplay Programmer",
        details: "5 personnes - 3 mois",
        year: 2022,
        tasks: ["Fonctionnalités des énigmes (déplacement des murs, casser des vases, changer les contrôles etc)", "Sound Design", "Faciliter la répartition des tâches dans l'équipe",
            "Faciliter les levels designers afin d'implémenter les features plus facilement"],
        pitch: "You play as an adventurer in search of an ancient object that you have always coveted. After long research, you come face to face with a Mayan tablet releasing a very great power. Suddenly, after removing the artifact from its base, you fall and arrive in a Mayan temple, full of mysteries...",
        techs: ["Unreal Engine", "Blueprint"],
        id: 8
    },
    {
        srcImg: "/static/mega_black_hole.jpg",
        extLink: "https://artyu.itch.io/mega-black-hole",
        title: "Mega Black Hole - Gameplay Programmer & Game Designer",
        details: "3 personnes - 1 mois",
        year: 2022,
        tasks: ["Bonus / Malus", "Changer la couleur", "Scoring", "2 joueurs en local", "Game Design",],
        pitch: "Your goal? Dodge the different colored asteroids coming from the mega black hole as long as possible! To survive, your ship can change between two colors allowing it to pass through the obstacles of the same color as it. ",
        techs: ["SFML", "C++"],
        id: 9
    },
    {
        srcImg: "/static/doompa_loompa.jpg",
        extLink: "https://nicolas-blois.itch.io/doompa-loompa",
        title: "Doompa Loompa - Gameplay Programmer",
        details: "11 personnes - 4 jours",
        year: 2021,
        tasks: ["Changement d'armes", "IA des ennemis", "UI"],
        pitch: "Incarnez Willy Wonka et battez-vous contre vos fidèles artisans chocolatiers, les Oompa-Loompas ! Alors que vous vous apprêtez à vous séparer de votre chocolaterie en disséminant les tickets d'or aux quatre coins du monde, les Oompa-Loompas, ne pouvant se résoudre à cette idée, se rebellent et vous attaquent.",
        techs: ["Unreal Engine", "Blueprint"],
        id: 10
    },
]

export default function Projects(){
    return (
    <>
        <div className="flex flex-wrap justify-evenly items-center">
            {
                allP.map((project) => (
                    <ProjectLess key={project.id} projectID={project}/>
                ))
            }
        </div>
    </>
    );
}