import { Iproject, Iservice, Iskill } from "./type"
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

export const projects:Iproject[] = [
    {
        name: 'Algo Visual',
        description: 'This app shows the statistical view about corona virus over the world',
        image_path: '/images/algoVisual.png',
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['react'],
        key_techs:['React', 'Chart.js', 'Material Ui']
    },
    {
        name: 'Blink',
        description: 'This app shows the statistical view about corona virus over the world',
        image_path: '/images/blink.jpg',
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['react'],
        key_techs:['React', 'Chart.js', 'Material Ui']
    },
    {
        name: 'Chatapp',
        description: 'This app shows the statistical view about corona virus over the world',
        image_path: '/images/chatapp.jpg',
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['mongo'],
        key_techs:['React', 'Chart.js', 'Material Ui']
    },
    {
        name: 'Codepen',
        description: 'This app shows the statistical view about corona virus over the world',
        image_path: '/images/codepen.png',
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['django'],
        key_techs:['React', 'Chart.js', 'Material Ui']
    },
    {
        name: 'Color ',
        description: 'This app shows the statistical view about corona virus over the world',
        image_path: '/images/color.jpg',
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['react'],
        key_techs:['React', 'Chart.js', 'Material Ui']
    },
    {
        name: 'Covid Tracker',
        description: 'This app shows the statistical view about corona virus over the world',
        image_path: '/images/covid.jpg',
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['django'],
        key_techs:['React', 'Chart.js', 'Material Ui']
    },
    {
        name: 'Dev',
        description: 'This app shows the statistical view about corona virus over the world',
        image_path: '/images/dev.jpg',
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['react'],
        key_techs:['React', 'Chart.js', 'Material Ui']
    },
    {
        name: 'Football app',
        description: 'This app shows the statistical view about corona virus over the world',
        image_path: '/images/football.png',
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['node'],
        key_techs:['React', 'Chart.js', 'Material Ui']
    },
    {
        name: 'Netflix',
        description: 'This app shows the statistical view about corona virus over the world',
        image_path: '/images/Netflix.png',
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['node'],
        key_techs:['React', 'Chart.js', 'Material Ui']
    },
    {
        name: 'New Year',
        description: 'This app shows the statistical view about corona virus over the world',
        image_path: '/images/newYear.jpg',
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['react'],
        key_techs:['React', 'Chart.js', 'Material Ui']
    },
    {
        name: 'Portfolio',
        description: 'This app shows the statistical view about corona virus over the world',
        image_path: '/images/portfolio.jpg',
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['node'],
        key_techs:['React', 'Chart.js', 'Material Ui']
    },
    {
        name: 'Store app',
        description: 'This app shows the statistical view about corona virus over the world',
        image_path: '/images/store.jpg',
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['react'],
        key_techs:['React', 'Chart.js', 'Material Ui']
    },
    {
        name: 'tweetme',
        description: 'This app shows the statistical view about corona virus over the world',
        image_path: '/images/tweetme.jpg',
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['node'],
        key_techs:['React', 'Chart.js', 'Material Ui']
    },
    {
        name: 'Youtube Clone',
        description: 'This app shows the statistical view about corona virus over the world',
        image_path: '/images/youtubeClone.png',
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['react'],
        key_techs:['React', 'Chart.js', 'Material Ui']
    },
]