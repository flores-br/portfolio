import type { IconType } from 'react-icons'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { AiOutlineMail } from 'react-icons/ai'

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
