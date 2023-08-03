import type { IconType } from 'react-icons'
import {
  SiCss3,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiSass,
  SiTailwindcss,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

// images
import netflix from '../assets/netflix-clone.png'
import lolCards from '../assets/lol-champions-img.png'
import valCarousel from '../assets/VALORANT-Carousel.png'
import javaApp from '../assets/java.jpg'

export type Section = {
  id: number
  name: string
}

export const Sections: Section[] = [
  {
    id: 1,
    name: 'Home',
  },
  {
    id: 2,
    name: 'Projects',
  },
]

type Social = {
  id: number
  name: string
  link: string
  Icon: IconType
}

export const Socials: Social[] = [
  {
    id: 1,
    name: 'GitHub',
    link: 'https://www.github.com/flores-br',
    Icon: SiGithub,
  },
  {
    id: 2,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/bryanflores11/',
    Icon: SiLinkedin,
  },
  {
    id: 3,
    name: 'Email',
    link: 'mailto:floresbryan11@outlook.com',
    Icon: AiOutlineMail,
  },
]

export type Project = {
  id: number
  title: string
  description: string
  image: string
  icons: IconType[]
  github: string
  demo?: string
}

export const Projects: Project[] = [
  {
    id: 1,
    title: 'Netflix Clone',
    description:
      'A Netflix clone built with Next.js, Tailwind CSS, Prisma, and MongoDB.',
    image: netflix,
    icons: [SiNextdotjs, SiReact, SiTailwindcss, SiPrisma, SiMongodb],
    github: 'https://github.com/flores-br/next-netflix',
    demo: 'https://next-netflix-chi.vercel.app',
  },
  {
    id: 2,
    title: 'League of Legends Cards',
    description:
      'React web application for viewing League of Legends champions as well as their lore and stats in card format.',
    image: lolCards,
    icons: [SiReact, SiExpress, SiJavascript, SiHtml5, SiSass],
    github: 'https://github.com/flores-br/react-lol-champions',
    demo: 'https://lol-champ-cards.netlify.app/',
  },
  {
    id: 3,
    title: 'VALORANT Carousel',
    description:
      'React web application for viewing VALORANT agent data and their descriptions in a carousel.',
    image: valCarousel,
    icons: [SiReact, SiJavascript, SiHtml5, SiCss3],
    github: 'https://github.com/flores-br/valorant-carousel',
    demo: 'https://valorant-carousel.netlify.app/',
  },
  {
    id: 4,
    title: 'Appointment Scheduler',
    description:
      'JavaFX application in which users can schedule and view appointments. The app was connected to a MySQL database using JDBC principles. Advanced Java concepts were also used such as the date/time API, streams, login and form validation.',
    image: javaApp,
    icons: [FaJava, SiMysql],
    github: 'https://gitfront.io/r/bflor99/pXdx3GPEzygW/soft-ii-gitfront/',
  },
]
