import { IconType } from "react-icons";

export interface Iservice {
    title: string,
    about: string,
    Icon: IconType
}

export interface Iskill {
    name: string,
    level: string,
    Icon: IconType
}

export type Categoty = 'react' | 'node' | 'express'| 'django' | 'mongo';

export interface Iproject {
    name:string,
    description: string,
    image_path:string,
    deployed_url:string,
    github_url:string,
    category: Categoty[],
    key_techs: string[]
}