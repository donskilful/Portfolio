import { Iservice, Iskill } from "./type"
import { RiComputerLine } from "react-icons/ri"
import {FaServer} from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai"
import {MdDeveloperMode} from 'react-icons/md'
import {BsCircleFill} from 'react-icons/bs'
export const services: Iservice[] = [
    {
        Icon: RiComputerLine,
        title: 'Frontend development',
        about: 'I can build a beautiful and scalable scalable SPA using <b>HTML</b>, <b>CSS</b> and <b> React.js </b>',
    },
    {
        Icon: FaServer,
        title: 'Backend development',
        about: 'handle database, server, api using  <b>Express </b> and other popular frameworks',
    },
    {
        Icon: AiOutlineApi,
        title: 'Api development',
        about: 'I can develope robust REST API using <b> Node Api </b>',
    },
    {
        Icon: MdDeveloperMode,
        title: 'Competitive coder',
        about: 'i am a daily problem solver at <b>HackerRank</b> and <b> Leet Code </b>',
    },
    {
        Icon: AiOutlineAntDesign,
        title: 'UI/UX Designer',
        about: 'i create stunning user interface designs using <b>Figma</b> and <b>Framer<b/>',
    },
    
]

export const languages: Iskill[] = [
    {
        name: 'Javascript',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Typescript',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'Express',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'MongoDb',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'Php',
        level: '30%',
        Icon: BsCircleFill
    },
    {
        name: 'Reactjs',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name: 'Tailwind',
        level: '60%',
        Icon: BsCircleFill
    }
]

export const tools:Iskill[] = [
    {
        name: 'Figma',
        level: '85%',
        Icon: BsCircleFill
    },
    {
        name: 'Photoshop',
        level: '75%',
        Icon: BsCircleFill
    },
    {
        name: 'Illustratotor',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'Figma',
        level: '85%',
        Icon: BsCircleFill
    },
    {
        name: 'Framer',
        level: '50%',
        Icon: BsCircleFill
    },
]